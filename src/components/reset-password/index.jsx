import React, { useState, useEffect } from 'react';

import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Form, Input, Button, Card, message } from 'antd';

import './style.css';
import { useParams } from 'react-router-dom';
import {
  clearResetPasswordSuccess,
  resetPasswordAsync,
} from '../../store/auth/action';

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const ResetPassword = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const params = useParams();
  console.log(params);

  const { resetPasswordLoading, resetPasswordSuccess, resetPasswordError } =
    useSelector((state) => state.auth);

  const handleSubmit = (values) => {
    const { password } = values;
    console.log(password);
    dispatch(resetPasswordAsync(password, params.user_id, params.token_id));
  };

  useEffect(() => {
    if (resetPasswordSuccess) {
      message.success('Password reset successfully');
      history.push('/login');
    }
  }, [resetPasswordSuccess]);

  useEffect(() => {
    if (resetPasswordError) {
      dispatch(clearResetPasswordSuccess());
    }
  }, [resetPasswordError]);

  return (
    <>
      <div className="reset-password">
        <Card style={{ width: '500px' }} className="box-shadow">
          <h1 style={{ textAlign: 'center' }}>Reset Password</h1>
          <Form
            {...formItemLayout}
            id="resetPasswordForm"
            validateMessages={validateMessages}
            onFinish={handleSubmit}
          >
            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
                {
                  length: 4,
                  message: 'Password must be at least 4 characters',
                },
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="confirm"
              label="Confirm Password"
              dependencies={['password']}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'Please confirm your password!',
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        'The two passwords that you entered do not match!'
                      )
                    );
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                xs: { span: 24, offset: 0 },
                sm: { span: 16, offset: 8 },
              }}
            >
              <Button
                type="primary"
                htmlType="submit"
                loading={resetPasswordLoading}
                disabled={resetPasswordLoading}
              >
                Update Password
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </>
  );
};

export default ResetPassword;
