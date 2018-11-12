import { combineReducers } from 'redux';
import { loadFilters, currentFilter } from './filters';
import { loadPackages } from './packages';
import {loadingBarReducer} from 'react-redux-loading-bar'

const rootReducer = combineReducers({
  filters: loadFilters,
  packages: loadPackages,
  loadingBar: loadingBarReducer,
  currentFilter: currentFilter
});

export default rootReducer;