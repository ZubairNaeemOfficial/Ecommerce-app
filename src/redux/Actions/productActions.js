import { ActionTypes } from "../Contents/ActionTypes";
export const setproduct=(products)=>{
return{
    type:ActionTypes.SET_PRODUCT,
    payload:products,
}
}
export const selectproduct=(selectedproducts)=>{
    return{
        type:ActionTypes.SELECTION_PRODUCT,
        payload:selectedproducts,
    }
    }
    