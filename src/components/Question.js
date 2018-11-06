import React from "react";
import PropTypes from "prop-types";
import Answer from "./Answer";

const Question = ({ question, answers, handleAnswerClick }) => {
  return (
    <li className="question">
      <h2 className="question-title" tabIndex="0">
        {question}
      </h2>
      <ul className="question-answers" tabIndex="-1">
        {answers.map((answer, index) => {
          return (
            <Answer
              key={index}
              answer={answer}
              handleAnswerClick={handleAnswerClick(index)}
            />
          );
        })}
      </ul>
    </li>
  );
};

Question.propTypes = {
  question: PropTypes.element.isRequired,
  answers: PropTypes.array.isRequired,
  handleAnswerClick: PropTypes.func.isRequired
};

export default Question;
