import { EventActionTypes } from './types';

const INITIAL_STATE = {
  fetchEventsLoading: false,
  fetchEventLoading: false,
  fetchEventsSuccess: false,
  fetchEventSuccess: false,

  createEventLoading: false,
  updateEventLoading: false,
  deleteEventLoading: false,

  createEventSuccess: false,
  updateEventSuccess: false,
  deleteEventSuccess: false,

  createEventError: null,
  updateEventError: null,
  deleteEventError: null,

  fetchEventsError: null,
  fetchEventError: null,

  events: [],
  event: {},

  page: 1,
  limit: 10,
  total: 0,
};

const EventReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EventActionTypes.EVENTS_FETCH_START:
      return {
        ...state,
        fetchEventsLoading: true,
        fetchEventsError: null,
      };

    case EventActionTypes.EVENTS_FETCH_SUCCESS:
      return {
        ...state,
        fetchEventsLoading: false,
        events: action.payload.events,
        fetchEventsError: null,
      };

    case EventActionTypes.EVENTS_FETCH_ERROR:
      return {
        ...state,
        fetchEventsLoading: false,
        fetchEventsError: action.payload.error,
      };

    case EventActionTypes.CLEAR_EVENTS_FETCH_SUCCESS:
      return {
        ...state,
        fetchEventsError: false,
        fetchEventsSuccess: false,
      };

    case EventActionTypes.EVENT_FETCH_START:
      return {
        ...state,
        fetchEventLoading: true,
        fetchEventError: null,
      };

    case EventActionTypes.EVENT_FETCH_SUCCESS:
      return {
        ...state,
        fetchEventLoading: false,
        fetchEventSuccess: true,
        event: {
          ...state.event,
          [action.payload.id]: action.payload.event,
        },
        fetchEventError: null,
      };

    case EventActionTypes.EVENT_FETCH_ERROR:
      return {
        ...state,
        fetchEventLoading: false,
        fetchEventError: action.payload.error,
      };

    case EventActionTypes.CLEAR_EVENT_FETCH_SUCCESS:
      return {
        ...state,
        fetchEventLoading: false,
        fetchEventSuccess: false,
        fetchEventsError: false,
      };

    case EventActionTypes.EVENT_CREATE_START:
      return {
        ...state,
        createEventLoading: true,
        createEventError: null,
      };

    case EventActionTypes.EVENT_CREATE_SUCCESS:
      return {
        ...state,
        createEventLoading: false,
        createEventSuccess: true,
        events: [action.payload.event, ...state.events],
        createEventError: null,
      };

    case EventActionTypes.EVENT_CREATE_ERROR:
      return {
        ...state,
        createEventLoading: false,
        createEventError: action.payload.error,
      };

    case EventActionTypes.CLEAR_EVENT_CREATE_SUCCESS:
      return {
        ...state,
        createEventSuccess: false,
        createEventError: false,
      };

    case EventActionTypes.EVENT_UPDATE_START:
      return {
        ...state,
        updateEventLoading: true,
        updateEventError: null,
      };

    case EventActionTypes.EVENT_UPDATE_SUCCESS:
      return {
        ...state,
        updateEventLoading: false,
        updateEventSuccess: true,
        event: {
          ...state.event,
          [action.payload.id]: action.payload.event,
        },
        updateEventError: null,
      };

    case EventActionTypes.EVENT_UPDATE_ERROR:
      return {
        ...state,
        updateEventLoading: false,
        updateEventError: action.payload.error,
      };

    case EventActionTypes.CLEAR_EVENT_UPDATE_SUCCESS:
      return {
        ...state,
        updateEventError: false,
        updateEventLoading: false,
      };

    case EventActionTypes.EVENT_DELETE_START:
      return {
        ...state,
        deleteEventLoading: true,
        deleteEventError: null,
      };

    case EventActionTypes.EVENT_DELETE_SUCCESS:
      return {
        ...state,
        deleteEventLoading: false,
        deleteEventSuccess: true,
        deleteEventError: null,
      };

    case EventActionTypes.EVENT_DELETE_ERROR:
      return {
        ...state,
        deleteEventLoading: false,
        deleteEventSuccess: false,
        deleteEventError: action.payload.error,
      };

    case EventActionTypes.CLEAR_EVENT_DELETE_SUCCESS:
      return {
        ...state,
        deleteEventError: false,
        deleteEventSuccess: false,
        deleteEventLoading: false,
      };

    default:
      return state;
  }
};

export default EventReducer;
