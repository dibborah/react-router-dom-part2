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

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />

        <Route
          path="posts"
          element={
            <RequireAuth>
              <Posts />
            </RequireAuth>
          }
        />
        <Route
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
