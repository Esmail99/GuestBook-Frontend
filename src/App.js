import React, { Component } from "react";
import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";

const initialState = {
  route: "login",
  isSignedin: false,
  userInfo: {},
};

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  changeRoute = (route) => {
    this.setState({ route });
  };

  render() {
    const { route } = this.state;
    return (
      <>
        {route === "login" ? (
          <Login changeRoute={this.changeRoute} />
        ) : route === "register" ? (
          <Register changeRoute={this.changeRoute} />
        ) : null}
        {/* <NavBar /> */}
        {/* <Home /> */}
      </>
    );
  }
}

export default App;
