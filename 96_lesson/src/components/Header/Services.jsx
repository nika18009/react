import React from "react";
import Navbar from "./Navbar";
import Footer from "../Footer/Footer";
// import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import OneNew from "./OneNew";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=3")
      .then((resp) => resp.json())
      .then((response) => {
        setServices(response);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <Navbar />
      <div className="news">
        <h2>Our Services</h2>
        <div className="newsSection">
          {services.map((service) => (
            <OneNew
              key={service.id}
              newTitle={service.title}
              newText={service.body}
            />
          ))}
        </div>
      </div>
      <Footer style={{ color: "black" }} />
    </div>
  );
};

export default Services;

// News.propTypes = {
//   pageTitle: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
// };
