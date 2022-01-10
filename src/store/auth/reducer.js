import { AuthActionTypes } from './types';
import Cookies from 'js-cookie';
import getCurrentUser from '../../utils/getCurrentUser';

const authCookies = getCurrentUser || JSON.stringify({});

const INITIAL_STATE = {
  loginLoading: false,
  loginSuccess: false,
  loginError: null,

  signUpLoading: false,
  signUpSuccess: false,
  signUpError: null,

  forgotPasswordLoading: false,
  forgotPasswordSuccess: false,
  forgotPasswordError: null,

  resetPasswordLoading: false,
  resetPasswordSuccess: false,
  resetPasswordError: null,

  user: {},
  token: null,
  ...JSON.parse(authCookies),
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthActionTypes.LOGIN_START:
      return {
        ...state,
        loginError: null,
        loginSuccess: false,
        loginLoading: true,
      };

    case AuthActionTypes.LOGIN_SUCCESS:
      Cookies.set(
        process.env.REACT_APP_COOKIES_KEY,
        action.payload.hashedData.toString()
      );

      return {
        ...state,
        loginLoading: false,
        loginSuccess: true,
        loginError: false,
        user: action.payload.user,
        token: action.payload.token,
      };

    case AuthActionTypes.LOGIN_ERROR:
      return {
        ...state,
        loginLoading: false,
        loginSuccess: false,
        loginError: action.payload.error,
      };

    case AuthActionTypes.CLEAR_LOGIN_SUCCESS:
      return {
        ...state,
        loginLoading: false,
        loginSuccess: false,
        loginError: false,
      };

    case AuthActionTypes.SIGN_UP_START:
      return {
        ...state,
        signUpLoading: true,
        signUpSuccess: false,
        signUpError: null,
      };

    case AuthActionTypes.SIGN_UP_SUCCESS:
      Cookies.set(
        process.env.REACT_APP_COOKIES_KEY,
        action.payload.hashedData.toString()
      );
      return {
        ...state,
        signUpLoading: false,
        signUpSuccess: true,
        signUpError: null,
        user: action.payload.user,
        token: action.payload.token,
      };

    case AuthActionTypes.SIGN_UP_ERROR:
      return {
        ...state,
        signUpLoading: false,
        signUpSuccess: false,
        signUpError: action.payload.error,
      };

    case AuthActionTypes.CLEAR_SIGN_UP_SUCCESS:
      return {
        ...state,
        signUpLoading: false,
        signUpSuccess: false,
        signUpError: null,
      };

    case AuthActionTypes.FORGOT_PASSWORD_START:
      return {
        ...state,
        forgotPasswordLoading: true,
        forgotPasswordSuccess: false,
        forgotPasswordError: null,
      };

    case AuthActionTypes.FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        forgotPasswordLoading: false,
        forgotPasswordSuccess: true,
        forgotPasswordError: null,
      };

    case AuthActionTypes.CLEAR_FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        forgotPasswordLoading: false,
        forgotPasswordSuccess: false,
        forgotPasswordError: null,
      };

    case AuthActionTypes.RESET_PASSWORD_START:
      return {
        ...state,
        resetPasswordLoading: true,
        resetPasswordSuccess: false,
        resetPasswordError: null,
      };

    case AuthActionTypes.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        resetPasswordLoading: true,
        resetPasswordSuccess: true,
        resetPasswordError: null,
      };

    case AuthActionTypes.RESET_PASSWORD_ERROR:
      return {
        ...state,
        resetPasswordLoading: false,
        resetPasswordSuccess: false,
        resetPasswordError: action.payload.error,
      };

    case AuthActionTypes.CLEAR_RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        resetPasswordLoading: false,
        resetPasswordSuccess: false,
        resetPasswordError: null,
      };

    case AuthActionTypes.LOG_OUT:
      Cookies.remove(process.env.REACT_APP_COOKIES_KEY);
      return {
        ...state,
        user: null,
        token: null,
      };

    default:
      return state;
  }
};

export default reducer;
