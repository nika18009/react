import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Onelink = ({ linksource, linkName }) => {
  return (
    <Link to={linksource} className="link">
      {linkName}
    </Link>
  );
};

export default Onelink;

Onelink.propTypes = {
  linksource: PropTypes.string.isRequired,
  linkName: PropTypes.string.isRequired,
};
