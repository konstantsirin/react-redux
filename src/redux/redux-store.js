import {createStore} from "redux";
import allReducers from '../reducers/index.js';

let initialState = {
    commentsPage: {
        comments: [],
        newAuthor: '',
        newText: ''
    }
};

let store = createStore(allReducers, initialState);

export default store;
