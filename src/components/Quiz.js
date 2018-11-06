import React from "react";
import PropTypes from "prop-types";
import Questions from "./Questions";

const Quiz = ({ step, totalQuestions, score, questions, handleAnswerClick }) => {
  return (
    <div className="wrapper">
      <header>
        <div className="question-count">
          <h2>Question</h2>
          <div className="question-number">{step}</div>
          <div className="description">of <span>{totalQuestions}</span></div>
        </div>
        <h1>JavaScript Quiz</h1>
        <div className="score-container">
          <h2>Score</h2>
          <div className="score">{score}</div>
          <div className="description">points</div>
        </div>
      </header>

      <div className="questions">
        <Questions
          questions={questions}
          handleAnswerClick={handleAnswerClick}
        />
      </div>
    </div>
  );
}

Quiz.propTypes = {
  step: PropTypes.number.isRequired,
  totalQuestions: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
  handleAnswerClick: PropTypes.func.isRequired
};

export default Quiz;