import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Question.css";

function Question({ value, returnAnswer, title, possibleAnswers }) {
  const [selected, setSelected] = useState("8===D");

  const changeSelected = (e) => {
    setSelected(e.target.textContent);
  };

  return (
    <div className="question">
      <div className="question__title">{title}</div>
      <div className="question__possibleAnswers">
        {possibleAnswers.map((answer) => (
          <p className="question__answer" onClick={changeSelected}>
            {answer}
          </p>
        ))}
      </div>
      <Link
        to={`/${value !== 2 ? "question" : "results"}${
          value + 1 === 1 ? "two" : value + 1 === 2 ? "three" : ""
        }`}
      >
        <div className="question__next" onClick={() => returnAnswer(selected)}>
          Next
        </div>
      </Link>
    </div>
  );
}

export default Question;
