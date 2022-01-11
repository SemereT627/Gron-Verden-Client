import React, { useState, useEffect } from 'react';
import {
  Select,
  Card,
  Form,
  Input,
  Button,
  Typography,
  Alert,
  Modal,
  Upload,
  message,
  DatePicker,
  notification,
} from 'antd';
import {
  LoadingOutlined,
  PlusOutlined,
  UploadOutlined,
  UserOutlined,
} from '@ant-design/icons';

import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect, useHistory } from 'react-router-dom';

import { clearSignUpSuccess, signUpAsync } from '../../store/auth/action';

import logo from '../../assets/images/logo.png';

import './style.css';

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const RegisterPage = () => {
  const [registrationForm] = Form.useForm();
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

  const dispatch = useDispatch();
  const history = useHistory();
  const { signUpLoading, signUpSuccess, signUpError, token } = useSelector(
    (state) => state.auth
  );

  const handleSubmit = (values) => {
    const {
      fullName,
      email,
      password,
      userName,
      phoneNumber,
      gender,
      dateOfBirth,
      city,
    } = values;
    if (!form.file) {
      message.error('Profile Picture is required');
    } else if (!isJpgOrPng(form.file)) {
      message.error('Profile picture can only be JPG or PNG file');
    } else {
      const formData = new FormData();
      formData.append('firstName', fullName.split(' ')[0]);
      formData.append('lastName', fullName.split(' ')[1]);
      formData.append('email', email);
      formData.append('password', password);
      formData.append('userName', userName);
      formData.append('phoneNumber', phoneNumber);
      formData.append('gender', gender);
      formData.append('dateOfBirth', dateOfBirth);
      formData.append('city', city);
      formData.append('profilePicture', form.file);
      formData.append('userRole', 'user');

      dispatch(signUpAsync(formData));
    }
  };

  useEffect(() => {
    if (signUpError) {
      dispatch(clearSignUpSuccess());
    }
  }, [signUpError]);

  useEffect(() => {
    if (signUpSuccess) {
      message.success('Registered Successfully');
      history.push('/login');
    }
  }, [signUpSuccess]);

  return (
    <>
      {signUpError && signUpError.message
        ? notification.error({
            message: 'Error',
            placement: 'topRight',
            description: signUpError.response.data.msg,
          })
        : null}

      <div className="register-form">
        <Card
          style={{ height: '100%', position: 'relative' }}
          className="box-shadow"
        >
          <Form
            {...layout}
            form={registrationForm}
            name="control-hooks"
            onFinish={handleSubmit}
            className="form-scroll"
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                paddingBottom: '20px',
              }}
            >
              <img src={logo} alt="Grøn Verden" />
            </div>
            <h4 style={{ textAlign: 'center' }}>Register</h4>
            <div className="basic-form">
              <div>
                <Form.Item name="profile" label="Profile Picture">
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
                  name="fullName"
                  label="Full Name"
                  rules={[{ required: true, message: 'Full name is required' }]}
                >
                  <Input placeholder="Full name" />
                </Form.Item>
                <Form.Item
                  name="userName"
                  label="Username"
                  rules={[{ required: true, message: 'User name is required' }]}
                >
                  <Input
                    placeholder="Enter your username"
                    prefix={<UserOutlined className="site-form-item-icon" />}
                  />
                </Form.Item>

                <Form.Item name="gender" label="Gender">
                  <Select placeholder="Gender" allowClear>
                    <Option value="Male">Male</Option>
                    <Option value="Female">Female</Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  name="dateOfBirth"
                  label="Date Of Birth"
                  rules={[
                    { required: true, message: 'Date of Birth is required' },
                  ]}
                >
                  <DatePicker
                    placeholder="Select birth date"
                    className="w-100"
                  />
                </Form.Item>
              </div>

              <div>
                <Form.Item
                  name="email"
                  label="Email"
                  rules={[{ required: true, message: 'Email is required' }]}
                >
                  <Input placeholder="Email" />
                </Form.Item>
                <Form.Item
                  name="password"
                  label="Password"
                  rules={[{ required: true, message: 'Password is required' }]}
                >
                  <Input.Password placeholder="Password" />
                </Form.Item>
                <Form.Item
                  name="phoneNumber"
                  label="Phone Number"
                  rules={[
                    { required: true, message: 'Phone number is required' },
                  ]}
                >
                  <Input placeholder="Phone number" />
                </Form.Item>
                <Form.Item
                  name="city"
                  label="City"
                  rules={[{ required: true, message: 'City is required' }]}
                >
                  <Input placeholder="City" />
                </Form.Item>
                <Form.Item {...tailLayout}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    style={{
                      width: '100%',
                    }}
                    loading={signUpLoading}
                    disabled={signUpLoading}
                  >
                    Submit
                  </Button>
                </Form.Item>
                <Form.Item
                  style={{
                    display: 'flex',
                    textAlign: 'right',
                    justifyContent: 'flex-end',
                  }}
                >
                  <Typography.Text>
                    Already have account? <Link to="/login">Log in</Link>
                  </Typography.Text>
                </Form.Item>
              </div>
            </div>
          </Form>
        </Card>
      </div>
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

export default RegisterPage;
