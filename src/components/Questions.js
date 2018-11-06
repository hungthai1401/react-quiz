import React from "react";
import PropTypes from "prop-types";
import Question from "./Question";

const Questions = ({ questions, handleAnswerClick }) => {
  return (
    <ul className="question-list">
      {questions.map((question, index) => {
        return (
          <Question
            key={index}
            question={question.question}
            answers={question.answers}
            handleAnswerClick={handleAnswerClick}
          />
        );
      })}
    </ul>
  );
}

Questions.propTypes = {
  questions: PropTypes.array.isRequired,
  handleAnswerClick: PropTypes.func.isRequired
}

export default Questions;