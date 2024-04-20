import { useLoaderData } from "react-router-dom";

export async function loader({ params }) {
  const { id } = params;
  const url = "https://jsonplaceholder.typicode.com/posts";
  const response = await fetch(`${url}/${id}`);
  const data = await response.json();
  return data;
}

const PostDetails = () => {
  const post = useLoaderData();

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
