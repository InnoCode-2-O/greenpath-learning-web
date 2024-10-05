const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
  quizId: { type: mongoose.Schema.Types.ObjectId, ref: "Quiz", required: true },
  userId: { type: String, required: true }, // This can be the ID of the user who submitted the quiz
  answers: [
    {
      questionId: { type: mongoose.Schema.Types.ObjectId, required: true },
      selectedOption: { type: Number, required: true }, // Index of the selected option (0-3)
    },
  ],
  score: { type: Number, required: true },
  submittedAt: { type: Date, default: Date.now },
});

const QuizResult = mongoose.model("QuizResult", resultSchema);

module.exports = QuizResult;
