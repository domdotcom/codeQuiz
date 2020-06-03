// variables
var startQuizBtn = document.getElementById('quizStart')
var introTxt = document.getElementById('quizChallenge')
var timerElement = document.getElementById('timer')
var questionDiv = document.getElementById('questionAnswerContainer')
var questionElement = document.getElementById('question')
var answersElement = document.getElementById('answerBtns')
var resultCorrect = document.getElementById('correct')
var resultWrong = document.getElementById('wrong')
var scoreEl = document.getElementById('score')
var finalScore = document.getElementById('finalScore')


var randomQuestions, currentQuestion
var gameover 
var score = 0
var sec = 60;


startQuizBtn.addEventListener('click', startQuiz)


// functions needed...
// start the quiz qith Start quiz button



// timer function

// game over, do I even need this??
function gameOver(){
  gameover = true;


}
// starquiz function, quiz starts at click
function startQuiz(){
  var time = setInterval(myTimer, 1000);
  function myTimer() {
    console.log('timer working')
      document.getElementById('timer').innerHTML = "Timer: " + sec ;
      sec--;
      if (sec == -1) {
          clearInterval(time);
          
      }
  }
  timerElement.classList.remove('hide')
  introTxt.classList.add('hide')
  questionDiv.classList.remove('hide')
  randomQuestions = questions.sort(() => Math.random() -0.5)
  currentQuestion = 0
  nxtQuestion()
}
// move to next question
function nxtQuestion(){
  resetState()
  showQuestion(randomQuestions[currentQuestion])
}
function showQuestion(question){
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
  var button = document.createElement('button')
  button.innerText = answer.choice
  button.classList.add('btn')
  button.className = 'btn-dark'
  if (answer.correct) {
    button.dataset.correct = answer.correct
  }
  button.addEventListener('click', answerSelection)
  answersElement.appendChild(button)
}) 
}
function resetState() {
  while (answersElement.firstChild) {
    answersElement.removeChild(answersElement.firstChild)
  }
}
function answerSelection(event) {
  console.log("selected");
  if (event.currentTarget.getAttribute('data-correct') === 'true'){
    resultCorrect.classList.remove('hide');
    score++;
  }
  else {
    resultWrong.classList.remove('hide');
    sec = sec - 10;
  }
    setTimeout(nxtQuestion, 1000);
}
function finalScore() {
  gameover = true;
  questionDiv.classList.add('hide')
  finalscoreDisplay.classList.remove('hide')
  scoreEl.textContent = score;
}




// quiz questions
var questions = [
  {
    question: "Which is NOT a main grape of Champagne?",
    answers:
    [
      {choice: "Pinot Noir", correct: false},
      {choice: "Chardonnay", correct: false},
      {choice: "Meunier", correct: false},
      {choice: "Sauvignon Blanc", correct: true}
    ]
  },
  {
    question: "Which region is the village of Cramant located? ",
      answers: [
        {choice: "The Aube", correct: false},
        {choice: "Coteaux sud d'Epernay", correct: false},
        {choice: "Cote de Blancs", correct: true},
        {choice: "Bordeaux", correct: false}
      ]
    },
  {
    question: "How many months must vintage champagne be aged before release? ",
      answers: [
        {choice: "9", correct: false},
        {choice: "12", correct: false},
        {choice: "64", correct: false},
        {choice: "36", correct: true}
      ]
    },
  {
    question: "What is the tete de cuvee of Billecart-Salmon?",
      answers: [
        {choice: "Cristal", correct: false},
        {choice: "Clos de Goisses", correct: false},
        {choice: "Cuvee Nicolas Francois", correct: true},
        {choice: "Le Grand Annee", correct: false}
      ]
    },
  {
    question: "Which of these historical figures has a champgane named after them?",
      answers: [
        {choice: "Joan of Arc", correct: false},
        {choice: "Marie Antoinette", correct: false},
        {choice: "Sir Winston Churchill", correct: true},
        {choice: "Mata Hari", correct: false}
      ]
    },
  {
    question: "A champagne producer who grows their own grapes and makes their own wine from those grapes is known as what?",
      answers: [
        {choice: "winemaker", correct: false},
        {choice: "grower producer", correct: true},
        {choice: "french", correct: false},
        {choice: "a farmer", correct: false}
      ]
    },
  {
    question: "Who is credited with inventing the process of riddling?",
      answers: [
        {choice: "Dom Perignon", correct: false},
        {choice: "Louis XIV", correct: false},
        {choice: "Sir Winston Churchill", correct: false},
        {choice: "Madame Cliquot", correct: true}
      ]
    },
  {
    question: "A blanc de noir is chamapgne made from what grapes?",
      answers: [
        {choice: "white grapes", correct: false},
        {choice: "white and red grapes", correct: false},
        {choice: "red grapes", correct: true},
        {choice: "very ripe grapes", correct: false}
      ]
    },
  {
  question: "What is a brut nature champagne?",
    answers: [
      {choice: "champagne with less than 3g/L of sugar", correct: true},
      {choice: "champagne with more than 3 g/L of sugar", correct: false},
      {choice: "all natural champagne", correct: false},
      {choice: "champagne that has gone bad", correct: false}
    ]
  },
  {
    question: "The cote de blanc is knwon for what type of soils?",
      answers: [
        {choice: "dry soils", correct: false},
        {choice: "irrigated soils", correct: false},
        {choice: "chalky soils", correct: true},
        {choice: "clay soils", correct: false}
      ]
    }
  ]

