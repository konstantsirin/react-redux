import React from 'react';
import addCommentClasses from './AddComment.module.css';

const AddComment = (props) => {

    let newAuthorElement = React.createRef();
    let newTextElement = React.createRef();

    return(
        <form
            className = {addCommentClasses.blockAddComment}
        >
            <input
                type = {"text"}
                ref = {newAuthorElement}
                value = {props.newAuthor}
                onChange = {() => props.onAuthorChange(newAuthorElement.current.value)}
                placeholder = {"Ваше имя"}
                className = {addCommentClasses.addName}
                required = "required"
            />
            <textarea
                type = {"text"}
                ref = {newTextElement}
                value = {props.newText}
                onChange = {() => props.onTextChange(newTextElement.current.value)}
                placeholder = {"Ваш комментарий"}
                className = {addCommentClasses.addComment}
                required = "required"
            ></textarea>
            <button
                type = {"submit"}
                className = {addCommentClasses.btnCommentAdd}
                aria-label = "Опубликовать комментарий"
                onClick = {() => props.addComment(newAuthorElement.current.value, newTextElement.current.value)}
            >
                Опубликовать комментарий
            </button>
            <button
                type = {"button"}
                className = {addCommentClasses.btnCommentClear}
                aria-label = "Очистить"
                onClick = {props.clearAddComment}
            >
                Очистить
            </button>
        </form>
    );
};

export default AddComment;
