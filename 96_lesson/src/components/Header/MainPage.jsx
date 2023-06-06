import React from "react";
import Navbar from "./Navbar";
import Footer from "../Footer/Footer";
import PropTypes from "prop-types";

const MainPage = ({ heroPhoto }) => {
  return (
    <div>
      <Navbar />
      <div className="mainPicture">
        <img src={heroPhoto} alt={heroPhoto} />
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;

MainPage.propTypes = {
  heroPhoto: PropTypes.string.isRequired,
};
