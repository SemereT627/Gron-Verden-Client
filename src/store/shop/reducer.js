import { ShopActionTypes } from "./types";

const INITIAL_STATE = {
  fetchShopsLoading: false,
  fetchShopLoading: false,
  fetchShopsSuccess: false,
  fetchShopSuccess: false,

  createShopLoading: false,
  updateShopLoading: false,
  deleteShopLoading: false,

  createShopSuccess: false,
  updateShopSuccess: false,
  deleteShopSuccess: false,

  createShopError: null,
  updateShopError: null,
  deleteShopError: null,

  fetchShopsError: null,
  fetchShopError: null,

  shops: [],
  shop: {},

  page: 1,
  limit: 10,
  total: 0,
};

const ShopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.SHOPS_FETCH_START:
      return {
        ...state,
        fetchShopsLoading: true,
        fetchShopsError: null,
      };

    case ShopActionTypes.SHOPS_FETCH_SUCCESS:
      return {
        ...state,
        fetchShopsLoading: false,
        shops: action.payload.shops,
        page: action.payload.page,
        limit: action.payload.limit,
        total: action.payload.total,
        fetchShopsError: null,
      };

    case ShopActionTypes.SHOPS_FETCH_ERROR:
      return {
        ...state,
        fetchShopsLoading: false,
        fetchShopsError: action.payload.error,
      };

    case ShopActionTypes.CLEAR_SHOPS_FETCH_SUCCESS:
      return {
        ...state,
        fetchShopsError: false,
        fetchShopsSuccess: false,
      };

    case ShopActionTypes.SHOP_FETCH_START:
      return {
        ...state,
        fetchShopLoading: true,
        fetchShopError: null,
      };

    case ShopActionTypes.SHOP_FETCH_SUCCESS:
      return {
        ...state,
        fetchShopLoading: false,
        fetchShopSuccess: true,
        shop: {
          ...state.shop,
          [action.payload.id]: action.payload.shop,
        },
        fetchShopError: null,
      };

    case ShopActionTypes.SHOP_FETCH_ERROR:
      return {
        ...state,
        fetchShopLoading: false,
        fetchShopError: action.payload.error,
      };

    case ShopActionTypes.CLEAR_SHOP_FETCH_SUCCESS:
      return {
        ...state,
        fetchShopLoading: false,
        fetchShopSuccess: false,
        fetchShopsError: false,
      };

    case ShopActionTypes.SHOP_CREATE_START:
      return {
        ...state,
        createShopLoading: true,
        createShopError: null,
      };

    case ShopActionTypes.SHOP_CREATE_SUCCESS:
      return {
        ...state,
        createShopLoading: false,
        createShopSuccess: true,
        shops: [action.payload.shop, ...state.shops],
        createShopError: null,
      };

    case ShopActionTypes.SHOP_CREATE_ERROR:
      return {
        ...state,
        createShopLoading: false,
        createShopError: action.payload.error,
      };

    case ShopActionTypes.CLEAR_SHOP_CREATE_SUCCESS:
      return {
        ...state,
        createShopSuccess: false,
        createShopError: false,
      };

    case ShopActionTypes.SHOP_UPDATE_START:
      return {
        ...state,
        updateShopLoading: true,
        updateShopError: null,
      };

    case ShopActionTypes.SHOP_UPDATE_SUCCESS:
      return {
        ...state,
        updateShopLoading: false,
        updateShopSuccess: true,
        shop: {
          ...state.shop,
          [action.payload.id]: action.payload.shop,
        },
        updateShopError: null,
      };

    case ShopActionTypes.SHOP_UPDATE_ERROR:
      return {
        ...state,
        updateShopLoading: false,
        updateShopError: action.payload.error,
      };

    case ShopActionTypes.CLEAR_SHOP_UPDATE_SUCCESS:
      return {
        ...state,
        updateShopError: false,
        updateShopLoading: false,
      };

    case ShopActionTypes.SHOP_DELETE_START:
      return {
        ...state,
        deleteShopLoading: true,
        deleteShopError: null,
      };

    case ShopActionTypes.SHOP_DELETE_SUCCESS:
      return {
        ...state,
        deleteShopLoading: false,
        deleteShopSuccess: true,
        deleteShopError: null,
      };

    case ShopActionTypes.SHOP_DELETE_ERROR:
      return {
        ...state,
        deleteShopLoading: false,
        deleteShopSuccess: false,
        deleteShopError: action.payload.error,
      };

    case ShopActionTypes.CLEAR_SHOP_DELETE_SUCCESS:
      return {
        ...state,
        deleteShopError: false,
        deleteShopSuccess: false,
        deleteShopLoading: false,
      };

    default:
      return state;
  }
};

export default ShopReducer;
