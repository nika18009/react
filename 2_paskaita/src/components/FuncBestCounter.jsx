import { useState } from "react";

const FuncBestCounter = ()=>{
    const [number, setNumber] = useState(0)

    const increaseNumber = () =>{
        setNumber(number+1)
    }

    const decreaseNumber = () =>{
        setNumber(number-1)
    }

    return(
        <div>
        <h1>{number}</h1>
        <button onClick={increaseNumber}> Plus one</button>
        <button onClick={decreaseNumber}> Minus one</button>
        </div>
    )
}

export default FuncBestCounter;