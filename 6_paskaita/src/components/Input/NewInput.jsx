import { useState } from "react";
import PropTypes from "prop-types";
import "./NewInput.css";

const NewInput = ({ inputName, type }) => {
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setMessage(event.target.value);
  };
  return (
    <div>
      <label>
        <span>{inputName}</span>
        <br />
        <input type={type} onChange={handleChange} value={message} />
      </label>
    </div>
  );
};

NewInput.propTypes = {
  inputName: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default NewInput;
