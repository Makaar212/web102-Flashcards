import { use, useState } from "react";
import "./App.css";
import FlashCard from "./components/FlashCard";
const App = () => {
  const [color, setColor] = useState("green");
  const [question, setQuestion] = useState("Are you ready to start?");
  const [answer, setAnswer] = useState("Press arrow button to start");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [forwardGray, setForwardGray] = useState(false);
  const [backwardGray, setBackwardGray] = useState(true);
  const [answerResult, setAnswerResult] = useState("neutralAnswer");
  const questionBank = [
    {
      question: "Which programming language has the logo of two snakes?",
      answer: "Python",
    },
    {
      question: "Which computer scientist created the first algorithim?",
      answer: "Ada Lovelace",
    },
    {
      question: "When was the first algorithim created?",
      answer: "1843",
    },
    {
      question: "What is the version control software that Github is built on?",
      answer: "Git",
    },
    {
      question: "What is the most popular web programming language",
      answer: "JavaScript",
    },
    {
      question: "What is the most popular backend programming language?",
      answer: "Java",
    },
    {
      question: "What is the most popular Javascript framework?",
      answer: "React",
    },
    {
      question:
        "What is the name of a data structure that contains nodes in which each node can have up to 2 children?",
      answer:
        "A Binary Tree (Not a binary search tree, they are similar but different)",
    },
    {
      question:
        "In a tree data structure, what is the only node that has no parent ",
      answer: "The root node",
    },
    {
      question: "What is a linkedlist that can move both ways called?",
      answer: "A doubly linked list",
    },
    {
      question:
        "What is the data structure behind the deque library in python?",
      answer: "A doubly LinkedList!",
    },
  ];
  const COLORS = [
    "red",
    "pink",
    "green",
    "blue",
    "lightblue",
    "purple",
    "lightpurple",
  ];

  function checkAnswer(e) {
    e.preventDefault();
    const input = document.querySelector("#answerBox");
    if (input.value.toLowerCase() == answer.toLowerCase()) {
      setAnswerResult("correctAnswer");
    } else {
      setAnswerResult("incorrectAnswer");
    }
  }

  function forwardQuestion() {
    let flashCard = document.querySelector(".flipInner");
    flashCard.classList.remove("flipped");

    setQuestionIndex(Math.min(questionIndex + 1, questionBank.length - 1));
    setBackwardGray(false);
    setAnswerResult("neutralAnswer");
    if (questionIndex == questionBank.length - 1) {
      setForwardGray(true);
    }
    let chosenQuestion = questionBank[questionIndex];
    if (questionIndex != questionBank.length - 1) {
      setColor(COLORS[Math.floor(Math.random() * COLORS.length)]);
    }
    setQuestion(chosenQuestion.question);
    setAnswer(chosenQuestion.answer);
  }

  function backwardQuestion() {
    let flashCard = document.querySelector(".flipInner");
    flashCard.classList.remove("flipped");

    setQuestionIndex(Math.max(questionIndex - 1, 0));
    setAnswerResult("neutralAnswer");
    setForwardGray(false);

    if (questionIndex == 0) {
      setBackwardGray(true);
    }
    let chosenQuestion = questionBank[questionIndex];
    if (questionIndex != 0) {
      setColor(COLORS[Math.floor(Math.random() * COLORS.length)]);
    }
    setQuestion(chosenQuestion.question);
    setAnswer(chosenQuestion.answer);
  }

  return (
    <div className="bodyContainer">
      <div className="header">
        <h1>Computer Science Trivia!</h1>
        <h3>
          How much do you know about computer science? Test all your knowledge
          here!
        </h3>
        <p>Number of Cards: {questionBank.length} </p>
      </div>

      <FlashCard color={color} question={question} answer={answer}></FlashCard>
      <form onSubmit={checkAnswer}>
        <input
          className={answerResult}
          id="answerBox"
          name="answer"
          placeholder="Guess Answer"
        ></input>
      </form>
      <div className="buttonContainer">
        <button
          className={`backwardButton ${backwardGray ? "grayButton" : null}`}
          onClick={backwardQuestion}
        >
          ←
        </button>
        <button
          className={`forwardButton ${forwardGray ? "grayButton" : null}`}
          onClick={forwardQuestion}
        >
          →
        </button>
      </div>
    </div>
  );
};

export default App;
