import { FILTERS_REQUEST, FILTERS_SUCCESS, FILTERS_FAILURE } from '../actions/filters'

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