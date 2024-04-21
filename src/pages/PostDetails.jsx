import { redirect, useLoaderData } from "react-router-dom";

const endpoint = "https://jsonplaceholder.typicode.com/posts";
export const loader = async (args, { isLoggedIn }) => {
  const { id } = args.params;

  const url = args.request.url;

  const pathnameSinglePost = new URL(url);

  const pathname = pathnameSinglePost.pathname;

  if (!isLoggedIn) {
    return redirect(`/login?redirectTo=${pathname}`);
  }
  const response = await fetch(`${endpoint}/${id}`);
  if (!response.ok) {
    throw new Error("Something went wrong in Single Post");
  }
  const data = await response.json();
  return data;
};

const PostDetails = () => {
  const post = useLoaderData();

  return (
    <div>
    <h1>Single Post</h1>
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
