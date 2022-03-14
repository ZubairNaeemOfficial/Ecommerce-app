import {combineReducers} from 'redux'
import { productReducer ,SelectedProductReducer} from './product_reducer'
export const reducers=combineReducers({
    allProduct:productReducer,
    product:SelectedProductReducer
})