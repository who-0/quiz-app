import React, { useState } from "react";
import "./App.css";
import Quiz from "../components/Quiz";

function App() {
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
    <div className="container" style={{ marginTop: 150 }}>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-6 offset-md-3">
          <div className="card bg-dark">
            <Quiz
              renderAcitveAnswer={renderAcitveAnswer}
              renderNext={renderNext}
              activeQuiz={activeQuiz}
              summary={summary}
              activeAns={activeAns}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
