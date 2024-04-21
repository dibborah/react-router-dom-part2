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
import RequireAuth from "./components/RequireAuth";
import AuthProvider from "./contexts/AuthProvider";
import { loader as fetchPosts } from "./pages/Posts";
import { loader as fetchPost } from "./pages/PostDetails";

const App = () => {
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
          loader={fetchPosts}
          errorElement={<ErrorPage />}
          element={
            <RequireAuth>
              <Posts />
            </RequireAuth>
          }
        />
        <Route
          errorElement={<ErrorPage />}
          loader={fetchPost}
          path="posts/:id"
          element={
            <RequireAuth>
              <PostDetails />
            </RequireAuth>
          }
        />

        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    )
  );
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;
