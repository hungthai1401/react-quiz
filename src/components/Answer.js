import React from "react";
import PropTypes from "prop-types";

const Answer = ({ answer, handleAnswerClick }) => {
  return (
    <li className="question-answer" tabIndex="0" onClick={handleAnswerClick}>
      {answer}
    </li>
  );
};

Answer.propTypes = {
  answer: PropTypes.element.isRequired,
  handleAnswerClick: PropTypes.func.isRequired
};

export default Answer;
