const quizModel = require("../models/quiz.model");
const getHome = async (req, res) => {
  const quiz = await quizModel.find({}, { _id: 1, question: 1, answers: 1 });
  res.status(200).json(quiz);
};

const postHome = async (req, res) => {
  const quiz = new quizModel(req.body);
  await quiz.save();
  res.status(200).json(quiz);
};

module.exports = {
  getHome,
  postHome,
};
