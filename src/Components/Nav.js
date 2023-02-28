import { Link } from "react-router-dom";
import { signOut } from "../cognito";

const Nav = () => {
  const handleLogout = (e) => {
    console.log("logout");
    signOut();
  };
  return (
    <nav className="bg-red-200">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/singup">Sing Up</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li onClick={handleLogout}>
          <Link to="/logout">Logout</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
