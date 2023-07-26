import React from "react";
import News from "./news";
import { useLoaderData } from "react-router-dom";
import { getNews } from "../services/fakeNewsService";

export async function loader() {
  const savedPosts = await getNews();
  return savedPosts.filter((post) => post.saved === true);
}

const SavedPosts = () => {
  const savedPosts = useLoaderData();
  return <News posts={savedPosts} />;
};

export default SavedPosts;
