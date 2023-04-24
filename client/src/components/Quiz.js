import React from "react";
import useFetch from "../hook/useFetch";
import Summary from "./Summary";
import Loader from "./Loader";
import CardList from "./QuizList";
const Quiz = ({
  activeQuiz,
  summary,
  activeAns,
  renderAcitveAnswer,
  renderNext,
}) => {
  const { loader, quiz } = useFetch();
  return (
    <div className="card-body">
      {loader && <Loader />}
      {!loader && quiz.length < activeQuiz + 1 && (
        <Summary quizCount={quiz.length} summary={summary} />
      )}
      {!loader && quiz.length >= activeQuiz + 1 && (
        <>
          <span className="float-right badge badge-success">
            {activeQuiz + 1}/{quiz.length}
          </span>
          <h4 className="text-success">{quiz[activeQuiz].question}</h4>
          <CardList
            quiz={quiz}
            activeQuiz={activeQuiz}
            activeAns={activeAns}
            renderAcitveAnswer={renderAcitveAnswer}
          />
          <hr />
          <div className="d-flex justify-content-between align-items-center">
            <button
              className={`btn btn-success ${activeAns ? "acitve" : "disabled"}`}
              onClick={renderNext}
            >
              Next
            </button>
            {activeAns !== false && activeAns.isCorrect === false && (
              <span className="text-danger">Wrong Answer</span>
            )}
            {activeAns !== false && activeAns.isCorrect === true && (
              <span className="text-success">Correct Answer</span>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
