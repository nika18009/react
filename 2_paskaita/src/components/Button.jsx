import PropTypes from "prop-types";

function Button(props) {
  return props.variant === "text" ? (
    <div class="button">
      <button className="text">{props.title}</button>
    </div>
  ) : props.variant === "contained" ? (
    <div class="button">
      <button className="contained">{props.title}</button>
    </div>
  ) : (
    <div class="button">
      <button className={props.variant}>{props.title}</button>
    </div>
  );
}

Button.propTypes = {
  title: PropTypes.string,
  variant: PropTypes.oneOf(["text", "outlined", "contained"]),
};

export default Button;
