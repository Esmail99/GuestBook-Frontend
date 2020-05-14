import React from "react";
import { getStorage, clearStorage } from "../services/localStorageManager";

class NavBar extends React.Component {
  onSignoutClick = () => {
    const { changeRoute } = this.props;
    changeRoute("login");
    clearStorage("userInfo");
  };

  render() {
    const { isSignedin, changeRoute } = this.props;
    const username = getStorage("userInfo")?.userData?.username;
    return (
      <>
        {isSignedin ? (
          <nav className="dt w-100 border-box pa3 ph5-ns bg-black-80 white">
            <div className="dtc v-mid w-75 tr">
              <p className="link f3-ns dib mr2" title="Contact">
                Hi, {username}
              </p>
              <p
                onClick={this.onSignoutClick}
                className="link dim f3-ns dib pointer mr2 ml4"
                title="Contact"
              >
                Signout
              </p>
            </div>
          </nav>
        ) : (
          <nav className="dt w-100 border-box pa3 ph5-ns bg-black-80 white">
            <div className="dtc v-mid w-75 tr">
              <p
                onClick={() => changeRoute("login")}
                className="link dim f3-ns dib mr3 mr4-ns pointer"
                title="Store"
              >
                Login
              </p>
              <p
                onClick={() => changeRoute("register")}
                className="link dim f3-ns dib pointer mr2"
                title="Contact"
              >
                Register
              </p>
            </div>
          </nav>
        )}
      </>
    );
  }
}

export default NavBar;
