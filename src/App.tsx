import React from "react";
import "./App.css";
import Greeting from "./Components/Greeting/Greeting";
import Counter from "./Components/Counter/Counter";

const App: React.FC = () => {
  return (
    <div className="app-container">
      <header className="navbar">
        <ul>
          <div className="app-name">Counter App</div>{" "}
          <li>Home</li>
        </ul>
      </header>

      <div className="content-container">
        <Greeting name="Maroua Ben Ali" />
        <Counter />
      </div>
    </div>
  );
};

export default App;
