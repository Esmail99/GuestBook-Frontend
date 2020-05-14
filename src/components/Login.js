import React from "react";
import { loginUser } from "../services/registerService";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      errorMessage: "",
    };
  }

  validateUser = () => {
    const { password, username } = this.state;

    if (!username) {
      this.setState({
        errorMessage: "Username is required!",
      });
      return false;
    }
    if (!password) {
      this.setState({
        errorMessage: "Password is required!",
      });
      return false;
    }
    if (password.length < 6) {
      this.setState({
        errorMessage: "Password length must be 6 or more!",
      });
      return false;
    }
    return true;
  };

  onInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      errorMessage: "",
    });
  };

  onFormSubmit = (event) => {
    const { changeRoute } = this.props;
    const { username, password } = this.state;
    event.preventDefault();

    const userValid = this.validateUser();
    if (userValid) {
      loginUser({ username, password })
        .then((res) => {
          if (res.data.auth) {
            changeRoute("home");
          }
        })
        .catch((err) => {
          if (err.response.data.msg) {
            this.setState({ errorMessage: err.response.data.msg });
          } else {
            this.setState({
              errorMessage: "an error occurred please try again later!",
            });
          }
        });
    }
  };

  render() {
    const { changeRoute } = this.props;
    const { errorMessage } = this.state;
    return (
      <main className="pa4 black-80">
        <form className="measure center" onSubmit={this.onFormSubmit}>
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f3 fw6 ph0 mh0">Login</legend>
            <span className="red">{errorMessage}</span>
            <div className="mt3">
              <label className="db fw6 lh-copy f6">Username</label>
              <input
                onChange={this.onInputChange}
                className="pa2 input-reset ba bg-transparent w-70"
                type="name"
                name="username"
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6">Password</label>
              <input
                onChange={this.onInputChange}
                className="pa2 input-reset ba bg-transparent w-75"
                type="password"
                name="password"
              />
            </div>
          </fieldset>
          <div>
            <input
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              value="Login"
            />
          </div>
          <div className="lh-copy mt3">
            Dont have an accout yet?
            <span
              className="f6 link blue dim underline pointer ml1"
              onClick={() => changeRoute("register")}
            >
              Register
            </span>
          </div>
        </form>
      </main>
    );
  }
}

export default Login;
