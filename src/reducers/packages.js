import { LOAD_PACKAGES } from '../actions/packages'

export function loadPackages (state = { loading: true , data: [] }, action) {
    switch (action.type) {
    case LOAD_PACKAGES:
        return Object.assign({}, state, { loading: false, data: action.data });
    default:
        return state;
    }
}