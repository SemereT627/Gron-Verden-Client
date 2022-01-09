import React, { useState } from 'react';

import {
  Form,
  Input,
  Button,
  Select,
  Upload,
  Modal,
  Row,
  Col,
  Space,
  message,
  DatePicker,
} from 'antd';

import { PlusOutlined } from '@ant-design/icons';

import './style.css';

const layout = {
  labelCol: { span: 9 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const IdentifyPlantForm = () => {
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
      <div className="container card my-1 py-2">
        <Form {...layout} name="control-hooks" onFinish={handleSubmit}>
          <h1 className="text-center">Upload an image</h1>
          <p className="text-center font-weight-bold">
            Here is our Plant Detection Form. You can upload and get an info
            about specific plant. <br /> Explore and find out more.
          </p>
          <div className="identify-form">
            <Form.Item name="identifyPlant" label="Identify Plant">
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
          </div>
          <div className="identify-btn">
            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </div>
        </Form>
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

        <div className="container mt-2">
          <Row>
            {/* {plantVariableGlobal &&
              plantVariableGlobal.suggestions.map((p) => {
                return (
                  <>
                    <Col className="mb-2" span={8}>
                      <IdentifyPlantCard
                        image={p.similar_images[0].url}
                        scientificName={p.plant_name}
                        url={p.plant_details.url}
                        wikiDescription={p.plant_details.wiki_description.value}
                        similarProbability={
                          p.similar_images[0].similarity.toFixed(2) * 100
                        }
                      />
                    </Col>
                  </>
                );
              })} */}
          </Row>
        </div>
      </div>
    </>
  );
};

export default IdentifyPlantForm;
