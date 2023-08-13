import React from "react";
import Joi from "joi-browser";
import FormComponent from "./common/form";
import { Form, useNavigate, useParams } from "react-router-dom";
import { getCategory } from "../services/fakeCategoryService";
import { getNewsById, saveNews } from "./../services/fakeNewsService";

class PostForm extends FormComponent {
  state = {
    data: { title: "", categoryId: "", body: "", intro: "" },
    categories: [],
    errors: {},
  };
  schema = {
    _id: Joi.string(),
    title: Joi.string().required().label("Title"),
    categoryId: Joi.string().required().label("Category"),
    intro: Joi.string().required().label("Intro"),
    body: Joi.string().required().label("Body"),
  };
  componentDidMount() {
    const { params, navigate } = this.props;
    const categories = getCategory();
    this.setState({ categories });

    if (params.id === "new") return;

    const post = getNewsById(params.id);
    if (!post) return navigate("/not-found", { replace: true });

    this.setState({ data: this.mapToViewModel(post) });
  }
  mapToViewModel(post) {
    return {
      _id: post._id,
      title: post.title,
      categoryId: post.category._id,
      intro: post.intro,
      body: post.body,
    };
  }
  doSubmit = () => {
    saveNews(this.state.data);
    this.props.navigate("/posts");
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

export function PostFormWithRouter(props) {
  const navigate = useNavigate();
  const params = useParams();
  return <PostForm navigate={navigate} params={params}></PostForm>;
}
export default PostForm;
