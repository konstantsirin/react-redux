import allReducers from '../reducers/index.js';

let store = {
    _state : {
        comments: [
            {id: 0, author: 'admin', text: 'Первый комментарий', dateTime: '2019-11-20, 15:15:00'},
            {id: 1, author: 'not-admin', text: 'Второй комментарий', dateTime: '2019-11-20, 15:30:00'}
        ],

        newAuthor : '',
        newText : '',
        idCount : 2
    },
    getState() {
        return this._state;
    },
    dispatch(action) {
        this._state = allReducers.commentsReducer(this._state, action);
    }

};

window.store = store;
export default store;