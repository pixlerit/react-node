/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import app from './modules/App/AppReducer';

import authReducer from './modules/Authenticate/auth_reducer';

import { reducer as form } from 'redux-form';
import categoriesReducer from './modules/Home/categoriesReducer';
import modelsReducer from './modules/Home/modelsReducer';
import modelListReducer from './modules/ModelListing/modelListReducer';
import loaderReducer from './modules/ModelListing/loaderReducer';
import brandListReducer from './modules/ModelListing/brandListReducer';
import modelAllListReducer from './modules/ModelListing/modelAllListReducer';
import modelCountReducer from './modules/ModelListing/modelCountReducer';

// Combine all reducers into one root reducer
export default combineReducers({
  app,
  auth: authReducer,
  categories: categoriesReducer,
  models: modelsReducer,
  allModels: modelListReducer,
  allModelsNew: modelAllListReducer,
  brands: brandListReducer,
  loader: loaderReducer,
  countObj: modelCountReducer,
  form
});
