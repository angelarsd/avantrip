import { combineReducers } from 'redux';
import { loadFilters } from './filters';
import { loadPackages } from './packages';
import {loadingBarReducer} from 'react-redux-loading-bar'

const rootReducer = combineReducers({
    filters: loadFilters,
    packages: loadPackages,
    loadingBar: loadingBarReducer,
});

export default rootReducer;