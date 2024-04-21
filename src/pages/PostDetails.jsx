import { useLoaderData } from "react-router-dom";

const url = "https://jsonplaceholder.typicode.com/posts";
export const loader = async ({ params }) => {
  const { id } = params;
  const response = await fetch(`${url}/${id}`);
  if(!response.ok){
    throw new Error("Something went wrong in Single Post")
  }
  const data = await response.json();
  return data;
};

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
