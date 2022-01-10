import { ApplyEventActionTypes } from './types';
import axios from 'axios';

/**
 * apply event actions
 */

export const applyEventStart = () => ({
  type: ApplyEventActionTypes.APPLY_EVENT_START,
});

export const applyEventSuccess = (message) => ({
  type: ApplyEventActionTypes.APPLY_EVENT_SUCCESS,
  payload: {
    message,
  },
});

export const applyEventError = (error) => ({
  type: ApplyEventActionTypes.APPLY_EVENT_ERROR,
  payload: {
    error,
  },
});

export const clearapplyEventSuccess = () => ({
  type: ApplyEventActionTypes.CLEAR_APPLY_EVENT_SUCCESS,
});

/**
 * Async Action Types
 */
export const applyEventAsync = (id) => {
  return async (dispatch, getState) => {
    const {
      auth: { token },
    } = getState();

    try {
      dispatch(applyEventStart());
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/events/apply/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
      dispatch(applyEventSuccess(response.data.msg));
    } catch (err) {
      dispatch(applyEventError(err));
    }
  };
};
