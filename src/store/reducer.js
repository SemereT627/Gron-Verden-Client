import { combineReducers } from 'redux';

import AuthReducer from './auth/reducer';
import IdentifyPlantReducer from './identify-plant/reducer';
import ShopReducer from './shop/reducer';
import PlantReducer from './plant/reducer';
import EventReducer from './event/reducer';
import ApplyEventReducer from './apply-event/reducer';

export const rootReducer = combineReducers({
  auth: AuthReducer,
  identifyPlant: IdentifyPlantReducer,
  shop: ShopReducer,
  plant: PlantReducer,
  event: EventReducer,
  applyEvent: ApplyEventReducer,
});
