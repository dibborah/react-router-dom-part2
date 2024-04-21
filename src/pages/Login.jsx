import { redirect, useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Login = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  const [searchParams, setSearchParams] = useSearchParams();

  // #Note: search parameters are accessed via created a new Object
  // const location = useLocation();
  // const searchParams = new URLSearchParams(location.search);
  // const redirectPath = searchParams.get("redirectTo");

  const previousPath = searchParams.get("redirectTo") || "/";

  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate(previousPath, { replace: true }); // here it is not a react component or a html tag
      // So just writing the property , for ex. : replace won't make the value to be true by default
      // Once has to explicitly write true if you want the value to be true
    }
  }, [isLoggedIn]);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
