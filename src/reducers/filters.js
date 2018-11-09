import { LOAD_FILTERS } from '../actions/filters'

export function loadFilters(state = { loading: true , data: [] }, action) {
    switch (action.type) {
    case LOAD_FILTERS:
        return Object.assign({}, state, { loading: false, data: action.data });
    default:
        return state;
    }
}