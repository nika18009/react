import PropTypes from "prop-types";
import "./Header.css";

const PictureCard = ({ pictureTitle, src }) => {
  return (
    <div className="imageCard">
      <img src={src} alt="" />
      <h4>{pictureTitle}</h4>
    </div>
  );
};

PictureCard.propTypes = {
  pictureTitle: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export default PictureCard;
