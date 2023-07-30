import React, { Component } from "react";
import { Form } from "react-router-dom";
import Input from "./input";

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
          <Input
            name="username"
            label="Username"
            value={this.username}
            onChange={this.handleChange}
          />
          <Input
            name="password"
            label="Password"
            value={this.password}
            onChange={this.handleChange}
          />
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </Form>
      </div>
    );
  }
}

export default LoginForm;
