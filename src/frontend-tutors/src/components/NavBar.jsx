import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

export function NavBar({ user }) {
  const [menuOpen, setMenuOpen] = useState(false);
  let style = {};
  if (menuOpen) {
    style = { display: "grid" };
  }
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="nav">
      <img src={logo} />
      <Links user={user} />
      <div className="menu">
        <FaBars size={30} onClick={toggleMenu} className="hamburg" />
        {menuOpen && <Links user={user} style={style} />}
      </div>
    </div>
  );
}

const Links = ({ user, style }) => {
  return (
    <div className="nav-links" style={style}>
      <NavLink to="/">Tutors</NavLink>
      {user ? (
        <>
          <NavLink to="/profile">Profile</NavLink>
          {user?.isAdmin && <NavLink to="/dashboard">Dashboard</NavLink>}
          {user?.isAdmin && <NavLink to="/signupadmin">Add Admin</NavLink>}
        </>
      ) : (
        <>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/signup">Sign Up</NavLink>
        </>
      )}
    </div>
  );
};
