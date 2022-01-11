import React, { useState } from 'react';

import {
  Drawer,
  Form,
  Button,
  Col,
  Row,
  Input,
  Select,
  DatePicker,
  InputNumber,
  Modal,
} from 'antd';
import { Upload, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const { Option } = Select;

const CreatePlantInMyShop = ({ visible, onCancel }) => {
  const dispatch = useDispatch();
  const { createPlantLoading, createPlantSuccess, createPlantError } =
    useSelector((state) => state.plant);

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
        title="Create Plant"
        visible={visible}
        onOk={handleSubmit}
        onCancel={onCancel}
        footer={[
          <Button type="primary" onClick={onCancel}>
            Cancel
          </Button>,
          <Button
            form="createPlant"
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
          id="createPlant"
          {...layout}
          name="control-hooks"
          onFinish={handleSubmit}
        >
          <Form.Item name="plantImage" label="Profile Picture">
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
            name="plantName"
            label="Plant Name"
            rules={[{ required: true }]}
          >
            <Input placeholder="Plant name" />
          </Form.Item>
          <Form.Item name="plantType" label="Type" rules={[{ required: true }]}>
            <Select placeholder="Plant Type" allowClear>
              <Option value="tableTreePlant">Table Tree Plant</Option>
              <Option value="indoorPlant">Indoor Plant</Option>
              <Option value="officePlant">Office Plant</Option>
              <Option value="housePlant">House Plant</Option>
              <Option value="cactusPlant">Cactus Plant</Option>
            </Select>
          </Form.Item>
          <Form.Item name="plantDescription" label="Description">
            <Input.TextArea placeholder="Plant Description..." />
          </Form.Item>
          <Form.Item
            name="plantLength"
            label="Plant Length"
            rules={[{ required: true }]}
          >
            <InputNumber
              min={1}
              max={300}
              defaultValue={25}
              className="w-100"
              placeholder="Plant length in cm"
            />
          </Form.Item>
          <Form.Item
            name="plantPrice"
            label="Plant Price"
            rules={[{ required: true }]}
          >
            <InputNumber
              min={20}
              max={50000}
              defaultValue={200}
              placeholder="Plant price"
              className="w-100"
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default CreatePlantInMyShop;
