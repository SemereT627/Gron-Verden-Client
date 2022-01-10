import React, { useEffect, useState } from 'react';

import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './style.css';
import logo from '../../assets/images/logo.png';
import {
  Card,
  Form,
  Input,
  Button,
  Typography,
  Alert,
  message,
  notification,
} from 'antd';

import { loginAsync, clearLoginSuccess } from '../../store/auth/action';

import './style.css';
import ForgotPassword from '../../components/forgot-password';

const LoginPage = () => {
  const [visible, setVisible] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const { loginLoading, loginSuccess, loginError, token } = useSelector(
    (state) => state.auth
  );

  const handleSubmit = (values) => {
    const { email, password } = values;
    console.log(email, password);
    dispatch(loginAsync(email, password));
  };

  useEffect(() => {
    console.log(token);
    if (token) {
      history.push('/home');
    }
  }, [token]);

  useEffect(() => {
    if (loginError) {
      dispatch(clearLoginSuccess());
    }
  }, [loginError]);

  const showModal = () => {
    setVisible(true);
  };

  const cancelModal = () => {
    setVisible(false);
  };

  return (
    <>
      {loginError && loginError.message
        ? notification.error({
            message: 'Error',
            placement: 'topRight',
            description: `${loginError.response.data.msg}`,
          })
        : null}

      <div className={'login-main'}>
        <Card style={{ width: '500px' }} className="box-shadow">
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
          <h4 style={{ textAlign: 'center' }}>Login</h4>
          {loginError && loginError.response ? (
            <Alert
              message={loginError.response.data.message}
              type="error"
              closable
              style={{
                marginTop: 5,
                marginBottom: 5,
              }}
            />
          ) : null}

          <Form initialValues={{}} onFinish={handleSubmit}>
            <Form.Item
              name="email"
              rules={[{ required: true, message: 'Please input your email!' }]}
            >
              <Input size="large" placeholder="Email or Phone Number" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: 'Please input your password!' },
              ]}
            >
              <Input.Password size="large" placeholder="Password" />
            </Form.Item>

            <Form.Item>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ width: '200px' }}
                  loading={loginLoading}
                  disabled={loginLoading}
                >
                  Login
                </Button>
              </div>
            </Form.Item>
            <Form.Item>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Typography.Text>
                  Don't have account? <Link to="/register">Sign Up</Link>
                </Typography.Text>
                <Typography.Text>
                  <a onClick={() => showModal()}>Forgot Password?</a>
                </Typography.Text>
              </div>
              <Typography.Text>
                <a>Google</a>
              </Typography.Text>
            </Form.Item>
          </Form>
        </Card>
        <ForgotPassword
          visible={visible}
          showModal={showModal}
          cancelModal={cancelModal}
          // onSubmit={}
        />
      </div>
    </>
  );
};

export default LoginPage;
