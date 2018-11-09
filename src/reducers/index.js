import { combineReducers } from 'redux';
import { loadFilters } from './filters';
import { loadPackages } from './packages';

const rootReducer = combineReducers({
    filters: loadFilters,
    packages: loadPackages
});

export default rootReducer;