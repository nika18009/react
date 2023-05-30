import { useState } from "react";
import PropTypes from "prop-types";
import NewInput from "../Input/NewInput";
import "./LoginForm.css";

const LogInForm = ({ formName, logo }) => {
  const [welcome, setWelcome] = useState("");

  const change = (event) => {
    setWelcome("Welcome!");
    event.preventDefault();
    document.getElementById("remove").remove();
  };
  return (
    <div className="mainForm">
      <img src={logo} alt="" />
      <h2 id="remove">{formName}</h2>
      <h3>{welcome}</h3>
      <form onSubmit={change}>
        <NewInput type="text" inputName="Username" />
        <NewInput type="email" inputName="E-mail" />
        <NewInput type="password" inputName="Password" />
        <input className="submit" type="submit" value="Submit" />
      </form>
    </div>
  );
};

LogInForm.propTypes = {
  formName: PropTypes.string,
  logo: PropTypes.string,
};

export default LogInForm;
