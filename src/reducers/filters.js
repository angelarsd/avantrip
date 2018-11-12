import { FILTERS_REQUEST, FILTERS_SUCCESS, FILTERS_FAILURE, CHANGE_FILTERS } from '../actions/filters'

export function loadFilters(state = { data: [], loading: true , status: 'REQUESTING' }, action) {
  let result;
  switch (action.type) {
      case FILTERS_REQUEST:
        result = state; break;
      case FILTERS_SUCCESS:
        result = Object.assign({}, state, {data: action.response, isLoading: false, status: 'SUCCESS'}); break;
      case FILTERS_FAILURE:
        result = Object.assign({}, state, {isLoading: false, status: 'FAILURE'}); break;
      default:
        result = state;
    }
    return result;
}

export function currentFilter(state = {data: {id: "0", name:"Todas las estadías", bestPrice: "0"}, update_version: 0}, action){
  let result;
  switch (action.type) {
    case CHANGE_FILTERS:
      result = Object.assign({}, state, {data: action.filter, update_version: state.update_version + 1}); break;
    default:
      result = state;
  }
  return result;
};