const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String }, // URL to the image if applicable
  options: {
    type: [String], // Array of 4 options
    validate: {
      validator: function (v) {
        return v.length === 4;
      },
      message: "A question must have 4 options.",
    },
  },
  correctOption: { type: Number, required: true }, // Index of the correct option (0-3)
});

const quizSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  questions: [questionSchema], // Array of questions
  createdAt: { type: Date, default: Date.now },
});

const Quiz = mongoose.model("Quiz", quizSchema);

module.exports = Quiz;
