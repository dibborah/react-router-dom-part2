import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";
import { useLocation } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const location = useLocation();

  if (isLoggedIn) {
    return children;
  }
  // When passing props : just writing the prop or property name make the value of
  // the property to be true implicitly

  // But in a fc one have to write the value to be true explicitly

  return (
    <div>
      <Navigate
        to={"/login"}
        replace={true}
        state={{ previousPath: location.pathname }}
      />
    </div>
  );
};

export default RequireAuth;
