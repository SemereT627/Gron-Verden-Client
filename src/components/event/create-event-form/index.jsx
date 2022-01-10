import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  Form,
  Input,
  Button,
  Select,
  Upload,
  Modal,
  message,
  DatePicker,
  InputNumber,
  notification,
} from 'antd';
import {
  UploadOutlined,
  UserOutlined,
  LoadingOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

import {
  clearcreateEventSuccess,
  createEventAsync,
} from '../../../store/event/action';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 12 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const CreateEvent = ({ visible, onCancel, onSubmit }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { events, createEventError, createEventLoading, createEventSuccess } =
    useSelector((state) => state.event);

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
    const {
      eventDescription,
      eventEndDate,
      eventStartDate,
      eventName,
      eventTotalParticipants,
      eventLogo,
    } = values;

    const newEvent = new FormData();
    newEvent.append('eventDescription', eventDescription);
    newEvent.append('eventEndDate', eventEndDate);
    newEvent.append('eventStartDate', eventStartDate);
    newEvent.append('eventName', eventName);
    newEvent.append('eventTotalParticipants', eventTotalParticipants);
    newEvent.append('eventLogo', form.file);

    console.log(values);
    dispatch(createEventAsync(newEvent));
  };

  const onSubmitForm = () => onSubmit();

  useEffect(() => {
    if (createEventError) {
      dispatch(clearcreateEventSuccess());
    }
  }, [createEventError]);

  useEffect(() => {
    if (createEventSuccess) {
      message.success('Event created successfully');
      dispatch(clearcreateEventSuccess());
      onSubmitForm();
      history.push('/events');
    }
  }, [createEventSuccess]);

  return (
    <>
      {/* {createEventError && createEventError.message
        ? notification.error({
          
          placement:'topRight',
          description: createEventError.data
        })
        : null} */}

      <Modal
        visible={visible}
        onOk={handleSubmit}
        onCancel={onCancel}
        footer={[
          <Button type="primary" danger onClick={onCancel}>
            Cancel
          </Button>,
          <Button
            form="createEvent"
            key="submit"
            htmlType="submit"
            disabled={createEventLoading}
            loading={createEventLoading}
          >
            Submit
          </Button>,
        ]}
      >
        <div className="card mt-2 w-80 m-2 p-2 mx-auto">
          <h2 className="text-center playfair">Create Event</h2>
          <Form
            id="createEvent"
            {...layout}
            name="control-hooks"
            onFinish={handleSubmit}
          >
            <Form.Item name="eventLogo" label="Profile Picture">
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
              name="eventName"
              label="Event Name"
              rules={[{ required: true }]}
            >
              <Input placeholder="Event name" />
            </Form.Item>
            <Form.Item
              name="eventGoal"
              label="Event Goal"
              rules={[{ required: true }]}
            >
              <Input placeholder="Event Goal" />
            </Form.Item>
            <Form.Item
              name="eventStartDate"
              label="StartDate"
              rules={[{ required: true }]}
            >
              <DatePicker className="w-100" placeholder="Start Date" />
            </Form.Item>
            <Form.Item
              name="eventEndDate"
              label="EndDate"
              rules={[{ required: true }]}
            >
              <DatePicker className="w-100" placeholder="End Date" />
            </Form.Item>

            <Form.Item name="eventDescription" label="Description">
              <Input.TextArea placeholder="Event description..." />
            </Form.Item>

            <Form.Item name="eventTotalParticipants" label="Total Participants">
              <InputNumber
                min={1}
                max={500}
                placeholder="Total Event Participants"
                className="w-100"
              />
            </Form.Item>
          </Form>
        </div>
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

export default CreateEvent;
