import { Link, NavLink, Outlet, useNavigation } from "react-router-dom";
import styles from "./RootLayout.module.css";
import { useAuth } from "../contexts/AuthProvider";

const RootLayout = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const navigation = useNavigation(); // Parent gives better loading state of the child // Test and know it better
  return (
    <div>
      <h1>Nav</h1>
      <nav>
        <ul>
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? styles.activeNav : null)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"about"}
              className={({ isActive }) => (isActive ? styles.activeNav : null)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"contact"}
              className={({ isActive }) => (isActive ? styles.activeNav : null)}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"posts"} // Parent gives better loading state or fetching state of the child component// Just test and know it
              className={({ isActive }) => (isActive ? styles.activeNav : null)}
            >
              Posts
            </NavLink>
          </li>
          {!isLoggedIn && (
            <li>
              <NavLink
                to={"login"}
                className={({ isActive }) =>
                  isActive ? styles.activeNav : null
                }
              >
                Login
              </NavLink>
            </li>
          )}
        </ul>
        {isLoggedIn && (
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        )}
      </nav>
      <main>
        <hr />
        {navigation.state === "loading" ? <h1>Loading ... </h1> : <Outlet />}
      </main>
    </div>
  );
};

export default RootLayout;
