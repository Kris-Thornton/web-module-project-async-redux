import axios from 'axios';


// constant that is the name of the action
export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';

// With the use of Middleware and thunk, These actions can return functions that has a dispatch inside which can run smaller actions.
export const getCatImages =  () => {
    return (dispatch => {
        // now with Middleware and thunk, in the function action. we do not use props, but instead use dispatch.
        // props.fetchStart();
        dispatch({type: FETCH_START})
        axios.get("https://api.thecatapi.com/v1/images/search?limit=10")
        .then(res => {
            dispatch({type: FETCH_SUCCESS, payload: res.data})
        // props.fetchSuccess(res.data)
        })
    })
}


// action creator that is a function that triggers the FETCH_START case/state in the reducer file / global state store.

// These types of actions return objects.
export const fetchStart = () => {
    return({type: FETCH_START});
}


export const fetchSuccess = (catImages) => {
    return ({type: FETCH_SUCCESS, payload: catImages});
}