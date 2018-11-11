import { PACKAGES_REQUEST, PACKAGES_SUCCESS, PACKAGES_FAILURE } from '../actions/packages'

export function loadPackages(state = { data: [], loading: true , status: 'REQUESTING' }, action) {
  let result;
  switch (action.type) {
    case PACKAGES_REQUEST:
      result = state; break;
    case PACKAGES_SUCCESS:
      result = Object.assign({}, state, {data: action.response, isLoading: false, status: 'SUCCESS'}); break;
    case PACKAGES_FAILURE:
      result = Object.assign({}, state, {isLoading: false, status: 'FAILURE'}); break;
    default:
      result = state;
  }
  return result;
}