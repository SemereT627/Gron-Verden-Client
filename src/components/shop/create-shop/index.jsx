import React, { useEffect, useState } from 'react';

import {
  Form,
  Input,
  Button,
  Select,
  Upload,
  Modal,
  message,
  DatePicker,
  TimePicker,
} from 'antd';
import {
  UploadOutlined,
  UserOutlined,
  LoadingOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import {
  createShopAsync,
  clearcreateShopSuccess,
} from '../../../store/shop/action';
import { logOut } from '../../../store/auth/action';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 10 },
};

const CreateShop = ({ visible, onCancel }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { createShopLoading, createShopSuccess, createShopError } = useSelector(
    (state) => state.shop
  );

  const [form, setForm] = useState({
    file: null,
    fileList: [],
  });

  const [preview, setPreview] = useState({
    previewVisible: false,
    previewImage: '',
    previewTitle: '',
  });

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreview({
      previewImage: file.url || file.preview,
      previewVisible: true,
      previewTitle:
        file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
    });
  };
  const beforeUpload = (file) => {
    if (!isJpgOrPng(file)) {
      message.error('Book cover can only be JPG/PNG file!');
    }
    return false;
  };

  const isJpgOrPng = (file) => {
    return (
      file.type === 'image/jpeg' ||
      file.type === 'image/jpg' ||
      file.type === 'image/png'
    );
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  const handleChange = ({ fileList, file }) =>
    setForm({ ...form, file, fileList });

  const handleSubmit = (values) => {
    const { shopName, shopDescription, startingHour, closingHour } = values;
    const newShop = new FormData();
    newShop.append('shopName', shopName);
    newShop.append('shopDescription', shopDescription);
    newShop.append('shopImage', form.file);
    newShop.append('startingHour', startingHour);
    newShop.append('closingHour', closingHour);

    console.log(values);

    dispatch(createShopAsync(newShop));
  };

  useEffect(() => {
    if (createShopSuccess) {
      message.success('Shop created successfully. Logging out');
      dispatch(clearcreateShopSuccess());
      dispatch(logOut());
    }
  }, [createShopSuccess]);

  useEffect(() => {
    if (createShopError) {
      dispatch(clearcreateShopSuccess());
    }
  }, [createShopError]);

  return (
    <>
      <Modal
        title="Create Shop"
        visible={visible}
        onOk={handleSubmit}
        onCancel={onCancel}
        footer={[
          <Button type="primary" onClick={onCancel}>
            Cancel
          </Button>,
          <Button
            form="createShop"
            key="submit"
            htmlType="submit"
            disabled={createShopLoading}
            loading={createShopLoading}
          >
            Submit
          </Button>,
        ]}
      >
        <Form
          id="createShop"
          {...layout}
          name="control-hooks"
          onFinish={handleSubmit}
          className="pt-4"
        >
          <Form.Item key={'shopLogo'} name="shopLogo" label="Profile Picture">
            <Upload
              listType="picture-card"
              fileList={form.fileList}
              onPreview={handlePreview}
              onChange={handleChange}
              beforeUpload={beforeUpload}
            >
              {form.fileList.length === 1 ? null : uploadButton}
            </Upload>
          </Form.Item>
          <Form.Item
            key={'shopName'}
            name="shopName"
            label="Shop Name"
            rules={[{ required: true }]}
          >
            <Input placeholder="Shop name" />
          </Form.Item>
          <Form.Item
            key={'shour'}
            name="startingHour"
            label="Starting Hour"
            rules={[{ required: true }]}
          >
            <TimePicker use12Hours />
          </Form.Item>
          <Form.Item
            key={'chour'}
            name="closingHour"
            label="Closing Hour"
            rules={[{ required: true }]}
          >
            <TimePicker use12Hours />
          </Form.Item>

          <Form.Item
            key={'shopDescription'}
            name="shopDescription"
            label="Description"
          >
            <Input.TextArea />
          </Form.Item>
        </Form>
      </Modal>
      <Modal
        visible={preview.previewVisible}
        title={preview.previewTitle}
        footer={null}
        onCancel={() => setPreview({ previewVisible: false })}
      >
        <img
          alt="example"
          style={{ width: '100%' }}
          src={preview.previewImage}
        />
      </Modal>
    </>
  );
};

export default CreateShop;
