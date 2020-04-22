import {createStore} from "redux";
import allReducers from '../reducers/index.js';

let initialState = {
    commentsPage: {
        comments: [
            {id: 0, author: 'admin', text: 'Первый комментарий', dateTime: '2019-11-20, 15:15:00'},
            {id: 1, author: 'not-admin', text: 'Второй комментарий', dateTime: '2019-11-20, 15:30:00'}
        ],
        newAuthor: '',
        newText: ''
    }
};

let store = createStore(allReducers, initialState);

export default store;
