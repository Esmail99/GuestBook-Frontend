import React, { Component } from "react";
import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";

class App extends Component {
  render() {
    return (
      <div>
        <Register />
        {/* <NavBar /> */}
        <Login />
        {/* <Home /> */}
      </div>
    );
  }
}

export default App;
