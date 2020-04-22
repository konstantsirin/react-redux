const ADD_COMMENT = 'ADD_COMMENT' ;
const UPDATE_NEW_AUTHOR = 'UPDATE_NEW_AUTHOR';
const UPDATE_NEW_TEXT = 'UPDATE_NEW_TEXT';
const DEL_COMMENT = 'DEL_COMMENT';
const CLEAR_ADD_COMMENT = 'CLEAR_ADD_COMMENT';
let id = 2;

const commentsReducer = (state = {}, action) => {
    console.log(action);

    switch (action.type) {
        case ADD_COMMENT: {
            if (state.newAuthor.trim() && state.newText.trim() && typeof(state.newAuthor.trim()) != 'undefined' && typeof(state.newText.trim()) != 'undefined') {
                let currentFullDate = new Date().toLocaleString();
                let newComment = {
                    id: id++,
                    author: state.newAuthor,
                    text: state.newText,
                    dateTime: currentFullDate
                };
                id++;

                return {
                    ...state,
                    comments: [...state.comments, newComment],
                    newAuthor: '',
                    newText: ''
                };
            } else {
                alert('Поля не заполнены');
                console.log ('Данные не получены');
                return {
                    ...state,
                    newAuthor: state.newAuthor.trim(),
                    newText: state.newText.trim()
                };
            }
        }

        case UPDATE_NEW_AUTHOR : {

            return {
                ...state,
                newAuthor : action.newAuthor
            }
        }

        case UPDATE_NEW_TEXT : {

            return {
                ...state,
                newText : action.newText
            }
        }

        case DEL_COMMENT : {

            return {
                ...state,
                comments: [...state.comments.filter(comment => comment.id !== action.id)]
            }
        }

        case CLEAR_ADD_COMMENT : {

            return {
                ...state,
                newAuthor: '',
                newText: ''
            };
        }
        default :
            return state;
    }
};

export default commentsReducer;