import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/homeComponents/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import { getStorage } from "./services/localStorageManager";

const initialState = {
  route: getStorage("userInfo")?.auth ? "home" : "login",
  isSignedin: getStorage("userInfo")?.auth,
};

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  changeRoute = (route) => {
    this.setState({ route });
    if (route !== "register") {
      window.location.reload();
    }
  };

  render() {
    const { route, isSignedin } = this.state;
    return (
      <>
        <NavBar changeRoute={this.changeRoute} isSignedin={isSignedin} />
        {route === "login" ? (
          <Login changeRoute={this.changeRoute} />
        ) : route === "register" ? (
          <Register changeRoute={this.changeRoute} />
        ) : (
          <Home changeRoute={this.changeRoute} />
        )}
      </>
    );
  }
}

export default App;
