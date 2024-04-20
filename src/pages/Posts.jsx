import { useState, useEffect } from "react";
import Post from "../components/Post";
import { useLoaderData } from "react-router-dom";

// New Things which we are going to learn

// loaders fc
// Form
// actions

// Things which are going to change

// Fetching data using useEffect
// protected routed
const url = "https://jsonplaceholder.typicode.com/posts";
export const loader = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const Posts = () => {
  const posts = useLoaderData();
  return (
    <div>
      {posts &&
        posts.map((post) => {
          return <Post key={post.id} {...post} />;
        })}
    </div>
  );
};

export default Posts;
