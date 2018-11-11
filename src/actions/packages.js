import { CALL_API } from '../middleware/api';

export const PACKAGES_REQUEST = 'PACKAGES_REQUEST';
export const PACKAGES_SUCCESS = 'PACKAGES_SUCCESS';
export const PACKAGES_FAILURE = 'PACKAGES_FAILURE';

const fetchPackages = () => {
  return {
    [CALL_API]: {
      types: [PACKAGES_REQUEST, PACKAGES_SUCCESS, PACKAGES_FAILURE],
      endpoint: 'lp8c6'
    }
  }
};

export const loadPackages = () => (dispatch, getState) => {
  return dispatch(fetchPackages())
};