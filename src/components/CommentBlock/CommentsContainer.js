import React from 'react';
import CommentItem from './CommentItem/CommentItem.js';
import {delCommentActionCreator, loadStateActionCreator} from "../../actions/index.js";
import {connect} from "react-redux";

class CommentsContainer extends React.Component {
    constructor(props) {
        super(props);
    };


    componentDidMount() {
        try {
            if (!localStorage.id) {
                localStorage.setItem('id', JSON.stringify(Number(0)));
            }

            if (!localStorage.comments) {
                localStorage.setItem('comments', JSON.stringify([]));
            }
            const serializedState = localStorage.getItem("comments");
            if (serializedState === null) {
                return undefined;
            }
            let comments = (JSON.parse(serializedState));
            this.props.loadState(comments);
            return;
        } catch (err) {
            console.log(err);
            return undefined;
        }

    }

    render() {
        return <CommentItem
                comments = {this.props.comments}
                delComment = {this.props.delComment}
                />
    }
}

const mapStateToProps = (state) => {
    return {
        comments: state.commentsPage.comments
    }
};



const mapDispatchToProps = (dispatch) => {
    return {
        delComment: (id) => dispatch(delCommentActionCreator(id)),
        loadState: (comments) => dispatch(loadStateActionCreator(comments))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentsContainer);