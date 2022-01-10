import { EventActionTypes } from './types';
import axios from 'axios';

export const fetchEventsStart = () => ({
  type: EventActionTypes.EVENTS_FETCH_START,
});

export const fetchEventsSuccess = (events) => ({
  type: EventActionTypes.EVENTS_FETCH_SUCCESS,
  payload: {
    events,
  },
});

export const fetchEventsError = (error) => ({
  type: EventActionTypes.EVENTS_FETCH_ERROR,
  payload: {
    error,
  },
});

export const clearfetchEventsSuccess = () => ({
  type: EventActionTypes.CLEAR_EVENTS_FETCH_SUCCESS,
});

export const fetchEventStart = () => ({
  type: EventActionTypes.EVENT_FETCH_START,
});

export const fetchEventSuccess = (id, event) => ({
  type: EventActionTypes.EVENT_FETCH_SUCCESS,
  payload: {
    id,
    event,
  },
});

export const fetchEventError = (error) => ({
  type: EventActionTypes.EVENT_FETCH_ERROR,
  payload: {
    error,
  },
});

export const clearfetchEventSuccess = () => ({
  type: EventActionTypes.CLEAR_EVENT_FETCH_SUCCESS,
});

/**
 * Create event actions
 * @returns Action
 */

export const createEventStart = () => ({
  type: EventActionTypes.EVENT_CREATE_START,
});

export const createEventSuccess = (event) => ({
  type: EventActionTypes.EVENT_CREATE_SUCCESS,
  payload: {
    event,
  },
});

export const createEventError = (error) => ({
  type: EventActionTypes.EVENT_CREATE_ERROR,
  payload: {
    error,
  },
});

export const clearcreateEventSuccess = () => ({
  type: EventActionTypes.CLEAR_EVENT_CREATE_SUCCESS,
});

/**
 * Update event actions
 * @returns Action
 */

export const updateEventStart = () => ({
  type: EventActionTypes.EVENT_UPDATE_START,
});

export const updateEventSuccess = (id, event) => ({
  type: EventActionTypes.EVENT_UPDATE_SUCCESS,
  payload: {
    id,
    event,
  },
});

export const updateEventError = (error) => ({
  type: EventActionTypes.EVENT_UPDATE_ERROR,
  payload: {
    error,
  },
});

export const clearupdateEventSuccess = () => ({
  type: EventActionTypes.CLEAR_EVENT_UPDATE_SUCCESS,
});

export const deleteEventStart = () => ({
  type: EventActionTypes.EVENT_DELETE_START,
});

export const deleteEventSuccess = (id) => ({
  type: EventActionTypes.EVENT_DELETE_SUCCESS,
  payload: {
    id,
  },
});

export const deleteEventError = (error) => ({
  type: EventActionTypes.EVENT_DELETE_ERROR,
  payload: {
    error,
  },
});

export const cleardeleteEventSuccess = () => ({
  type: EventActionTypes.CLEAR_EVENT_DELETE_SUCCESS,
});

/**
 * Async action types
 */

export const fetchEventsAsync = () => {
  return async (dispatch, getState) => {
    const {
      auth: { token },
    } = getState();

    try {
      dispatch(fetchEventsStart());
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/events`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);

      dispatch(fetchEventsSuccess(response.data.events));
    } catch (err) {
      dispatch(fetchEventsError(err));
    }
  };
};

export const fetchAllShopsAsync = () => {
  return async (dispatch, getState) => {
    const {
      auth: { token },
    } = getState();

    try {
      dispatch(fetchEventsStart());
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/events`,
        {
          params: {
            _all: true,
          },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response);

      //   dispatch(fetchEventsSuccess(response.data.data.owners));
    } catch (err) {
      dispatch(fetchEventsError(err));
    }
  };
};

export const fetchEventAsync = (id) => {
  return async (dispatch, getState) => {
    const {
      auth: { token },
    } = getState();

    try {
      dispatch(fetchEventStart());
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/events/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response);

      //   dispatch(fetchEventSuccess(id, response.data.data.owner));
    } catch (err) {
      dispatch(fetchEventError(err));
    }
  };
};

export const createEventAsync = (formData) => {
  return async (dispatch, getState) => {
    const {
      auth: { token },
    } = getState();

    try {
      dispatch(createEventStart());

      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/events`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      dispatch(createEventSuccess(response.data.event));
    } catch (err) {
      dispatch(createEventError(err));
    }
  };
};

export const updateEventAsync = (id, form) => {
  return async (dispatch, getState) => {
    const {
      auth: { token },
    } = getState();

    try {
      dispatch(updateEventStart());
      const response = await axios.patch(
        `${process.env.REACT_APP_API_URL}/events/${id}`,
        form,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);

      //   dispatch(updateEventSuccess(id, response.data.owner));
    } catch (err) {
      dispatch(updateEventError(err));
    }
  };
};

export const deleteEventAsync = (id) => {
  return async (dispatch, getState) => {
    const {
      auth: { token },
    } = getState();

    try {
      dispatch(deleteEventStart());
      const response = await axios.delete(
        `${process.env.REACT_APP_API_URL}/events/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response);

      dispatch(deleteEventSuccess());
    } catch (err) {
      dispatch(deleteEventError(err));
    }
  };
};
