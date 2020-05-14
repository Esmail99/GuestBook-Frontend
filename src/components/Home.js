import React from "react";
import Message from "./Message";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="tc f3 mh4">
        <Message
          message={{
            _id: {
              $oid: "5ebca7b9c4c4c70017d8bf71",
            },
            username: "esmail",
            content: "bengoooooooo",
            comments: [],
            date: {
              $date: "2020-05-14T02:06:49.107Z",
            },
            __v: 0,
          }}
        />
        {/* <Message
          message={{
            _id: {
              $oid: "5ebca7b9c4c4c70017d8bf71",
            },
            username: "kakaa",
            content: "jsaja",
            comments: [],
            date: {
              $date: "2020-05-14T02:06:49.107Z",
            },
            __v: 0,
          }}
        />
        <Message
          message={{
            _id: {
              $oid: "5ebca7b9c4c4c70017d8bf71",
            },
            username: "haha",
            content: "dpdpd",
            comments: [],
            date: {
              $date: "2020-05-14T02:06:49.107Z",
            },
            __v: 0,
          }}
        /> */}
      </div>
    );
  }
}

export default Home;
