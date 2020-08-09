import {combineReducers} from 'redux'
import userReducer from './userReducer'
import pageReducer from './pageReducer'
import modalReducer from './modalReducer'
import catalogReducer from './catalogReducer'

const rootReducer = combineReducers ({
    userReducer,
    pageReducer,
    modalReducer,
    catalogReducer,
});

export default rootReducer
