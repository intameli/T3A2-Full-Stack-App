import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

export function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="nav">
      <img src={logo} />
      <Links />
      {/* <FaBars
        size={30}
        onClick={toggleMenu}
        style={{
          cursor: "pointer",
          marginLeft: "auto",
          gridColumnStart: 5,
        }}
      /> */}
      {menuOpen && (
        <div className="menu">
          <Links />
        </div>
      )}
    </div>
  );
}

const Links = () => {
  return (
    <>
      <NavLink to="/">Tutors</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/signup">Sign Up</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>
    </>
  );
};
