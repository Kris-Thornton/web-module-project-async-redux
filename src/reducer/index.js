import data from "../imageData/catImages";
import { FETCH_START, FETCH_SUCCESS} from './../actions';





const initialState = {
    catImages: data,
    loading: false,
    err: ""
}


const reducer =(state =initialState, action) => {
    switch(action.type) {
        case FETCH_START:
            
            return {
                ...state,
                loading: true,
                error:""
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                catImages: action.payload,
                err: ""
            }
        default:
            return(state)
    }
}


export default reducer