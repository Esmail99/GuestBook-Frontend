import React from "react";

class Message extends React.Component {
  render() {
    const { message } = this.props;
    return (
      <article
        className="w-100 center bg-white br4 pa3 pa3-ns mv3 ba b--black-40 pb0 pb0-ns"
        key={message._id}
      >
        <div className="tc">
          <p className="f3">{message.username}</p>
          <hr className="mw3 bb bw1 b--black-10" />
        </div>
        <p className="lh-copy measure center f3 black-70">{message.content}</p>
        <div className="tc mb2">
          <button id="likeBtn" className="dim pointer w-50 bn outline-0">
            <img
              src={require("../assets/images/comment.png")}
              className="w2 br-100 grow pointer dim"
              alt="comment"
            />
          </button>
        </div>
      </article>
    );
  }
}

export default Message;
