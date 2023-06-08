import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const SingleLink = ({ linksource, linkName }) => {
  return (
    <Link to={linksource} className="links">
      {linkName}
    </Link>
  );
};

export default SingleLink;

SingleLink.propTypes = {
  linksource: PropTypes.string.isRequired,
  linkName: PropTypes.string.isRequired,
};
