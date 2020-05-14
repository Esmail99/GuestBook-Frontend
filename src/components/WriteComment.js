import React from "react";

class WriteComment extends React.Component {
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
              className="f4 input-reset bn fl black-80 bg-white pt2 lh-solid w-60 w-60-m w-60-l br2-ns outline-0"
              placeholder="Write a comment.."
              type="text"
              name="message"
              style={{ resize: "none" }}
            />
            <input
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
