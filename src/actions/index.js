const ADD_COMMENT = 'ADD_COMMENT' ;
const UPDATE_NEW_AUTHOR = 'UPDATE_NEW_AUTHOR';
const UPDATE_NEW_TEXT = 'UPDATE_NEW_TEXT';
const DEL_COMMENT = 'DEL_COMMENT';
const CLEAR_ADD_COMMENT = 'CLEAR_ADD_COMMENT';
const LOAD_STATE = 'LOAD_STATE';


export const addCommentActionCreator = (newAuthor, newText) => {

    let countIdLS = Number(localStorage.getItem('id'));
    let countId = countIdLS + 1;
    localStorage.setItem('id', countId);

    let currentFullDate = new Date().toLocaleString();
    return {
        type: ADD_COMMENT,
        id: countIdLS,
        author: newAuthor,
        text: newText,
        dateTime: currentFullDate
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

export const loadStateActionCreator = (comments) => {
  return {
      type: LOAD_STATE,
      comments: comments
  };
};