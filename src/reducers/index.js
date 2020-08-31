import {combineReducers} from 'redux'
import userReducer from './userReducer'
import pageReducer from './pageReducer'
import modalReducer from './modalReducer'
import catalogReducer from './catalogReducer'
import storeReducer from './storeReducer'

const rootReducer = combineReducers ({
    userReducer,
    pageReducer,
    modalReducer,
    catalogReducer,
    storeReducer,
});

export default rootReducer
