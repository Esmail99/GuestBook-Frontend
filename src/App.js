import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
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
        <NavBar changeRoute={this.changeRoute} />
        {route === "login" ? (
          <Login changeRoute={this.changeRoute} />
        ) : route === "register" ? (
          <Register changeRoute={this.changeRoute} />
        ) : null}
        {/* <Home /> */}
      </>
    );
  }
}

export default App;
