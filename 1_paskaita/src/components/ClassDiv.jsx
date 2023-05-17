import React from "react";
import ClassButton from "./ClassButton";

class ClassDiv extends React.Component {
  render() {
    return (
      <div>
        <h3>Pavadinimas</h3>
        <p>Kažkoks tekstas</p>
        <ClassButton title="Class mygtukas2" />
      </div>
    );
  }
}

export default ClassDiv;
