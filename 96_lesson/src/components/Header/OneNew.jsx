import PropTypes from "prop-types";
import "./Header.css";

const OneNew = ({ newTitle, newText }) => {
  return (
    <div className="newsCard">
      <h4>{newTitle}</h4>
      <p>{newText}</p>
    </div>
  );
};

OneNew.propTypes = {
  newTitle: PropTypes.string.isRequired,
  newText: PropTypes.string.isRequired,
};

export default OneNew;
