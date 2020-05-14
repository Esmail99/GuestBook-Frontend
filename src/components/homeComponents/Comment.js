import React from "react";

class Comment extends React.Component {
  render() {
    const { owner, content } = this.props.comment;

    return (
      <div className="bg-black-20 br3 tl ph3 pa2 pb0 w-80 ml4">
        <p
          onClick={() => this.showProfile(owner)}
          className="f4 pb0 mb3 mt2 pointer hover-black-70 dark-blue dib"
        >
          {owner}
        </p>
        <p className="pt0 mt0 ml4 f4">{content}</p>
      </div>
    );
  }
}

export default Comment;
