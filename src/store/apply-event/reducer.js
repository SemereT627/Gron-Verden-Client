import { ApplyEventActionTypes } from './types';

const INITIAL_STATE = {
  applyEventLoading: false,
  applyEventSuccess: false,
  applyEventError: null,

  message: '',
};

const applyEventReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ApplyEventActionTypes.APPLY_EVENT_START:
      return {
        ...state,
        applyEventLoading: true,
        applyEventSuccess: false,
        applyEventError: false,
      };

    case ApplyEventActionTypes.APPLY_EVENT_SUCCESS:
      return {
        ...state,
        applyEventLoading: false,
        applyEventSuccess: true,
        applyEventError: false,
        message: action.payload.message,
      };

    case ApplyEventActionTypes.APPLY_EVENT_ERROR:
      return {
        ...state,
        applyEventLoading: false,
        applyEventSuccess: false,
        applyEventError: action.payload.error,
      };

    case ApplyEventActionTypes.CLEAR_APPLY_EVENT_SUCCESS:
      return {
        ...state,
        applyEventLoading: false,
        applyEventError: null,
      };

    default:
      return state;
  }
};

export default applyEventReducer;
