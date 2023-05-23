import "./App.css";
import FuncBestCounter from "./components/FuncBestCounter";
import FuncCounter from "./components/FuncCounter";
import Counter from "./components/Counter";
import Hero from "./components/Hero";
import { useState } from 'react';
import Button from "./components/Button";
import MoodChecker from "./components/MoodChecker";


function App() {
  
  return (
    <div>
       <Button title={"Hello"} variant={"outlined"}/> 
       <MoodChecker/>
    </div>
  );
}

export default App;


