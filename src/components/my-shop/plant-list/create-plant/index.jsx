import React, { useState, useEffect } from 'react';

import { Form, Button, Input, Select, InputNumber, Modal } from 'antd';
import { Upload, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';

import {
  clearcreatePlantSuccess,
  createPlantAsync,
} from '../../../../store/plant/action';

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
    const { plantName, plantType, plantLength, plantPrice, plantDescription } =
      values;

    const newPlant = new FormData();
    newPlant.append('plantName', plantName);
    newPlant.append('plantType', plantType);
    newPlant.append('plantDescription', plantDescription);
    newPlant.append('plantLength', plantLength);
    newPlant.append('plantPrice', plantPrice);
    newPlant.append('plantImage', form.file);

    dispatch(createPlantAsync(newPlant));
  };

  const [formx] = Form.useForm();
  const reset = () => {
    formx.resetFields();
  };

  useEffect(() => {
    if (createPlantSuccess) {
      message.success('Plant created successfully');
      dispatch(clearcreatePlantSuccess());
      onCancel();
      reset();
    }
  }, [createPlantSuccess]);

  useEffect(() => {
    if (createPlantError) {
      dispatch(clearcreatePlantSuccess());
    }
  }, [createPlantError]);

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
            disabled={createPlantLoading}
            loading={createPlantLoading}
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
          form={formx}
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
            rules={[{ required: true, message: 'Plant Name is required' }]}
          >
            <Input placeholder="Plant name" />
          </Form.Item>
          <Form.Item
            name="plantType"
            label="Type"
            rules={[{ required: true, message: 'Plant Type is required' }]}
          >
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
            rules={[{ required: true, message: 'Plant Length is required' }]}
          >
            <InputNumber
              min={1}
              max={300}
              className="w-100"
              placeholder="Plant length in cm"
            />
          </Form.Item>
          <Form.Item
            name="plantPrice"
            label="Plant Price"
            rules={[{ required: true, message: 'Plant Price is required' }]}
          >
            <InputNumber
              min={20}
              max={50000}
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
