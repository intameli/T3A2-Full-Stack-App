import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

export function NavBar({ user }) {
  const [menuOpen, setMenuOpen] = useState(false);
  console.log(user);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="nav">
      <img src={logo} />
      <Links user={user} />
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
          <Links user={user} />
        </div>
      )}
    </div>
  );
}

const Links = ({ user }) => {
  console.log(user);
  return (
    <>
      <NavLink to="/">Tutors</NavLink>
      {user ? (
        <>
          <NavLink to="/profile">Profile</NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </>
      ) : (
        <>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/signup">Sign Up</NavLink>
        </>
      )}
    </>
  );
};
