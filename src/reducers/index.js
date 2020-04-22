import commentsReducer from './comments-reducer.js';
import {combineReducers} from "redux";

const allReducers = combineReducers({
    commentsPage : commentsReducer
});

export default allReducers;