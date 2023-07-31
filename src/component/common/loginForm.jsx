import React, { Component } from "react";
import { Form } from "react-router-dom";
import Input from "./input";
import { object } from "prop-types";

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
    errors: {},
  };
  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors });
    console.log(errors);
    if (errors) return;
    //call the server
    console.log("submitted");
  };
  validate = () => {
    const errors = {};
    const { account } = this.state;

    if (account.username.trim() === "")
      errors.username = "Username is required.";
    if (account.password.trim() === "")
      errors.password = "Password is required.";

    return Object.keys(errors).length === 0 ? null : errors;
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
        <Form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            label="Username"
            value={account.username}
            onChange={this.handleChange}
          />
          <Input
            name="password"
            label="Password"
            value={account.password}
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
