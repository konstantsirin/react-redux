import React from 'react';
import CommentItem from './CommentItem/CommentItem.js';
import {delCommentActionCreator} from "../../actions/index.js";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        comments: state.commentsPage.comments
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        delComment: (id) => dispatch(delCommentActionCreator(id))
    }
};

const CommentContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentItem);

export default CommentContainer;