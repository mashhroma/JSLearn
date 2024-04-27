import React, { useState } from "react";

function CommentList(params) {
    const [comments, setComments] = useState([
        { id: 1, text: "Это первый комментарий" },
        { id: 2, text: "Это второй комментарий" },
        { id: 3, text: "Это третий комментарий" }
    ]);

    const deleteComment = (e) => {
        const commentId = e.target.parentElement.id;
        setComments(comments.filter(comment => comment.id !== +commentId));
    }

    return comments.map(comment =>
        <div className="Comment" key={comment.id} id={comment.id}>
            <span>{comment.text}</span>
            <button className="Button" onClick={deleteComment}>Удалить</button>
        </div>);
}

export default CommentList;