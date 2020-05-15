import React from "react";
import { putService } from "../../services/messageServices";

class WriteComment extends React.Component {
  constructor() {
    super();
    this.state = {
      commentContent: "",
    };
  }

  onCommentClick = () => {
    const { commentContent } = this.state;
    const { reloadHome } = this.props;

    const requestData = {
      content: commentContent,
    };
    putService(`/api/messages/comment/${this.props._id}`, requestData)
      .then((data) => {
        reloadHome();
        this.setState({ commentContent: "" });
        document.getElementById("commentContent").value = "";
      })
      .catch((err) => console.log(err));
  };

  onCommentChange = (event) => {
    this.setState({ commentContent: event.target.value });
  };

  render() {
    const { _id } = this.props;
    return (
      <div
        className="bg-white mw6 center pa2 br4-ns ba b--white"
        id={`commentBlock${_id}`}
      >
        <fieldset className="cf bn ma0 pa0">
          <div className="cf">
            <textarea
              onChange={this.onCommentChange}
              className="f4 input-reset bn fl black-80 bg-white pt2 lh-solid w-60 w-60-m w-60-l br2-ns outline-0"
              id="commentContent"
              placeholder="Write a comment.."
              type="text"
              name="message"
              style={{ resize: "none" }}
            />
            <input
              onClick={this.onCommentClick}
              className="f6 f5-l button-reset fr pv3 tc bn bg-animate bg-blue grow white pointer w-30 w-20-m w-20-l br4-ns outline-0"
              type="submit"
              value="Comment"
            />
          </div>
        </fieldset>
      </div>
    );
  }
}

export default WriteComment;
