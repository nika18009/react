import { useState } from "react";
import "./AgeInput.css";

const AgeInput = () => {
  const [nameInput, setnameInput] = useState("");
  const [ageInput, setageInput] = useState();

  const handleNameChange = (event) => {
    setnameInput(event.target.value);
  };

  const handleAgeChange = (event) => {
    setageInput(event.target.value);
  };

  const handleClick = () => {
    setageInput(+ageInput + 10);
  };

  return (
    <div className="ageInput">
      <label>
        First name:
        <input type="text" onChange={handleNameChange} value={nameInput} />
      </label>
      <br />
      <label>
        Age:
        <input type="number" onChange={handleAgeChange} value={ageInput} />
      </label>
      <button onClick={handleClick}>Add 10 years</button>
      <h2>
        {nameInput}'s age is {ageInput}
      </h2>
    </div>
  );
};

export default AgeInput;
