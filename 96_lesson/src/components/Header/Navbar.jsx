import React from "react";
import Links from "./Links";
import "./Header.css";

export const Navbar = () => {
  return (
    <div className="navBar">
      <div>
        <img
          src="https://www.creativefabrica.com/wp-content/uploads/2022/09/03/surf-palm-paradise-ocean-surfing-logo-Graphics-37681581-3-580x387.png"
          alt="logo"
        />
      </div>
      <Links />
    </div>
  );
};

export default Navbar;
