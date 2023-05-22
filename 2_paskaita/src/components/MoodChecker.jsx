import { useState } from "react";

const MoodChecker = () => {
  const [message, setMessage] = useState("Kaip jaučiatės?");

  const prastai = "Nieko tokio, viskas bus gerai";
  ;
  const normaliai = "Gerai, nujaučiu, kad greitu metu jausitės puikiai";
  ;
  const puikiai = "Smagu girdėti, taip ir toliau"
  ;

  return (
    <div className="mood">
      <h1> {message}</h1>
      <button onClick={() => setMessage((previousM) => (previousM !=  prastai ? prastai : previousM))}>Jaučiuosi prastai</button>
      <button onClick={() => setMessage((previousM) => (previousM !=  normaliai ? normaliai : previousM))}>Jaučiuosi normaliai</button>
      <button onClick={() => setMessage((previousM) => (previousM !=  puikiai ? puikiai : previousM))}>Jaučiuosi puikiai</button>
    </div>
  );
  }
;

export default MoodChecker;