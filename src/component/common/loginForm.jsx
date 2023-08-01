import React, { Component } from "react";
import { Form } from "react-router-dom";
import Joi from "joi-browser";
import Input from "./input";
import FormComponent from "./form";

class LoginForm extends FormComponent {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
    //call the server
    console.log("submitted");
  };

  render() {
    const { data, errors } = this.state;
    return (
      <div className="center">
        <h1>Login</h1>
        <Form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            label="Username"
            value={data.username}
            error={errors.username}
            onChange={this.handleChange}
          />
          <Input
            name="password"
            label="Password"
            value={data.password}
            error={errors.password}
            onChange={this.handleChange}
          />
          <button
            disabled={this.validate()}
            type="submit"
            className="btn btn-primary"
          >
            Login
          </button>
        </Form>
      </div>
    );
  }
}

export default LoginForm;
