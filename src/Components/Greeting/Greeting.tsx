import React from "react";
import "./Greeting.css";

interface GreetingProps {
  name: string;
}

const Greeting: React.FC<GreetingProps> = ({ name }) => {
  const greetingMessage = `Hello, ${name}!`; // Variable storing the greeting message
  return <div className="greeting">{greetingMessage}</div>; // Render the variable in JSX
};

export default Greeting;
