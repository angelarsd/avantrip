import axios from 'axios'

export const LOAD_FILTERS = 'LOAD_FILTERS';

export function loadFilters() {

    return (dispatch, getState) => {
        axios.get('https://api.myjson.com/bins/mkqli').then( (response) => {
            dispatch({type: LOAD_FILTERS, data: response.data})
        })
    }
}