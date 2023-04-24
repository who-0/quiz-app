import React from "react";

const Summary = ({ quizCount, summary }) => {
  const { wrong, correct } = summary;
  console.log(summary, quizCount);
  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      {quizCount === correct && (
        <>
          <span style={{ fontSize: 60 }}>😮</span>
          <br />
          <span className="h3 text-success">ဝိုးအားလုံးမှန်တယ်ဟ!</span>
        </>
      )}
      {wrong > 0 && (
        <>
          <span style={{ fontSize: 60 }}>🤔</span>
          <br />
          <span className="text-danger">
            {correct} ခုမှန်ပြီး {wrong} ခုမှားနေတယ်
          </span>
        </>
      )}
      <br />
      <a href="http://localhost:3001" className="mt-5 btn btn-success">
        ပြန်ဖြေမယ်
      </a>
    </div>
  );
};
export default Summary;
