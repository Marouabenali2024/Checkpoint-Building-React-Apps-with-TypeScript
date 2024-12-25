import { Component } from "react";
import "./Counter.css";

interface CounterState {
  count: number;
}

interface CounterProps {}

class Counter extends Component<CounterProps, CounterState> {
  state: CounterState = {
    count: 0,
  };

  increment = (): void => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div className="counter-background">
        {" "}
        <p> {this.state.count}</p>
        <button onClick={this.increment}>Count</button>
      </div>
    );
  }
}

export default Counter;
