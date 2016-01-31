# STW-7
Siguiendo las instrucciones en el Módulo VI: El proyecto Quiz y MVC construya paso a paso la aplicación del cuestionario, utilizando  Favicon, Layouts, Controladores y Modelos

## Material
### STW-6

#### HTTP

https://github.com/SYTW/miriada-upm-dsnh5jsnode/#m%C3%B3dulo-iv-http

#### Transparencias de "HTTP" (Módulo IV) Archivo

https://campusvirtual.ull.es/1516/mod/resource/view.php?id=101216

#### Repositorio de Introducción a Express

https://github.com/SYTW/hello-express

### STW-7
#### Video tutorial "El proyecto Quiz y MVC"
https://campusvirtual.ull.es/1516/mod/url/view.php?id=105044

#### PDF document : "El Proyecto Quiz y MVC"
https://campusvirtual.ull.es/1516/pluginfile.php/161441/mod_resource/content/3/transp_modulo6.pdf

### Material STW-8

#### El proyecto Quiz y MVC URL
https://github.com/crguezl/miriada-upm-dsnh5jsnode#m%C3%B3dulo-vi-el-proyecto-quiz-y-mvc

#### Repositorio con el Proyecto Quiz. Generación, Favicon, Layouts, Controladores, Modelos URL
https://github.com/SYTW/basic-quiz

#### Repositorio con el Proyecto Quiz. Adaptativo con ORM Sequelize. Modelo simple URL
https://github.com/SYTW/quiz-sequelize

## Commands & Utilities
#### express generator instalation

    $ npm install express-generator

  For global installation use the -g option

    $ npm install express-generator -g

  For a specific version installation, in the previous case the latest version is installed.

    $ npm install express-generator@4.9.0

#### Express basic structure generation

    $ node_modules/express-generator/bin/express

  For global installation (-g)

    $ express --ejs quiz

#### install dependencies:

    $ cd quiz
    $ npm install

#### run the app:

    $ SET DEBUG=quiz:*
    $ npm start

## Layout & partial

### Install the package express-partials
#### For last version

   $ npm install --save express-partials

#### For this proyect version

    $ npm install --save express-partials@0.3.0

### Import/install MW	express-partials in app.js
#### add lines in app.js

 `var partials = require('express-partials');`

 `app.use(partials());`

### add	template layout (views/layout.ejs)
  `<header>`
  `<nav>`
  `<section> here set body changes for each view`
  `<footer>`

 - note : The view layout.ejs has common code as template, only the body code.
in <section > which will be changed for each view, the others views have only
their own code of body.

## Multiple questions
### No database
- The Model based on a JavaScript class. No database

#### Model
 - The directory models is added
 this dir is downloaded from this rep : https://github.com/SYTW/basic-quiz by Casiano Rodriguez-Leon crguezl.
  See the files  `quiz_model.js` y `abstract_quiz_model.js` in the Directory `models`
 - Model based on a JavaScript class. No database
#### Quiz controller
- Adapting the controller functions of `quiz_controller.js` exports.question and exports.answer that previously served only one question and its answer and now serves multiple questions stored in the data model `quiz_model.js`.

  See the file  `quiz_controller.js` in the Directory `controllers`

#### routes:

Also had to modify the route /quizes/answer to redirect it to `quizController.answer` function the controller `quiz_controller.js` for a specific answer to a specific question indicated by `/:index`.

  `router.get('/quizes/answer/:index',   quizController.answer);`

  See the file  `index.js` in the Directory `routes`

so we changed the action where to send the question

  `<form method="get" action="/quizes/answer/<%= index %>">`

  See the file  `question.ejs` in the Directory `views\quizes\`

## questions routes modification

First we will add a link in  `views\layout.ejs` to the list of questions that we will create.
`<span><a href="/quizes/questions">Lista de Preguntas</a></span>`

### route /quizes/questions
For add the route /quizes/questions for lists all the questions.
1. in the controller `controllers\quiz_controller.js`
we need to add a function `exports.questions` for render a list of question to the route `quizes/questions`

  `res.render('quizes/questions', {list: questions});`

2. Also had to add a new route in `routes\index.js` to the function `exports.questions`

  `router.get('/quizes/questions', quizController.questions);`

3. we had to create a function in `models\abstract_quiz_model.js` that returns the number of questions in a quiz.

  `AbstractQuiz.prototype.quizLength = function() {
    return this.q.length;
  }`

### link for question content.
to make in the list each statement of the question is a link that for question content.
1. We create a new view
`views\quizes\questions.ejs`
which assigns and shows list of questions exported `exports.questions` from the controller `controllers\quiz_controller.js`

`for(var i = 0; i < list.length; i++){
  <li> <a href="/quizes/questions/<%= i+1 %>"><%- list[i].pregunta %></a></li>
}`

### /quizes/questions/5 for showing the question number 5 .
Add routes (for example) /quizes/questions/5 for showing the question number 5 .
1. in the controller `controllers\quiz_controller.js`
we need to add a function `exports.questionId` for render a specific question to the route `quizes/questions/:index`

  `res.render('quizes/question', {pregunta: current.pregunta, index: index);`

2. Also had to add a new route in `routes\index.js` to the function `exports.questionId`

  `router.get('/quizes/questions/:index', quizController.questionId);`
## Responsive design
- so that the app is responsive, we have created 3 design perspectives en the directory `public/stylesheets`.
  `tablet.css`
  `wide.css`
  `smartphone.css`
- according to the device and the screen size a different style is used to adapt the design to the connected device.
- therefore we have changed new stylesheets links layout.ejs file

  `<link rel='stylesheet' type='text/css' href='/stylesheets/wide.css' />`
  `<link rel='stylesheet' type='text/css' media='only screen and (min-width: 600px) and (max-width: 1000px)' href='/stylesheets/tablet.css'>`
  `<link rel='stylesheet' type='text/css' media='only screen and (max-width: 600px)' href='/stylesheets/smartphone.css'>`

## Links :
* **[iaas Deployment](http://10.6.128.187:8084)**
* **[GitHub](https://github.com/alu4543/STW-8)**
* **[web de la asignatura](http://alu4543.github.io/)**
