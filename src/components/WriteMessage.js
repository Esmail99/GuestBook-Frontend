import React from "react";

class WriteMessage extends React.Component {
  render() {
    return (
      <div className="pt2">
        <form
          className="bg-white mw7 center pa2 br1-ns ba b--black-10"
          onSubmit={this.onFormSubmit}
        >
          <fieldset className="cf bn ma0 pa0">
            <div className="cf">
              <textarea
                onChange={this.onTextareaChange}
                className="f3 input-reset bn fl black-80 bg-white pt2 lh-solid w-80 w-80-m w-80-l br2-ns outline-0"
                placeholder="Add a Message .."
                type="text"
                name="addMessage"
                id="textarea"
                style={{ resize: "none" }}
                required
              />
              <input
                className="f5 f3-l button-reset fr pv3 tc bn bg-animate bg-blue grow white pointer w-50 w-20-m w-20-l br4-ns outline-0"
                type="submit"
                value="Message"
              />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default WriteMessage;
