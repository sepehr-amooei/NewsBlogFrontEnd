import React, { Component } from "react";
import FormComponent from "./form";
import Joi from "joi-browser";
import { Form } from "react-router-dom";

class RegisterForm extends FormComponent {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().email().label("Username"),
    password: Joi.string().min(8).required().label("Password"),
    name: Joi.string().required().label("Name"),
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
          {this.renderInput("username", "Username", "email")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}
          {this.renderButton("Register")}
        </Form>
      </div>
    );
  }
}

export default RegisterForm;
