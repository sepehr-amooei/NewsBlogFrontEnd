import React from "react";
import News from "./news";
import { useLoaderData } from "react-router-dom";
import { getNews } from "../services/fakeNewsService";

export async function loader() {
  const posts = await getNews();
  return posts;
}

const Home = () => {
  const posts = useLoaderData();
  return <News posts={posts} />;
};

export default Home;
