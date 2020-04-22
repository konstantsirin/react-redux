const ADD_COMMENT = 'ADD_COMMENT' ;
const UPDATE_NEW_AUTHOR = 'UPDATE_NEW_AUTHOR';
const UPDATE_NEW_TEXT = 'UPDATE_NEW_TEXT';
const DEL_COMMENT = 'DEL_COMMENT';
const CLEAR_ADD_COMMENT = 'CLEAR_ADD_COMMENT';


export const addCommentActionCreator = () => {
    return {
        type: ADD_COMMENT
    };
};

export const updateNewAuthorActionCreator = (newAuthor) => {
    return {
        type: UPDATE_NEW_AUTHOR,
        newAuthor: newAuthor
    };
};

export const updateNewTextActionCreator = (newText) => {
    return {
        type: UPDATE_NEW_TEXT,
        newText: newText
    };
};

export const delCommentActionCreator = (id) => {
    return {
        type: DEL_COMMENT,
        id: id
    };
};

export const clearAddCommentActionCreator = () => {
    return {
        type: CLEAR_ADD_COMMENT
    };
};