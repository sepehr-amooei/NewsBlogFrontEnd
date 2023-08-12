import React from "react";
import Joi from "joi-browser";
import FormComponent from "./common/form";
import { Form } from "react-router-dom";

class PostForm extends FormComponent {
  state = {
    data: { intro: "" },
    errors: {},
  };

  schema = {
    intro: Joi.string().required().label("Intro"),
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
          {this.renderTextArea("intro", "Intro", 1)}
          {this.renderButton("Save")}
        </Form>
      </div>
    );
  }
}

export default PostForm;
