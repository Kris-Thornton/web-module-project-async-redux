// constant that is the name of the action
export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';

// action creator that is a function that triggers the FETCH_START case/state in the reducer file / global state store.
export const fetchStart = () => {
    return({type: FETCH_START});
}


export const fetchSuccess = (catImages) => {
    return ({type: FETCH_SUCCESS, payload: catImages});
}