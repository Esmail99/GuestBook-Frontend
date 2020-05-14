import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";

const initialState = {
  route: "register",
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
        ) : (
          <Home />
        )}
      </>
    );
  }
}

export default App;
