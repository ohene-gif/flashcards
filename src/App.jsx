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
  const [guess, setGuess] = useState("");
  const [feedback, setFeedback] = useState("");
  const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  const checkAnswer = () => {
    if (
      guess.trim().toLowerCase() ===
      cards[currentCard].answer.toLowerCase()
    ) {
      setFeedback("✅ Correct!");

      const newStreak = currentStreak + 1;
      setCurrentStreak(newStreak);

      if (newStreak > longestStreak) {
        setLongestStreak(newStreak);
      }
    } else {
      setFeedback("❌ Incorrect!");
      setCurrentStreak(0);
    }
  };

  const nextCard = () => {
    if (currentCard < cards.length - 1) {
      setCurrentCard(currentCard + 1);
      setIsFlipped(false);
      setGuess("");
      setFeedback("");
    }
  };

  const prevCard = () => {
    if (currentCard > 0) {
      setCurrentCard(currentCard - 1);
      setIsFlipped(false);
      setGuess("");
      setFeedback("");
    }
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

      <br />

      <input
        type="text"
        placeholder="Enter your guess"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
      />

      <button onClick={checkAnswer}>Submit Guess</button>

      <p>{feedback}</p>

      <p>Current Streak: {currentStreak}</p>
      <p>Longest Streak: {longestStreak}</p>

      <button
        onClick={prevCard}
        disabled={currentCard === 0}
      >
        Previous
      </button>

      <button
        onClick={nextCard}
        disabled={currentCard === cards.length - 1}
      >
        Next
      </button>
    </div>
  );
}

export default App;