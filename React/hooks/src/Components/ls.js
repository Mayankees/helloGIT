import React, { Component } from "react";

export default class Ls extends Component {
  constructor() {
    super();
    this.state = JSON.parse(localStorage.getItem("state1")) || {
      count: 0,
    };
  }

  setState(state) {
    localStorage.setItem("state1", JSON.stringify(state));
    super.setState(state);
  }

  increaseCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  decreaseCount = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };
  render() {
    return (
      <>
        <h1>Count {this.state.count}</h1>
        <button onClick={this.increaseCount}>+</button>
        <button onClick={this.decreaseCount}>-</button>
      </>
    );
  }
}
