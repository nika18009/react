import PropTypes from "prop-types";

function Button(props) {
  return props.variant === "text" ? (
    <div class="button">
      <button class="text">{props.title}</button>
    </div>
  ) : props.variant === "contained" ? (
    <div class="button">
      <button class="contained">{props.title}</button>
    </div>
  ) : (
    <div class="button">
      <button class="outlined">{props.title}</button>
    </div>
  );
}

Button.propTypes = {
  title: PropTypes.string,
  variant: PropTypes.string,
};

export default Button;
