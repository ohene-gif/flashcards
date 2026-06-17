import { useState } from "react";
import "./App.css";
import Card from "./Card";

function App() {
  const cards = [
    { question: "What does HTML stand for?", answer: "HyperText Markup Language" },
    { question: "What data structure uses FIFO?", answer: "Queue" },
    { question: "What data structure uses LIFO?", answer: "Stack" },
    { question: "What is O(1)?", answer: "Constant Time" },
    { question: "What is DFS?", answer: "Depth First Search" },
    { question: "What is BFS?", answer: "Breadth First Search" },
    { question: "What is Git?", answer: "Version Control System" },
    { question: "What is React?", answer: "JavaScript UI Library" },
    { question: "What is CSS?", answer: "Cascading Style Sheets" },
    { question: "What is an API?", answer: "Application Programming Interface" }
  ];

  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  const nextCard = () => {
    let randomIndex;

    do {
      randomIndex = Math.floor(Math.random() * cards.length);
    } while (randomIndex === currentCard && cards.length > 1);

    setCurrentCard(randomIndex);
    setIsFlipped(false);
  };

  return (
    <div className="app">
      <h1>Computer Science Flashcards</h1>

      <p>
        Practice common computer science concepts and interview questions.
      </p>

      <h3>Total Cards: {cards.length}</h3>

      <Card
        text={
          isFlipped
            ? cards[currentCard].answer
            : cards[currentCard].question
        }
        onFlip={flipCard}
      />

      <button onClick={nextCard}>Next Random Card</button>
    </div>
  );
}

export default App;