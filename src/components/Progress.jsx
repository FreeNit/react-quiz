import React from "react";

export default function Progress({ index, numQuestions, points, maxPossiblePoints, answer }) {
  return (
    <header className="progress">
      <progress value={index + Number(answer !== null)} max={numQuestions}></progress>

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
