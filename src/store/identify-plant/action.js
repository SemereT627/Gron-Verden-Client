import { IdentifyPlantActionTypes } from './types';
import axios from 'axios';

/**
 * Identify plant actions
 */
export const identifyPlantStart = () => ({
  type: IdentifyPlantActionTypes.IDENTIFY_PLANT_START,
});

export const identifyPlantSuccess = (className, plants) => ({
  type: IdentifyPlantActionTypes.IDENTIFY_PLANT_SUCCESS,
  payload: {
    className: className,
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
        `https://f953-196-188-49-157.ngrok.io/predict`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      console.log(response)
      dispatch(
        identifyPlantSuccess(response.data.class_name, response.data.plant_info)
      );
    } catch (err) {
      dispatch(identifyPlantError(err));
    }
  };
};
