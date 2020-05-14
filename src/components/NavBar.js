import React from "react";

class NavBar extends React.Component {
  render() {
    return (
      <nav className="dt w-100 border-box pa3 ph5-ns bg-black-80 white">
        <div className="dtc v-mid w-75 tr">
          <p
            onClick={() => this.props.changeRoute("login")}
            className="link dim f3-ns dib mr3 mr4-ns pointer"
            title="Store"
          >
            Login
          </p>
          <p
            onClick={() => this.props.changeRoute("register")}
            className="link dim f3-ns dib pointer mr2"
            title="Contact"
          >
            Register
          </p>
        </div>
      </nav>
    );
  }
}

export default NavBar;
