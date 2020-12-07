import {combineReducers} from 'redux'
import userReducer from './userReducer'
import pageReducer from './pageReducer'
import modalReducer from './modalReducer'
import catalogReducer from './catalogReducer'
import storeReducer from './storeReducer'
import productReducer from './productReducer'
import utiliteReducer from "./utiliteReducer";

const rootReducer = combineReducers ({
    userReducer,
    pageReducer,
    modalReducer,
    catalogReducer,
    storeReducer,
    productReducer,
    utiliteReducer,
});

export default rootReducer
