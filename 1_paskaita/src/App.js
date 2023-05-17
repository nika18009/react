import "./App.css";
import ClassButton from "./components/ClassButton";
import ClassDiv from "./components/ClassDiv";
import FuncButton from "./components/FuncButton";
import FuncDiv from "./components/FuncDiv";

function App() {
  const getText = () => {
    return "How was your day?";
  };
  return (
    <div>
      <div>
        <h1>Hey!</h1>
        <h2>{getText()}</h2>
        <FuncButton title="Mygtuko tekstas1" />
        <FuncDiv /> 
      </div>
      <div>
        <ClassButton name="Class mygtukas1"/>
        <ClassDiv/>
      </div>

    </div>
    
  );
}

export default App;
