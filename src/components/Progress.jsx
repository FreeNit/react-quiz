import React from "react";
import { useQuiz } from "../contexts/QuizContext";

export default function Progress() {
  const { index, answer, numQuestions, points, maxPossiblePoints } = useQuiz();
  return (
    <header className="progress">
      <progress
        value={index + Number(answer !== null)}
        max={numQuestions}
      ></progress>

      <p>
        Question{" "}
        <strong>
          {index + 1} / <strong>{numQuestions}</strong>
        </strong>
      </p>

      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}
