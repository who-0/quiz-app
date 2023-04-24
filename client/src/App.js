import React, { useState } from "react";
import useFetch from "./hook/useFetch";
import "./App.css";
import Summary from "./Summary";

function App() {
  const { loader, quiz } = useFetch();
  const [activeQuiz, setActiveQuize] = useState(0);
  const [activeAns, setActiveAns] = useState(false);
  const [summary, setSummary] = useState({ correct: 0, wrong: 0 });

  const renderAcitveAnswer = (ans) => {
    setActiveAns(ans);
  };

  const renderNext = () => {
    setActiveQuize(activeQuiz + 1);
    setActiveAns(false);
    if (activeAns.isCorrect) {
      setSummary({ correct: summary.correct + 1, wrong: summary.wrong });
    } else {
      setSummary({ correct: summary.correct, wrong: summary.wrong + 1 });
    }
  };
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-6 offset-md-3">
          <div className="card bg-dark">
            <div className="card-body">
              {loader && (
                <div className="d-flex justify-content-center align-items-cneter">
                  <div className="spinner-border text-success" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              )}
              {!loader && quiz.length < activeQuiz + 1 && (
                <Summary quizCount={quiz.length} summary={summary} />
              )}

              {!loader && quiz.length >= activeQuiz + 1 && (
                <>
                  <span className="float-right badge badge-success">
                    {activeQuiz + 1}/{quiz.length}
                  </span>
                  <h4 className="text-success">{quiz[activeQuiz].question}</h4>
                  <ul className="list-group mt-4">
                    {quiz[activeQuiz].answers.map((ans, i) => (
                      <li
                        className={`list-group-item p-2 mt-2 ${
                          activeAns !== false && "disabled"
                        } ${
                          activeAns._id === ans._id &&
                          activeAns.isCorrect === false &&
                          "bg-danger"
                        }
                        ${
                          activeAns._id === ans._id &&
                          activeAns.isCorrect === true &&
                          "bg-success"
                        }
                        `}
                        key={i}
                        onClick={() => {
                          renderAcitveAnswer(ans);
                        }}
                      >
                        <span className="btn btn-sm btn-dark">{i + 1}</span>
                        <span>{ans.answer}</span>
                      </li>
                    ))}
                  </ul>
                  <hr />
                  <div className="d-flex justify-content-between align-items-center">
                    <button
                      className={`btn btn-success ${
                        activeAns ? "acitve" : "disabled"
                      }`}
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
