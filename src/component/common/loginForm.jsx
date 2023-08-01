import React, { Component } from "react";
import { Form } from "react-router-dom";
import Joi from "joi-browser";

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
    return (
      <div className="center">
        <h1>Login</h1>
        <Form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </Form>
      </div>
    );
  }
}

export default LoginForm;
