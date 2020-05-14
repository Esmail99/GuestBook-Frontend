import React from "react";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  onInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <main className="pa4 black-80">
        <form className="measure center" onSubmit={this.onFormSubmit}>
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f4 fw6 ph0 mh0">Register</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6">Username</label>
              <input
                onChange={this.onInputChange}
                className="pa2 input-reset ba bg-transparent w-70"
                type="name"
                name="username"
                minLength="3"
                maxLength="15"
                required
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6">Password</label>
              <input
                onChange={this.onInputChange}
                className="pa2 input-reset ba bg-transparent w-75"
                type="password"
                name="password"
                minLength="1"
                required
              />
            </div>
          </fieldset>
          <div>
            <input
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              value="Register"
            />
          </div>
          <div className="lh-copy mt3">
            Already have an accout?
            <span className="f6 link blue dim underline pointer ml1">
              Signin
            </span>
          </div>
        </form>
      </main>
    );
  }
}

export default Register;
