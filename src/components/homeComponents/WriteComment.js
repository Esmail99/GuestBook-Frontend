import React from "react";
import { putService } from "../../services/messageServices";

class WriteComment extends React.Component {
  constructor() {
    super();
    this.state = {
      commentContent: "",
    };
  }

  addComment = (e) => {
    e.preventDefault();
    const { commentContent } = this.state;
    const { reloadHome, _id } = this.props;

    const requestData = {
      content: commentContent,
    };
    putService(`/api/messages/comment/${this.props._id}`, requestData)
      .then(() => {
        reloadHome();
        this.setState({ commentContent: "" });
        document.getElementById(`comment${_id}`).value = "";
      })
      .catch(console.log);
  };

  onCommentChange = (event) => {
    this.setState({ commentContent: event.target.value });
  };

  render() {
    const { _id } = this.props;
    return (
      <form
        className="bg-white mw6 center pa2 br4-ns ba b--white"
        id={`commentBlock${_id}`}
        onSubmit={this.addComment}
      >
        <fieldset className="cf bn ma0 pa0">
          <div className="cf">
            <textarea
              onChange={this.onCommentChange}
              className="f4 input-reset bn fl black-80 bg-white pt2 lh-solid w-60 w-60-m w-60-l br2-ns outline-0"
              id={`comment${_id}`}
              placeholder="Write a comment.."
              type="text"
              name="message"
              style={{ resize: "none" }}
              required
            />
            <input
              className="f6 f5-l button-reset fr pv3 tc bn bg-animate bg-blue grow white pointer w-30 w-20-m w-20-l br4-ns outline-0"
              type="submit"
              value="Comment"
            />
          </div>
        </fieldset>
      </form>
    );
  }
}

export default WriteComment;
