import React from "react";

class DeleteMessage extends React.Component {
  render() {
    return (
      <img
        src={require("../assets/images/delete.webp")}
        className="h2 w2 dib pointer dim fr"
        alt="edit"
      />
    );
  }
}

export default DeleteMessage;
