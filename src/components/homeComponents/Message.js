import React from "react";
import Comment from "./Comment.js";
import WriteComment from "./WriteComment.js";
import EditMessage from "./EditMessage";
import DeleteMessage from "./DeleteMessage";
import { getStorage } from "../../services/localStorageManager.js";

class Message extends React.Component {
  render() {
    const { username, content, comments, _id } = this.props.message;
    const { reloadHome } = this.props;
    const usernameLocalStorage = getStorage("userInfo")?.userData?.username;
    return (
      <article className="w-100 center bg-white br4 pa3 pa3-ns mv3 ba b--black-40 pb0 pb0-ns">
        <div className="tc">
          {username === usernameLocalStorage ? (
            <section>
              <EditMessage />
              <DeleteMessage />
            </section>
          ) : null}
          <p className="f3">{username}</p>
          <hr className="mw3 bb bw1 b--black-10" />
        </div>
        <p className="lh-copy measure center f3 black-70">{content}</p>
        <hr className="bb bw1 b--black-10" />
        <WriteComment _id={_id} reloadHome={reloadHome} />
        {comments.map((comment, index) => {
          return (
            <div key={index}>
              <Comment comment={comment} />
            </div>
          );
        })}
      </article>
    );
  }
}

export default Message;
