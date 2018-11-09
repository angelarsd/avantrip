import axios from 'axios'

export const LOAD_PACKAGES = 'LOAD_PACKAGES';

export function loadPackages() {
    return (dispatch, getState) => {
        axios.get('https://api.myjson.com/bins/lp8c6').then( (response) => {
            dispatch({type: LOAD_PACKAGES, data: response.data })
        });
    }
}