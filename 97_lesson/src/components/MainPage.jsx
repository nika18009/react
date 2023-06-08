import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Main.css";

const MainPage = () => {
  return (
    <div className="hero ">
      <Navbar />
      <div className="mainPicture background">
      </div>
      <div className="hero-text">
        <h1>Welcome to Users Website</h1>
        <p>Only one click to get more information!</p>
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;

