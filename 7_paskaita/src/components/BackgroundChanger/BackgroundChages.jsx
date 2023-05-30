import { useState } from "react";
import "./BackgroundChanges.css";

const BackgroundChanger = () => {
  const [textInput, settextInput] = useState("");
  const [background, setbackgroundInput] = useState("blue");
  
 

  const textChange = (event) => {
    settextInput(event.target.value);
    console.log(textInput.length)
    if (textInput.length < 3 ){
        setbackgroundInput("white");
    } else if (textInput.length >= 3  &&  textInput.length < 6){
        setbackgroundInput("yellow")
  } else if (textInput.length >= 6 &&  textInput.length <9){
    setbackgroundInput("green")
} else{
    setbackgroundInput("red")
}}

  return (
    <div className={background}>
      <label className="bold">
        Set background:
        <input type="text" onChange={textChange} value={textInput} />
      </label>
    </div>
  );
};

export default BackgroundChanger;
