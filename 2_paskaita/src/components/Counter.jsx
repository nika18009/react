import React from "react";

class Counter extends React.Component {
  constructor(props) {
     super(props);
    this.state = { number: 0 };
  }

  increaseNumber = () => {
    this.setState({ number: this.state.number + 1 });
  };
  decreaseNumber = () => {
    this.setState({ number: this.state.number - 1 });
  };

  render() {
    return (
      <div>
        <h1>{this.state.number}</h1>
        <button onClick={this.increaseNumber}> Plus one</button>
        <button onClick={this.decreaseNumber}> Minus one</button>
      </div>
    );
  }
}

export default Counter;
