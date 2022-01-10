import React, { useState } from 'react';

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

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 10 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 12 },
};

const CreateShop = ({ visible, onCancel }) => {
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
    console.log(values);
  };

  return (
    <>
      <Modal
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
            // disabled={createDriverLoading}
            // loading={createDriverLoading}
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
          <h1 className="text-center">Create Shop</h1>
          <Form.Item name="shopLogo" label="Profile Picture">
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
            name="shopName"
            label="Shop Name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="startingHour"
            label="Starting Hour"
            rules={[{ required: true }]}
          >
            <TimePicker use12Hours />
          </Form.Item>
          <Form.Item
            name="closingHour"
            label="Closing Hour"
            rules={[{ required: true }]}
          >
            <TimePicker use12Hours />
          </Form.Item>

          <Form.Item name="shopDescription" label="Description">
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
