import React from "react";
import Navbar from "./Navbar";
import Footer from "../Footer/Footer";
import PropTypes from "prop-types";

const AboutUs = ({ src }) => {
  return (
    <div>
      <Navbar />
      <div className="aboutUs">
        <h2> About Us</h2>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe eum
          assumenda, error accusantium provident odio possimus rem excepturi
          sunt veritatis voluptatum maxime cumque reiciendis laudantium quae
          molestiae officiis. Ipsa, magnam?
        </p>
        <img src={src} alt={src} />
      </div>
      <Footer style={{ color: "black" }} />
    </div>
  );
};

export default AboutUs;

AboutUs.propTypes = {
  src: PropTypes.string.isRequired,
};
