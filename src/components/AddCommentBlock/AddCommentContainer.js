import React from 'react';
import {addCommentActionCreator, updateNewAuthorActionCreator, updateNewTextActionCreator, clearAddCommentActionCreator} from "../../actions/index.js";
import AddComment from "./AddComment/AddComment";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        newAuthor: state.commentsPage.newAuthor,
        newText: state.commentsPage.newText
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAuthorChange: (newAuthor) => dispatch(updateNewAuthorActionCreator(newAuthor)),
        onTextChange: (newText) => dispatch(updateNewTextActionCreator(newText)),
        addComment: (newAuthor, newText) => dispatch(addCommentActionCreator(newAuthor, newText)),
        clearAddComment: () => dispatch(clearAddCommentActionCreator())
    }
};

const AddCommentContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddComment);

export default AddCommentContainer;