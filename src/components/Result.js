import React from "react";
import PropTypes from "prop-types";

const Result = ({ score, restartQuiz }) => {
  return (
    <div className="results-container">
      <h2>Quiz Results</h2>
      <div className="results-total">Your Total Score is <strong>{score}</strong>.</div>
      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );
};

Result.propTypes = {
  score: PropTypes.number.isRequired,
  restartQuiz: PropTypes.func.isRequired
};

export default Result;
