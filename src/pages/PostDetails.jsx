import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostDetails = () => {
  const [post, setPost] = useState(null);
  const { id } = useParams();
  const url = "https://jsonplaceholder.typicode.com/posts";
  const fetchPost = async () => {
    const response = await fetch(`${url}/${id}`);
    const data = await response.json();
    setPost(data);
  };

  useEffect(() => {
    // fetching single post
    fetchPost();
  }, []);

  return (
    <div>
      {post && (
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  );
};

export default PostDetails;
