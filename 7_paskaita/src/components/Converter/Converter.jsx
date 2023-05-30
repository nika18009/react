import { useState } from "react";
import "./Converter.css";

const Converter = () => {
  const [numberInput, setnumberInput] = useState("");
  const [tonValue, settonValue] = useState();
  const [grammValue, setgrammValue] = useState();
  const [poundValue, setpoundValue] = useState();

  const numberChange = (event) => {
    setnumberInput(event.target.value);
  };

  const handleClick = (event) => {
    settonValue(+numberInput * 0.001);
    setgrammValue(+numberInput * 1000);
    setpoundValue(+numberInput * 2.21)
  };

  

  return (
    <div className="ageInput">
      <label>
        Number to convert:
        <input type="number" onChange={numberChange} value={numberInput} />
      </label>
      <button onClick={handleClick}>Convert</button>
      <h2>
        {numberInput}kg is:
      </h2>
      <h3>{tonValue}t</h3>
      <h3>{grammValue}g</h3>
      <h3>{poundValue}lb</h3>
    </div>
  );
};

export default Converter;
