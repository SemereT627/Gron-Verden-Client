import { IdentifyPlantActionTypes } from './types';
import axios from 'axios';

/**
 * Identify plant actions
 */
export const identifyPlantStart = () => ({
  type: IdentifyPlantActionTypes.IDENTIFY_PLANT_START,
});

export const identifyPlantSuccess = (plants) => ({
  type: IdentifyPlantActionTypes.IDENTIFY_PLANT_SUCCESS,
  payload: {
    plants,
  },
});
export const identifyPlantError = (error) => ({
  type: IdentifyPlantActionTypes.IDENTIFY_PLANT_ERROR,
  payload: {
    error,
  },
});

export const clearIdentifyPlantSuccess = () => ({
  type: IdentifyPlantActionTypes.CLEAR_IDENTIFY_PLANT_SUCCESS,
});

export const identifyPlantAsync = (formData) => {
  return async (dispatch, getState) => {
    try {
      dispatch(identifyPlantStart());
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/register`,
        formData
      );

      console.log(response);
      //   dispatch(identifyPlantSuccess(response))
    } catch (err) {
      dispatch(identifyPlantError(err));
    }
  };
};
