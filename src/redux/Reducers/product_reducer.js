import { ActionTypes } from "../Contents/ActionTypes";

const initialState={
    products:[]
}
export const productReducer=(state = initialState,{type,payload})=>{
switch (type) {
    case ActionTypes.SET_PRODUCT:
        return {...state,products:payload}

    default:
        return state
}
}
export const SelectedProductReducer=(state={},{type,payload})=>{
    switch (type) {
        case ActionTypes.SELECTION_PRODUCT:
            return {...state,...payload}
    
        default:
            return state
    }
    }