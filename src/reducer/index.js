import { combineReducers } from 'redux';
import {mainReducer} from './mainReducer';
import {demoReducer} from './demoReducer';

export default combineReducers({
    mainReducer,
    demoReducer
})