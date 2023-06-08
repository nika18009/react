import PropTypes from "prop-types";
import "./Main.css";

const Card = ({ userName, onClick, iconSrc }) => {
  return (
    <div className="userCard card">
      <img src={iconSrc} alt={iconSrc} onClick={onClick} />
      <h4>{userName}</h4>
    </div>
  );
};

Card.propTypes = {
  userName: PropTypes.string.isRequired,
  iconSrc: PropTypes.string.isRequired,
};

export default Card;
