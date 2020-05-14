import React from "react";
import WriteMessage from "./WriteMessage";
import Message from "./Message";
import getService from "../services/getServices";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    };
  }

  componentDidMount = () => {
    const { changeRoute } = this.props;

    getService("/api/messages/list")
      .then((res) => {
        this.setState({ messages: res.data });
      })
      .catch((err) => {
        changeRoute("login");
      });
  };

  render() {
    const { messages } = this.state;
    return (
      <main className="tc mw7 center avenir">
        <section className="ma4">
          <WriteMessage componentDidMount={this.componentDidMount} />
          {!messages.length ? (
            <h1>Loading...</h1>
          ) : (
            messages.map((message, index) => {
              return (
                <div key={index}>
                  <Message message={message} />
                </div>
              );
            })
          )}
        </section>
      </main>
    );
  }
}

export default Home;
