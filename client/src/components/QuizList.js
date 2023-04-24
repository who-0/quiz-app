import React from "react";

const CardList = ({ quiz, activeAns, activeQuiz, renderAcitveAnswer }) => {
  return (
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
  );
};

export default CardList;
