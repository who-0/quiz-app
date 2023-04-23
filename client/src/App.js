import React, { useState } from "react";
import useFetch from "./hook/useFetch";
import "./App.css";

function App() {
  const { loader, quiz } = useFetch();
  const [activeQuiz, setActiveQuize] = useState(0);
  const [activeAns, setActiveAns] = useState(false);
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-6 offset-md-3">
          <div className="card bg-dark">
            <div className="card-body">
              {loader && (
                <div className="d-flex justify-content-center align-items-cneter">
                  <div class="spinner-border text-success" role="status">
                    <span class="sr-only">Loading...</span>
                  </div>
                </div>
              )}
              {!loader && (
                <>
                  <span className="float-right badge badge-success">
                    {activeQuiz + 1}/{quiz.length}
                  </span>
                  <h4 className="text-success">{quiz[activeQuiz].question}</h4>
                  <ul className="list-group mt-4">
                    {quiz[activeQuiz].answers.map((ans, i) => (
                      <li className="list-group-item p-2 mt-2" key={i}>
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
                    >
                      Next
                    </button>
                    {activeAns !== false && (
                      <span className="text-danger">Wrong Answer</span>
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
