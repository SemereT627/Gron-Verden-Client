import { ShopActionTypes } from './types';
import axios from 'axios';

export const fetchShopsStart = () => ({
  type: ShopActionTypes.SHOPS_FETCH_START,
});

export const fetchShopsSuccess = (shops) => ({
  type: ShopActionTypes.SHOPS_FETCH_SUCCESS,
  payload: {
    shops,
  },
});

export const fetchShopsError = (error) => ({
  type: ShopActionTypes.SHOPS_FETCH_ERROR,
  payload: {
    error,
  },
});

export const clearfetchShopsSuccess = () => ({
  type: ShopActionTypes.CLEAR_SHOPS_FETCH_SUCCESS,
});

export const fetchShopStart = () => ({
  type: ShopActionTypes.SHOP_FETCH_START,
});

export const fetchShopSuccess = (id, shop) => ({
  type: ShopActionTypes.SHOP_FETCH_SUCCESS,
  payload: {
    id,
    shop,
  },
});

export const fetchShopError = (error) => ({
  type: ShopActionTypes.SHOP_FETCH_ERROR,
  payload: {
    error,
  },
});

export const clearfetchShopSuccess = () => ({
  type: ShopActionTypes.CLEAR_SHOP_FETCH_SUCCESS,
});

/**
 * Create shop actions
 * @returns Action
 */

export const createShopStart = () => ({
  type: ShopActionTypes.SHOP_CREATE_START,
});

export const createShopSuccess = (shop) => ({
  type: ShopActionTypes.SHOP_CREATE_SUCCESS,
  payload: {
    shop,
  },
});

export const createShopError = (error) => ({
  type: ShopActionTypes.SHOP_CREATE_ERROR,
  payload: {
    error,
  },
});

export const clearcreateShopSuccess = () => ({
  type: ShopActionTypes.CLEAR_SHOP_CREATE_SUCCESS,
});

/**
 * Update shop actions
 * @returns Action
 */

export const updateShopStart = () => ({
  type: ShopActionTypes.SHOP_UPDATE_START,
});

export const updateShopSuccess = (id, shop) => ({
  type: ShopActionTypes.SHOP_UPDATE_SUCCESS,
  payload: {
    id,
    shop,
  },
});

export const updateShopError = (error) => ({
  type: ShopActionTypes.SHOP_UPDATE_ERROR,
  payload: {
    error,
  },
});

export const clearupdateShopSuccess = () => ({
  type: ShopActionTypes.CLEAR_SHOP_UPDATE_SUCCESS,
});

export const deleteShopStart = () => ({
  type: ShopActionTypes.SHOP_DELETE_START,
});

export const deleteShopSuccess = (id) => ({
  type: ShopActionTypes.SHOP_DELETE_SUCCESS,
  payload: {
    id,
  },
});

export const deleteShopError = (error) => ({
  type: ShopActionTypes.SHOP_DELETE_ERROR,
  payload: {
    error,
  },
});

export const cleardeleteShopSuccess = () => ({
  type: ShopActionTypes.CLEAR_SHOP_DELETE_SUCCESS,
});

/**
 * Async action types
 */

export const fetchShopsAsync = () => {
  return async (dispatch, getState) => {
    const {
      auth: { token },
    } = getState();

    try {
      dispatch(fetchShopsStart());
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/shops`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(fetchShopsSuccess(response.data.shops));
    } catch (err) {
      dispatch(fetchShopsError(err));
    }
  };
};

export const fetchShopAsync = (id) => {
  return async (dispatch, getState) => {
    const {
      auth: { token },
    } = getState();

    try {
      dispatch(fetchShopStart());
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/shops/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response);

      //   dispatch(fetchShopSuccess(id, response.data.data.owner));
    } catch (err) {
      dispatch(fetchShopError(err));
    }
  };
};

export const createShopAsync = (formData) => {
  return async (dispatch, getState) => {
    const {
      auth: { token },
    } = getState();

    try {
      dispatch(createShopStart());

      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/shops`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      dispatch(createShopSuccess(response.data.shop));
    } catch (err) {
      dispatch(createShopError(err));
    }
  };
};

export const updateShopAsync = (id, form) => {
  return async (dispatch, getState) => {
    const {
      auth: { token },
    } = getState();

    try {
      dispatch(updateShopStart());
      const response = await axios.patch(
        `${process.env.REACT_APP_API_URL}/shops/${id}`,
        form,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);

      //   dispatch(updateShopSuccess(id, response.data.owner));
    } catch (err) {
      dispatch(updateShopError(err));
    }
  };
};

export const deleteShopAsync = (id) => {
  return async (dispatch, getState) => {
    const {
      auth: { token },
    } = getState();

    try {
      dispatch(deleteShopStart());
      const response = await axios.delete(
        `${process.env.REACT_APP_API_URL}/shops/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response);

      dispatch(deleteShopSuccess());
    } catch (err) {
      dispatch(deleteShopError(err));
    }
  };
};
