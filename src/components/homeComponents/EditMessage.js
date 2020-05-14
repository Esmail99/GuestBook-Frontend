import React from "react";

class EditMessage extends React.Component {
  render() {
    return (
      <img
        src={require("../../assets/images/edit.png")}
        className="h2 w2 dib pointer dim fl"
        alt="edit"
      />
    );
  }
}

export default EditMessage;
