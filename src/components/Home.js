import React from "react";
import WriteMessage from "./WriteMessage";
import Message from "./Message";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main className="tc mw7 center avenir">
        <section className="ma4">
          <WriteMessage />
          <Message
            message={{
              _id: {
                $oid: "5ebca7b9c4c4c70017d8bf70",
              },
              username: "esmail",
              content: "bengoooooooo",
              comments: [
                {
                  _id: {
                    $oid: "5ebc14075afcd42e68df2f80",
                  },
                  owner: "Esmail",
                  content: "hahaha",
                  date: {
                    $date: "2020-05-13T15:36:39.878Z",
                  },
                },
                {
                  _id: {
                    $oid: "5ebc14075afcd42e68df2f81sd",
                  },
                  owner: "Esmail",
                  content: "blablabala",
                  date: {
                    $date: "2020-05-13T15:36:39.878Z",
                  },
                },
              ],
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
        </section>
      </main>
    );
  }
}

export default Home;
