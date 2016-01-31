var Quiz = require('../models/quiz_model');

var quiz = new Quiz();
var cq = quiz.randomQuestion();
var current = cq.question;

exports.index = function(req, res, next) {
  debug("en index.js: visitando '/'");
  res.render('index', { title: 'Quiz' });
};

// GET /quizes/question
exports.question = function(req, res) {
    cq = quiz.randomQuestion();
    current = cq.question;
    var index = cq.index;
     res.render('quizes/question', {pregunta: current.pregunta, index: index});
};

// GET /quizes/answer
exports.answer = function(req, res) {
  var c = 'Incorrecto';
  debug('req.query = '+req.query);
  debug('req.index = '+req.params.index);
  current = quiz.getQuestion(req.params.index);
  debug("current.respuesta(req.query.respuesta) = "+current.respuesta(req.query.respuesta));
  if (current.respuesta(req.query.respuesta)) { c = 'Correcto'; }
    res.render('quizes/answer', {respuesta: c})
};

exports.questionId = function(req, res){
    current = quiz.getQuestion(req.params.index - 1);
    res.render('quizes/question', {pregunta: current.pregunta, index: req.params.index - 1});
};

exports.questions = function(req, res){
    var questNumber  = quiz.quizLength();
    var questions = new Array(questNumber);
    for(var i = 0; i < questNumber; i++){
       questions[i] = quiz.getQuestion(i);
    }
    res.render('quizes/questions', {list: questions});
};
