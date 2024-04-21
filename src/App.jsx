import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import {
  Home,
  About,
  ErrorPage,
  Posts,
  Contact,
  PostDetails,
  Login,
} from "./pages";
import RootLayout from "./layout/RootLayout";
import { loader as fetchPosts } from "./pages/Posts";
import { loader as fetchPost } from "./pages/PostDetails";
import { useAuth } from "./contexts/AuthProvider";

const App = () => {
  const { isLoggedIn } = useAuth();
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<RootLayout />}
        errorElement={<h1>Something Went Wrong</h1>}
      >
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />

        <Route
          path="posts"
          loader={(args) => {
            return fetchPosts(args, { isLoggedIn: isLoggedIn });
          }}
          errorElement={<ErrorPage />}
          element={<Posts />}
        />
        <Route
          errorElement={<ErrorPage />}
          loader={(args) => fetchPost(args, { isLoggedIn })}
          path="posts/:id"
          element={<PostDetails />}
        />

        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
