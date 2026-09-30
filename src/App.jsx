import { useState } from "react";
import "./App.css";
import FlashCard from "./components/FlashCard";
const App = () => {
  const [color, setColor] = useState("green");

  return (
    <div className="bodyContainer">
      <div>
        <h1>Computer Science Trivia!</h1>
        <h3>
          How much do you know about computer science? Test all your knowledge
          here!
        </h3>
        <p>Number of Cards: </p>
      </div>

      <FlashCard
        color={color}
        question={"question"}
        answer={"answer"}
      ></FlashCard>

      <div className="buttonContainer">
        <button className="backButton">←</button>
        <button className="forwardButton">→</button>
      </div>
    </div>
  );
};

export default App;
