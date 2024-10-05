const Quiz = require("../models/quiz");
const QuizResult = require("../models/quizResult");

// Create a new quiz
exports.createQuiz = async (req, res) => {
  try {
    const { title, description, questions } = req.body;
    const newQuiz = new Quiz({ title, description, questions });
    await newQuiz.save();
    res.status(201).json(newQuiz);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all quizzes
exports.getAllQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.status(200).json(quizzes);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get a single quiz by ID
exports.getQuizById = async (req, res) => {
  try {
    console.log(req.params.id);
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) return res.status(404).json({ message: "Quiz not found" });
    res.status(200).json(quiz);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Submit quiz results
exports.submitQuiz = async (req, res) => {
  try {
    const { quizId, userId, answers } = req.body;
    const quiz = await Quiz.findById(quizId);
    if (!quiz) return res.status(404).json({ message: "Quiz not found" });

    let score = 0;
    answers.forEach((answer) => {
      const question = quiz.questions.id(answer.questionId);
      if (question && question.correctOption === answer.selectedOption) {
        score++;
      }
    });

    const result = new QuizResult({
      quizId,
      userId,
      answers,
      score,
    });

    await result.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get quiz results by user ID
exports.getQuizResultsByUserId = async (req, res) => {
  try {
    const results = await QuizResult.find({
      userId: req.params.userId,
    }).populate("quizId");
    res.status(200).json(results);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
