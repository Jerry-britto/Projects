import {getProductsReducer} from './productReducers'
import {combineReducers} from "redux";

export const rootreducers = combineReducers({
    getProductsData :getProductsReducer
})

