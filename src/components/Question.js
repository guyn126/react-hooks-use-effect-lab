import React, { useEffect, useState } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTimeRemaining((prev) => prev - 1);
    }, 1000);

    if (timeRemaining === 0) {
      setTimeRemaining(10);
      onAnswered(false);
    }

    return () => clearTimeout(timeout);
  }, [timeRemaining, onAnswered]);

  return (
    <div>
      <h2>{question.prompt}</h2>
      <ul>
        {question.answers.map((ans, index) => (
          <li key={index}>{ans}</li>
        ))}
      </ul>
      <p>{timeRemaining} seconds remaining</p>
    </div>
  );
}

export default Question;
