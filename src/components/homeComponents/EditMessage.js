import React from "react";
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import { putService } from "../../services/messageServices";

class EditMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newMessageContent: "",
      errorMessage: "",
    };
  }

  onEditBtnClick = () => {
    const { newMessageContent } = this.state;
    const { reloadHome, _id } = this.props;

    const requestData = {
      content: newMessageContent,
    };

    if (newMessageContent.length) {
      putService(`/api/messages/edit/${_id}`, requestData)
        .then(() => {
          PopupboxManager.close();
          reloadHome();
        })
        .catch(console.log);
    }
  };

  onEditClick = () => {
    const content = (
      <div>
        <p className="f4 ma3 tc">Edit Message</p>
        <input
          onChange={this.onInputChange}
          className="pa3 br4-ns outline-0 mt2"
          type="text"
          name="editMessage"
          placeholder="write the new message"
        />
        <input
          onClick={this.onEditBtnClick}
          className="f5 f6-l button-reset pv3 tc ml2 bn bg-animate bg-blue grow white pointer w-50 w-20-m w-20-l br4-ns outline-0 mt2"
          type="button"
          value="Edit"
        />
      </div>
    );
    PopupboxManager.open({ content });
  };

  onInputChange = (event) => {
    this.setState({ newMessageContent: event.target.value });
  };

  render() {
    return (
      <>
        <img
          onClick={this.onEditClick}
          src={require("../../assets/images/edit.png")}
          className="h2 w2 dib pointer dim fl"
          alt="edit"
        />
        <PopupboxContainer />
      </>
    );
  }
}

export default EditMessage;
