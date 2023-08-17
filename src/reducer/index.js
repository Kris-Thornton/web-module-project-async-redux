import data from "../imageData/catImages";


const initialState = {
    catImages: data,
    loading: false,
    err: ""
}


const reducer =(state =initialState, action) => {
    switch(action.type) {
        default:
            return(state)
    }
}


export default reducer