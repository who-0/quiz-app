/*
    get /api/quiz
    [
        {
            question:where is myanmar loacted
            answer:[
                {answer:asia,isCorrct:true},
                {answer:europ,isCorrect:false},
                {answer:Some,isCorrect:false}
            ]
        }
    ]

*/

const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  answers: [
    {
      answer: {
        type: String,
        required: true,
      },
      isCorrect: {
        type: Boolean,
        required: true,
      },
    },
  ],
});

const quizModel = mongoose.model("quiz", quizSchema);

module.exports = quizModel;
