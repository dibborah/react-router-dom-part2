import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";
import { useLocation } from "react-router-dom";

const Login = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const location = useLocation();
  const previousPath = location.state?.previousPath || "/";

  const navigate = useNavigate();
  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate(previousPath, { replace: true }); // here it is not a react component or a html tag
    // So just writing the property , for ex. : replace won't make the value to be true by default
    // Once has to explicitly write true if you want the value to be true
  };
  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
