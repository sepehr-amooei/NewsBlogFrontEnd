import React from "react";
import { getNews } from "../services/fakeNewsService";
import { useLoaderData } from "react-router-dom";

export async function loader() {
  const savedPosts = await getNews();
  return savedPosts.filter((post) => post.saved === true);
}

const SavedPosts = () => {
  const savedPosts = useLoaderData();
  console.log(savedPosts);
  return (
    <div className="center">
      <h1>saved posts</h1>
    </div>
  );
};

export default SavedPosts;
