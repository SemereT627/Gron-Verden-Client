import { combineReducers } from 'redux';

import AuthReducer from './auth/reducer';
import IdentifyPlantReducer from './identify-plant/reducer';

export const rootReducer = combineReducers({
  auth: AuthReducer,
  identifyPlant: IdentifyPlantReducer,
});
