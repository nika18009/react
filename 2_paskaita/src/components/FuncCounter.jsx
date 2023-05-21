import { useState } from "react";

const FuncCounter = () => {
  const [state, setState] = useState({
    number: 0,
  });

  const increaseNumber = () => {
    setState(prevState => ({ ...prevState, number: prevState.number + 1 }));
  };
  
  const decreaseNumber = () => {
    setState(prevState => ({ ...prevState, number: prevState.number - 1 }));
  };
  

  return (
    <div>
      <h1>{state.number}</h1>
      <button onClick={increaseNumber}> Plus one</button>
      <button onClick={decreaseNumber}> Minus one</button>
    </div>
  );
};

export default FuncCounter;


//generate by chatGPT


// const FuncCounter = () => {
//   const [number, setNumber] = useState(0);

//   const increaseNumber = () => {
//     setNumber(number + 1);
//   };

//   const decreaseNumber = () => {
//     setNumber(number - 1);
//   };

//   return (
//     <div>
//       <h1>{number}</h1>
//       <button onClick={increaseNumber}>Plus one</button>
//       <button onClick={decreaseNumber}>Minus one</button>
//     </div>
//   );
// };


