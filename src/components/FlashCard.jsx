import { useState } from "react";

const FlashCard = ({ color, question, answer }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={`flashCard ${color}`} onClick={() => setFlipped((f) => !f)}>
      <div className={`flipInner ${flipped ? "flipped" : ""}`}>
        <div className="face front">
          <h1>{question}</h1>
        </div>
        <div className="face back">
          <h2>{answer}</h2>
        </div>
      </div>
    </div>
  );
};

export default FlashCard;
