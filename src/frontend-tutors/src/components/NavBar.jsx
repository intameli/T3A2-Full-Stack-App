import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <div className="nav">
      <img src={logo} />
      <Link to="/">Tutors</Link>
      <Link to="/login">Login</Link>
    </div>
  );
}
