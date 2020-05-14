import React from "react";
import Comment from "./Comment.js";

class Message extends React.Component {
  render() {
    const { _id, username, content, comments } = this.props.message;
    return (
      <article
        className="w-100 center bg-white br4 pa3 pa3-ns mv3 ba b--black-40 pb0 pb0-ns"
        key={_id}
      >
        <div className="tc">
          <p className="f3">{username}</p>
          <hr className="mw3 bb bw1 b--black-10" />
        </div>
        <p className="lh-copy measure center f3 black-70">{content}</p>
        <hr className="bb bw1 b--black-10" />
        <div className="tc mb2">
          <button id="commentBtn" className="dim pointer w-50 bn outline-0">
            <img
              src={require("../assets/images/comment.png")}
              className="w2 br-100 grow pointer dim"
              alt="comment"
            />
          </button>
        </div>
        {comments.map((comment) => {
          return <Comment comment={comment} />;
        })}
      </article>
    );
  }
}

export default Message;
