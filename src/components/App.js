import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Result from "./Result";
import Quiz from "./Quiz";
import Modal from "./Modal";
import QUESTIONS from "../api/questions";
import shuffleQuestions from "../helpers/shuffle";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.initialState(this.props.totalQuestions)
    };
  }
  initialState(totalQuestions) {
    return {
      questions: shuffleQuestions(QUESTIONS).slice(0, totalQuestions),
      totalQuestions: Math.min(totalQuestions, QUESTIONS.length),
      step: 1,
      score: 0,
      modal: {
        state: "hide",
        praise: ""
      }
    };
  }
  // currying function
  handleAnswerClick = index => event => {
    const { questions } = this.state;
    const isCorrect = questions[0].correct === index;
    setTimeout(() => this.showModal(isCorrect), 750);
    setTimeout(() => this.nextStep(), 2750);
  }
  showModal = isCorrect => {
    let praise = "Wrong!";
    let score = this.state.score;
    if (isCorrect) {
      praise = "Correct!";
      score += 10;
    }

    this.setState({
      score,
      modal: {
        state: "show",
        praise
      }
    });
  };
  nextStep = () => {
    const { step, questions } = this.state;
    this.setState({
      questions: questions.slice(1),
      step: step + 1,
      modal: {
        state: "hide"
      }
    });
  }
  restartQuiz = () => {
    this.setState({
      ...this.initialState(this.props.totalQuestions)
    });
  }
  render() {
    const { step, totalQuestions, score, questions, modal } = this.state;
    if (step >= totalQuestions + 1) {
      return <Result score={score} restartQuiz={this.restartQuiz} />;
    } else {
      return (
        <Fragment>
          <Quiz
            step={step}
            questions={questions}
            totalQuestions={totalQuestions}
            score={score}
            handleAnswerClick={this.handleAnswerClick}
          />
          {modal.state === "show" && <Modal modal={modal} />}
        </Fragment>
      );
    }
  }
}

App.propTypes = {
  totalQuestions: PropTypes.number.isRequired
};

export default App;
