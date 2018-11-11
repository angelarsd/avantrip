import { CALL_API } from '../middleware/api';

export const FILTERS_REQUEST = 'FILTERS_REQUEST';
export const FILTERS_SUCCESS = 'FILTERS_SUCCESS';
export const FILTERS_FAILURE = 'FILTERS_FAILURE';

const fetchFilters = () => {
  return {
    [CALL_API]: {
      types: [FILTERS_REQUEST, FILTERS_SUCCESS, FILTERS_FAILURE],
      endpoint: 'mkqli'
    }
  }
};

export const loadFilters = () => (dispatch, getState) => {
  return dispatch(fetchFilters())
};