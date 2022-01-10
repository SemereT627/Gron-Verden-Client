import { PlantActionTypes } from './types';

const INITIAL_STATE = {
  fetchPlantsLoading: false,
  fetchPlantLoading: false,
  fetchPlantsSuccess: false,
  fetchPlantSuccess: false,

  createPlantLoading: false,
  updatePlantLoading: false,
  deletePlantLoading: false,

  createPlantSuccess: false,
  updatePlantSuccess: false,
  deletePlantSuccess: false,

  createPlantError: null,
  updatePlantError: null,
  deletePlantError: null,

  fetchPlantsError: null,
  fetchPlantError: null,

  plants: [],
  plant: {},

  page: 1,
  limit: 10,
  total: 0,
};

const PlantReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PlantActionTypes.PLANTS_FETCH_START:
      return {
        ...state,
        fetchPlantsLoading: true,
        fetchPlantsError: null,
      };

    case PlantActionTypes.PLANTS_FETCH_SUCCESS:
      return {
        ...state,
        fetchPlantsLoading: false,
        plants: action.payload.plants,
        page: action.payload.page,
        limit: action.payload.limit,
        total: action.payload.total,
        fetchPlantsError: null,
      };

    case PlantActionTypes.PLANTS_FETCH_ERROR:
      return {
        ...state,
        fetchPlantsLoading: false,
        fetchPlantsError: action.payload.error,
      };

    case PlantActionTypes.CLEAR_PLANTS_FETCH_SUCCESS:
      return {
        ...state,
        fetchPlantsError: false,
        fetchPlantsSuccess: false,
      };

    case PlantActionTypes.PLANT_FETCH_START:
      return {
        ...state,
        fetchPlantLoading: true,
        fetchPlantError: null,
      };

    case PlantActionTypes.PLANT_FETCH_SUCCESS:
      return {
        ...state,
        fetchPlantLoading: false,
        fetchPlantSuccess: true,
        plant: {
          ...state.plant,
          [action.payload.id]: action.payload.plant,
        },
        fetchPlantError: null,
      };

    case PlantActionTypes.PLANT_FETCH_ERROR:
      return {
        ...state,
        fetchPlantLoading: false,
        fetchPlantError: action.payload.error,
      };

    case PlantActionTypes.CLEAR_PLANT_FETCH_SUCCESS:
      return {
        ...state,
        fetchPlantLoading: false,
        fetchPlantSuccess: false,
        fetchPlantsError: false,
      };

    case PlantActionTypes.PLANT_CREATE_START:
      return {
        ...state,
        createPlantLoading: true,
        createPlantError: null,
      };

    case PlantActionTypes.PLANT_CREATE_SUCCESS:
      return {
        ...state,
        createPlantLoading: false,
        createPlantSuccess: true,
        plants: [action.payload.owner, ...state.plants],
        createPlantError: null,
      };

    case PlantActionTypes.PLANT_CREATE_ERROR:
      return {
        ...state,
        createPlantLoading: false,
        createPlantError: action.payload.error,
      };

    case PlantActionTypes.CLEAR_PLANT_CREATE_SUCCESS:
      return {
        ...state,
        createPlantSuccess: false,
        createPlantError: false,
      };

    case PlantActionTypes.PLANT_UPDATE_START:
      return {
        ...state,
        updatePlantLoading: true,
        updatePlantError: null,
      };

    case PlantActionTypes.PLANT_UPDATE_SUCCESS:
      return {
        ...state,
        updatePlantLoading: false,
        updatePlantSuccess: true,
        plant: {
          ...state.plant,
          [action.payload.id]: action.payload.plant,
        },
        updatePlantError: null,
      };

    case PlantActionTypes.PLANT_UPDATE_ERROR:
      return {
        ...state,
        updatePlantLoading: false,
        updatePlantError: action.payload.error,
      };

    case PlantActionTypes.CLEAR_PLANT_UPDATE_SUCCESS:
      return {
        ...state,
        updatePlantError: false,
        updatePlantLoading: false,
      };

    case PlantActionTypes.PLANT_DELETE_START:
      return {
        ...state,
        deletePlantLoading: true,
        deletePlantError: null,
      };

    case PlantActionTypes.PLANT_DELETE_SUCCESS:
      return {
        ...state,
        deletePlantLoading: false,
        deletePlantSuccess: true,
        deletePlantError: null,
      };

    case PlantActionTypes.PLANT_DELETE_ERROR:
      return {
        ...state,
        deletePlantLoading: false,
        deletePlantSuccess: false,
        deletePlantError: action.payload.error,
      };

    case PlantActionTypes.CLEAR_PLANT_DELETE_SUCCESS:
      return {
        ...state,
        deletePlantError: false,
        deletePlantSuccess: false,
        deletePlantLoading: false,
      };

    default:
      return state;
  }
};

export default PlantReducer;
