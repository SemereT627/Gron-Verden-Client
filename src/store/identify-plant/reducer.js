import { IdentifyPlantActionTypes } from './types';

const INITIAL_STATE = {
  identifyPlantLoading: false,
  identifyPlantSuccess: false,
  identifyPlantError: null,

  plants: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case IdentifyPlantActionTypes.IDENTIFY_PLANT_START:
      return {
        ...state,
        identifyPlantLoading: true,
        identifyPlantSuccess: false,
        identifyPlantError: null,
      };

    case IdentifyPlantActionTypes.IDENTIFY_PLANT_SUCCESS:
      return {
        ...state,
        identifyPlantLoading: false,
        identifyPlantSuccess: true,
        identifyPlantError: null,
        plants: action.payload.plants,
      };

    case IdentifyPlantActionTypes.IDENTIFY_PLANT_ERROR:
      return {
        ...state,
        identifyPlantLoading: false,
        identifyPlantSuccess: false,
        identifyPlantError: action.payload.error,
      };

    case IdentifyPlantActionTypes.CLEAR_IDENTIFY_PLANT_SUCCESS:
      return {
        ...state,
        identifyPlantLoading: false,
        identifyPlantSuccess: false,
        identifyPlantError: null,
      };
  }
};
