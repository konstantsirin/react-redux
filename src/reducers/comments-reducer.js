const ADD_COMMENT = 'ADD_COMMENT' ;
const UPDATE_NEW_AUTHOR = 'UPDATE_NEW_AUTHOR';
const UPDATE_NEW_TEXT = 'UPDATE_NEW_TEXT';
const DEL_COMMENT = 'DEL_COMMENT';
const CLEAR_ADD_COMMENT = 'CLEAR_ADD_COMMENT';
const LOAD_STATE = 'LOAD_STATE';

const commentsReducer = (state = {}, action) => {

    switch (action.type) {
        case ADD_COMMENT: {

            if (action.author.trim() && action.text.trim() && typeof(action.author.trim()) != 'undefined' && typeof(action.text.trim()) != 'undefined') {

                try {
                    let newComment = {
                        id: action.id,
                        author: action.author,
                        text: action.text,
                        dateTime: action.dateTime
                    };

                    state.comments = [...state.comments, newComment];
                    const serializedState = JSON.stringify(state.comments);
                    localStorage.setItem('comments', serializedState);

                    return {
                        ...state,
                        newAuthor: '',
                        newText: ''
                    };

                } catch (err) {
                    console.log(err);
                    return;
                }



            } else {
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
            state.comments = [...state.comments.filter(comment => comment.id !== action.id)];
            const serializedState = JSON.stringify(state.comments);
            localStorage.setItem('comments', serializedState);


            return {
                ...state
            }
        }

        case CLEAR_ADD_COMMENT : {

            return {
                ...state,
                newAuthor: '',
                newText: ''
            };
        }

        case LOAD_STATE : {
            return {
                ...state,
                comments: action.comments
            }
        }

        default :
            return state;
    }
};

export default commentsReducer;