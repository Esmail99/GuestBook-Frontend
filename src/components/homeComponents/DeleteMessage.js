import React from "react";
import { deleteService } from "../../services/messageServices";

class DeleteMessage extends React.Component {
  onDeleteClick = () => {
    const { reloadHome, _id } = this.props;
    deleteService(`/api/messages/delete/${_id}`)
      .then(() => {
        reloadHome();
      })
      .catch(console.log);
  };
  render() {
    return (
      <img
        onClick={this.onDeleteClick}
        src={require("../../assets/images/delete.webp")}
        className="h2 w2 dib pointer dim fr"
        alt="edit"
      />
    );
  }
}

export default DeleteMessage;
