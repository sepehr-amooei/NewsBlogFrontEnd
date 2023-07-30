import React, { Component } from "react";
import { Form } from "react-router-dom";

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
  };
  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  render() {
    const { account } = this.state;
    return (
      <div className="center">
        <h1>Login</h1>
        <Form>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              value={account.username}
              name="username"
              onChange={this.handleChange}
              autoFocus
              id="username"
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              value={account.password}
              name="password"
              onChange={this.handleChange}
              id="password"
              type="text"
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </Form>
      </div>
    );
  }
}

export default LoginForm;
