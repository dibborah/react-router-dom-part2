import { useState, useEffect } from "react";
import Post from "../components/Post";

const Posts = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";

  const [posts, setPosts] = useState(null);
  const fetchPosts = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setPosts(data);
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div>
      {posts &&
        posts.map((post) => {
          return <Post key={post.id} {...post}/>;
        })}
    </div>
  );
};

export default Posts;
