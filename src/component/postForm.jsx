import React from "react";
import Joi from "joi-browser";
import FormComponent from "./common/form";
import { Form } from "react-router-dom";
import { getCategory } from "../services/fakeCategoryService";

class PostForm extends FormComponent {
  state = {
    data: { title: "", body: "", intro: "", categoryId: "" },
    categories: [],
    errors: {},
  };

  schema = {
    intro: Joi.string().required().label("Intro"),
  };
  componentDidMount() {
    const categories = getCategory();
    this.setState({ categories });
  }
  doSubmit = () => {
    //call the server
    console.log("submitted");
  };

  render() {
    return (
      <div className="center">
        <h1>Post Form</h1>
        <Form onSubmit={this.handleSubmit}>
          {this.renderTextArea("title", "Title", 2)}
          {this.renderSelect("categoryId", "Category", this.state.categories)}
          {this.renderTextArea("intro", "Intro", 4)}
          {this.renderTextArea("body", "Body", 6)}
          {this.renderButton("Save")}
        </Form>
      </div>
    );
  }
}

export default PostForm;
