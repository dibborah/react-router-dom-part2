import Post from "../components/Post";
import { useLoaderData, redirect, useSearchParams, useNavigation } from "react-router-dom";

// New Things which we are going to learn

// loaders fc
// Form
// actions

// Things which are going to change

// Fetching data using useEffect
// protected routed

// What do we want ??
// Hum chahte hain ki data fetch na ho jab isLoggedIn ki value false

// Info on URL JS object

// href = http:localhost:5175/post
// hostName: localhost
// host: localhost:5175
// port: 5175
// pathname: /post
// protocol: http

export const loader = async ({ request }, { isLoggedIn }) => {
  const endpoint = "https://jsonplaceholder.typicode.com/posts";
  const url = request.url;
  const { pathname } = new URL(url);

  // console.log(pathname);

  if (!isLoggedIn) {
    return redirect(`/login?redirectTo=${pathname}`);// This is a redirect fc from react-router-dom// It is not a hook so can be even used outside a functional component
  }
  const response = await fetch(endpoint);
  if (!response.ok) {
    throw new Error("Something went Wrong in All Posts");
  }
  const data = await response.json();
  return data;
};

const Posts = () => {
  const posts = useLoaderData();

  return (
    <div>
    <h1>Posts</h1>
      {posts &&
        posts.map((post) => {
          return <Post key={post.id} {...post} />;
        })}
    </div>
  );
};

export default Posts;
