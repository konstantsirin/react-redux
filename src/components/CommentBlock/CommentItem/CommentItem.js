import React from 'react';
import commentItemClasses from './CommentItem.module.css';

const CommentItem = (props) => {
    console.log(props.comments);
    return (
    <div>
        <h1>Комментарии</h1>
        <ul
            className={commentItemClasses.commentsList}
        >
            {props.comments.map(comment => { return (
                <li
                    className = {commentItemClasses.commentBlock}
                    key = {comment.id}
                >
                    <header
                        className={commentItemClasses.commentBlockHeader}
                    >
                        <div
                            className={commentItemClasses.authorName}
                        >
                            Автор: {comment.author}
                        </div>
                        <div
                            className={commentItemClasses.date}
                        >
                            {comment.dateTime}
                        </div>
                    </header>
                    <p
                        className={commentItemClasses.commentText}
                    >
                        {comment.text}
                    </p>
                    <footer>
                        <button
                            type="button"
                            className={commentItemClasses.btnCommentDel}
                            aria-label="Удалить комментарий"
                            onClick = {() => {props.delComment(comment.id)}}
                        >
                            Удалить комментарий
                        </button>
                    </footer>
                </li>
            )})
            }
        </ul>
    </div>

    )
};

export default CommentItem;