import React, { useState, useEffect } from 'react';

import { Modal, Input, Form, Button, notification, message } from 'antd';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {
  clearForgotPasswordSuccess,
  forgotPasswordAsync,
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

const ForgotPassword = ({ visible, showModal, cancelModal }) => {
  const dispatch = useDispatch();

  const { forgotPasswordStart, forgotPasswordSuccess, forgotPasswordError } =
    useSelector((state) => state.auth);

  const handleSubmit = (values) => {
    const { email } = values;
    dispatch(forgotPasswordAsync(email));
  };

  useEffect(() => {
    if (forgotPasswordSuccess) {
      message.success('Password Reset Link is Sent. Please Check your Email');
      dispatch(clearForgotPasswordSuccess());
    }
  }, [forgotPasswordSuccess]);

  useEffect(() => {
    if (forgotPasswordError) {
      dispatch(clearForgotPasswordSuccess());
    }
  }, [forgotPasswordError]);

  return (
    <>
      {forgotPasswordError && forgotPasswordError.message
        ? notification.error({
            message: 'Error',
            placement: 'topRight',
            description: `${forgotPasswordError.response.data.msg}`,
          })
        : null}

      <Modal
        title="Reset Password"
        visible={visible}
        onOk={handleSubmit}
        onCancel={cancelModal}
        footer={[
          <Button type="primary" danger onClick={cancelModal}>
            Cancel
          </Button>,
          <Button
            form="resetPasswordForm"
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
          id="resetPasswordForm"
          validateMessages={validateMessages}
          onFinish={handleSubmit}
        >
          <Form.Item
            name={'email'}
            label="Email"
            rules={[
              {
                type: 'email',
                message: 'Invalid email address',
              },
              {
                required: true,
                message: 'Please provide your email',
              },
            ]}
          >
            <Input placeholder="Input your Email" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ForgotPassword;
