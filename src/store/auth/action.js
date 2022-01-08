import { AuthActionTypes } from './types';
import axios from 'axios';
import crypto from 'crypto-js';

/**
 * Login Actions
 */

export const loginStart = () => ({
  type: AuthActionTypes.LOGIN_START,
});

export const loginSuccess = (hashedData, user, token) => ({
  type: AuthActionTypes.LOGIN_SUCCESS,
  payload: {
    hashedData,
    user,
    token,
  },
});

export const loginError = (error) => ({
  type: AuthActionTypes.LOGIN_ERROR,
  payload: {
    error,
  },
});

export const clearLoginSuccess = () => ({
  type: AuthActionTypes.CLEAR_LOGIN_SUCCESS,
});

/**
 * Logout actions
 */
export const logOut = () => ({
  type: AuthActionTypes.LOG_OUT,
});

/**
 * Sign up actions
 */

export const signUpStart = () => ({
  type: AuthActionTypes.SIGN_UP_START,
});

export const signUpSuccess = (hashedData, user, token) => ({
  type: AuthActionTypes.SIGN_UP_SUCCESS,
  payload: {
    hashedData,
    token,
    user,
  },
});

export const signUpError = (error) => ({
  type: AuthActionTypes.SIGN_UP_ERROR,
  payload: {
    error,
  },
});

export const clearSignUpSuccess = () => ({
  type: AuthActionTypes.CLEAR_SIGN_UP_SUCCESS,
});

/**
 * Forgot password actions
 */
export const forgotPasswordStart = () => ({
  type: AuthActionTypes.FORGOT_PASSWORD_START,
});

export const forgotPasswordSuccess = (msg) => ({
  type: AuthActionTypes.FORGOT_PASSWORD_SUCCESS,
  payload: {
    msg,
  },
});

export const forgotPasswordError = (error) => ({
  type: AuthActionTypes.FORGOT_PASSWORD_ERROR,
  payload: {
    error,
  },
});

export const clearForgotPasswordSuccess = () => ({
  type: AuthActionTypes.CLEAR_FORGOT_PASSWORD_SUCCESS,
});

export const resetPasswordStart = () => ({
  type: AuthActionTypes.RESET_PASSWORD_START,
});

export const resetPasswordSuccess = (msg) => ({
  type: AuthActionTypes.RESET_PASSWORD_SUCCESS,
  payload: {
    msg,
  },
});

export const resetPasswordError = (error) => ({
  type: AuthActionTypes.RESET_PASSWORD_ERROR,
  payload: {
    error,
  },
});

export const clearResetPasswordSuccess = () => ({
  type: AuthActionTypes.CLEAR_RESET_PASSWORD_SUCCESS,
});

/**
 * Async Action Types
 */
export const loginAsync = (email, password) => {
  return async (dispatch, getState) => {
    try {
      dispatch(loginStart());
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/login`,
        { email, password }
      );

      const hashedData = crypto.AES.encrypt(
        JSON.stringify({
          token: response.data.token,
          user: response.data.user,
        }),
        process.env.REACT_APP_SECRET_KEY
      ).toString();

      dispatch(
        loginSuccess(hashedData, response.data.user, response.data.token)
      );
    } catch (error) {
      dispatch(loginError(error));
    }
  };
};

export const signUpAsync = (formData) => {
  return async (dispatch, getState) => {
    try {
      dispatch(signUpStart());

      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/register`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      const hashedData = crypto.AES.encrypt(
        JSON.stringify({
          token: response.data.token,
          user: response.data.user,
        }),
        process.env.REACT_APP_SECRET_KEY
      ).toString();

      dispatch(
        signUpSuccess(hashedData, response.data.user, response.data.token)
      );
    } catch (err) {
      dispatch(signUpError(err));
    }
  };
};

export const forgotPasswordAsync = (email) => {
  return async (dispatch, getState) => {
    try {
      dispatch(forgotPasswordStart());
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/passwordReset`,
        { email }
      );
      console.log(response);
      dispatch(forgotPasswordSuccess(response.data.msg));
    } catch (err) {
      dispatch(forgotPasswordError(err));
    }
  };
};

export const resetPasswordAsync = (password, user_id, token_id) => {
  return async (dispatch, getState) => {
    try {
      dispatch(resetPasswordStart());
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/passwordReset/${user_id}/${token_id}`,
        { password }
      );
      console.log(response);
      dispatch(resetPasswordSuccess(response.data.msg));
    } catch (err) {
      dispatch(resetPasswordError(err));
    }
  };
};
