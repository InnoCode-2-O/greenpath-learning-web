const express = require("express");
const router = express.Router();
const quizController = require("../controllers/quizController");

// Quiz routes
router.post("/quizzes", quizController.createQuiz);
router.get("/quizzes", quizController.getAllQuizzes);
router.get("/quizzes/:id", quizController.getQuizById);

// Quiz result routes
router.post("/quizzes/submit", quizController.submitQuiz);
router.get("/results/:userId", quizController.getQuizResultsByUserId);

module.exports = router;
