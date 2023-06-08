import React from "react";
import Links from "./Links";
import "./Main.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navBar">
      <Link to="/">
        <img
          src="https://iconsplace.com/wp-content/uploads/_icons/d2b48c/256/png/google-chrome-icon-16-256.png"
          alt="logo"
        />
      </Link>
      <Links />
      <div className="icons">
        <FaFacebook />
        <FaTwitter />
        <FaInstagram />
      </div>
    </div>
  );
};

export default Navbar;
