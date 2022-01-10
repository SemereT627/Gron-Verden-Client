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

const OwnerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OwnerActionTypes.OWNERS_FETCH_START:
      return {
        ...state,
        fetchPlantsLoading: true,
        fetchPlantsError: null,
      };

    case OwnerActionTypes.OWNERS_FETCH_SUCCESS:
      return {
        ...state,
        fetchPlantsLoading: false,
        plants: action.payload.plants,
        page: action.payload.page,
        limit: action.payload.limit,
        total: action.payload.total,
        fetchPlantsError: null,
      };

    case OwnerActionTypes.OWNERS_FETCH_ERROR:
      return {
        ...state,
        fetchPlantsLoading: false,
        fetchPlantsError: action.payload.error,
      };

    case OwnerActionTypes.CLEAR_OWNERS_FETCH_SUCCESS:
      return {
        ...state,
        fetchPlantsError: false,
        fetchPlantsSuccess: false,
      };

    case OwnerActionTypes.OWNER_FETCH_START:
      return {
        ...state,
        fetchPlantLoading: true,
        fetchPlantError: null,
      };

    case OwnerActionTypes.OWNER_FETCH_SUCCESS:
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

    case OwnerActionTypes.OWNER_FETCH_ERROR:
      return {
        ...state,
        fetchPlantLoading: false,
        fetchPlantError: action.payload.error,
      };

    case OwnerActionTypes.CLEAR_OWNER_FETCH_SUCCESS:
      return {
        ...state,
        fetchPlantLoading: false,
        fetchPlantSuccess: false,
        fetchPlantsError: false,
      };

    case OwnerActionTypes.OWNER_CREATE_START:
      return {
        ...state,
        createPlantLoading: true,
        createPlantError: null,
      };

    case OwnerActionTypes.OWNER_CREATE_SUCCESS:
      return {
        ...state,
        createPlantLoading: false,
        createPlantSuccess: true,
        plants: [action.payload.owner, ...state.plants],
        createPlantError: null,
      };

    case OwnerActionTypes.OWNER_CREATE_ERROR:
      return {
        ...state,
        createPlantLoading: false,
        createPlantError: action.payload.error,
      };

    case OwnerActionTypes.CLEAR_OWNER_CREATE_SUCCESS:
      return {
        ...state,
        createPlantSuccess: false,
        createPlantError: false,
      };

    case OwnerActionTypes.OWNER_UPDATE_START:
      return {
        ...state,
        updatePlantLoading: true,
        updatePlantError: null,
      };

    case OwnerActionTypes.OWNER_UPDATE_SUCCESS:
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

    case OwnerActionTypes.OWNER_UPDATE_ERROR:
      return {
        ...state,
        updatePlantLoading: false,
        updatePlantError: action.payload.error,
      };

    case OwnerActionTypes.CLEAR_OWNER_UPDATE_SUCCESS:
      return {
        ...state,
        updatePlantError: false,
        updatePlantLoading: false,
      };

    case OwnerActionTypes.OWNER_DELETE_START:
      return {
        ...state,
        deletePlantLoading: true,
        deletePlantError: null,
      };

    case OwnerActionTypes.OWNER_DELETE_SUCCESS:
      return {
        ...state,
        deletePlantLoading: false,
        deletePlantSuccess: true,
        deletePlantError: null,
      };

    case OwnerActionTypes.OWNER_DELETE_ERROR:
      return {
        ...state,
        deletePlantLoading: false,
        deletePlantSuccess: false,
        deletePlantError: action.payload.error,
      };

    case OwnerActionTypes.CLEAR_OWNER_DELETE_SUCCESS:
      return {
        ...state,
        deletePlantError: false,
        deletePlantLoading: false,
        deletePlantError: false,
      };

    default:
      return state;
  }
};

export default OwnerReducer;
