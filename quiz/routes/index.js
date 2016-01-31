var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quiz' });
});

router.get('/quizes/question', quizController.question);
router.get('/quizes/answer/:index',   quizController.answer);
router.get('/quizes/questions', quizController.questions);
router.get('/quizes/questions/:index', quizController.questionId);


module.exports = router;
