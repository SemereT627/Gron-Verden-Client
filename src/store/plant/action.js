import { PlantActionTypes } from './types';
import axios from 'axios';

export const fetchPlantsStart = () => ({
  type: PlantActionTypes.PLANTS_FETCH_START,
});

export const fetchPlantsSuccess = (plants, page, limit, total) => ({
  type: PlantActionTypes.PLANTS_FETCH_SUCCESS,
  payload: {
    plants,
    page,
    limit,
    total,
  },
});

export const fetchPlantsError = (error) => ({
  type: PlantActionTypes.PLANTS_FETCH_ERROR,
  payload: {
    error,
  },
});

export const clearfetchPlantsSuccess = () => ({
  type: PlantActionTypes.CLEAR_PLANTS_FETCH_SUCCESS,
});

export const fetchPlantStart = () => ({
  type: PlantActionTypes.PLANT_FETCH_START,
});

export const fetchPlantSuccess = (id, plant) => ({
  type: PlantActionTypes.PLANT_FETCH_SUCCESS,
  payload: {
    id,
    plant,
  },
});

export const fetchPlantError = (error) => ({
  type: PlantActionTypes.PLANT_FETCH_ERROR,
  payload: {
    error,
  },
});

export const clearfetchPlantSuccess = () => ({
  type: PlantActionTypes.CLEAR_PLANT_FETCH_SUCCESS,
});

/**
 * Create plant actions
 * @returns Action
 */

export const createPlantStart = () => ({
  type: PlantActionTypes.PLANT_CREATE_START,
});

export const createPlantSuccess = (plant) => ({
  type: PlantActionTypes.PLANT_CREATE_SUCCESS,
  payload: {
    plant,
  },
});

export const createPlantError = (error) => ({
  type: PlantActionTypes.PLANT_CREATE_ERROR,
  payload: {
    error,
  },
});

export const clearcreatePlantSuccess = () => ({
  type: PlantActionTypes.CLEAR_PLANT_CREATE_SUCCESS,
});

/**
 * Update plant actions
 * @returns Action
 */

export const updatePlantStart = () => ({
  type: PlantActionTypes.PLANT_UPDATE_START,
});

export const updatePlantSuccess = (id, plant) => ({
  type: PlantActionTypes.PLANT_UPDATE_SUCCESS,
  payload: {
    id,
    plant,
  },
});

export const updatePlantError = (error) => ({
  type: PlantActionTypes.PLANT_UPDATE_ERROR,
  payload: {
    error,
  },
});

export const clearupdatePlantSuccess = () => ({
  type: PlantActionTypes.CLEAR_PLANT_UPDATE_SUCCESS,
});

export const deletePlantStart = () => ({
  type: PlantActionTypes.PLANT_DELETE_START,
});

export const deletePlantSuccess = (id) => ({
  type: PlantActionTypes.PLANT_DELETE_SUCCESS,
  payload: {
    id,
  },
});

export const deletePlantError = (error) => ({
  type: PlantActionTypes.PLANT_DELETE_ERROR,
  payload: {
    error,
  },
});

export const cleardeletePlantSuccess = () => ({
  type: PlantActionTypes.CLEAR_PLANT_DELETE_SUCCESS,
});

/**
 * Async action types
 */

export const fetchPlantsAsync = (page, limit) => {
  return async (dispatch, getState) => {
    const {
      user: { token },
    } = getState();

    try {
      dispatch(fetchPlantsStart());
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/plants`,
        {
          params: {
            _page: page,
            _limit: limit,
          },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);

    //   dispatch(
    //     fetchPlantsSuccess(
    //       response.data.data.owners.docs,
    //       response.data.data.owners.page,
    //       response.data.data.owners.limit,
    //       response.data.data.owners.totalDocs
    //     )
    //   );
    } catch (err) {
      dispatch(fetchPlantsError(err));
    }
  };
};

export const fetchAllPlantsAsync = () => {
  return async (dispatch, getState) => {
    const {
      user: { token },
    } = getState();

    try {
      dispatch(fetchPlantsStart());
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/plants`,
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

    //   dispatch(fetchPlantsSuccess(response.data.data.owners));
    } catch (err) {
      dispatch(fetchPlantsError(err));
    }
  };
};

export const fetchPlantAsync = (id) => {
  return async (dispatch, getState) => {
    const {
      user: { token },
    } = getState();

    try {
      dispatch(fetchPlantStart());
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/plants/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response);

    //   dispatch(fetchPlantSuccess(id, response.data.data.owner));
    } catch (err) {
      dispatch(fetchPlantError(err));
    }
  };
};

export const createPlantAsync = (formData) => {
  return async (dispatch, getState) => {
    const {
      user: { token },
    } = getState();

    try {
      dispatch(createPlantStart());

      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/plants`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      console.log(response);

    //   dispatch(createPlantSuccess(response.data.data.owner));
    } catch (err) {
      dispatch(createPlantError(err));
    }
  };
};

export const updatePlantAsync = (id, form) => {
  return async (dispatch, getState) => {
    const {
      user: { token },
    } = getState();

    try {
      dispatch(updatePlantStart());
      const response = await axios.patch(
        `${process.env.REACT_APP_API_URL}/plants/${id}`,
        form,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);

    //   dispatch(updatePlantSuccess(id, response.data.owner));
    } catch (err) {
      dispatch(updatePlantError(err));
    }
  };
};

export const deletePlantAsync = (id) => {
  return async (dispatch, getState) => {
    const {
      user: { token },
    } = getState();

    try {
      dispatch(deletePlantStart());
      const response = await axios.delete(
        `${process.env.REACT_APP_API_URL}/plants/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response);

      dispatch(deletePlantSuccess());
    } catch (err) {
      dispatch(deletePlantError(err));
    }
  };
};
