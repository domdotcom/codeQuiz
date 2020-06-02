// variables
const startQuizBtn = document.getElementById('quizStart')
const introTxt = document.getElementById('quizChallenge')
const timerElement = document.getElementById('timer')
const questionDiv = document.getElementById('questionAnswerContainer')
const questionElement = document.getElementById('question')
const answersElement = document.getElementById('answerBtns')


let randomQuestions, currentQuestion

startQuizBtn.addEventListener('click', startQuiz)


// functions needed...
// start the quiz qith Start quiz button
function startQuiz(){
  timerElement.classList.remove('hide')
  introTxt.classList.add('hide')
  questionDiv.classList.remove('hide')
  randomQuestions = questions.sort(() => Math.random() -0.5)
  currentQuestion = 0
  nxtQuestion()
 
}

function nxtQuestion(){
  resetState()
  showQuestion(randomQuestions[currentQuestion])
}

function showQuestion(question){
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
  const button = document.createElement('button')
  button.innerText = answer.text
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

function answerSelection() {

}



// quiz questions
const questions = [
  {
    question: "How would you display 'Hello World' in an alert?",
      answers: [
        {text: "msg('Hello World')", correct: false},
        {text: "alert('Hello World');", correct: true},
        {text: "alertBox('Hello World');", correct: false},
        {text: "send(Hello World)", correct: false}
      ]
  },
  {
    question: "Commonly used data types DO NOT include: ",
      answers: [
        {text: "booleans", correct: false},
        {text: "strings", correct: false},
        {text: "alerts", correct: true},
        {text: "numbers", correct: false}
      ]
    },
  {
    question: "Arrays in Javascript can be used to store the following: ",
      answers: [
        {text: "other arrays", correct: false},
        {text: "numbers and strings", correct: false},
        {text: "booleans", correct: false},
        {text: "all of the above", correct: true}
      ]
    },
  {
    question: "What will this output? var a = [1, 2, 3]; console.log(a[6]);",
      answers: [
        {text: "undefined", correct: true},
        {text: "6", correct: false},
        {text: "NaN", correct: false},
        {text: "syntax error", correct: false}
      ]
    },
  {
    question: "What is the condition in an if/else statment enclosed in?",
      answers: [
        {text: "square brackets", correct: false},
        {text: "single quotes", correct: false},
        {text: "nothing", correct: false},
        {text: "parenthesis", correct: true}
      ]
    },
  {
    question: "What does the following selector: $('div') select?",
      answers: [
        {text: "first div element", correct: false},
        {text: "all div elements", correct: true},
        {text: "last div element", correct: false},
        {text: "not a selector", correct: false}
      ]
    },
  {
    question: "Which is a useful tool during development and debugging for printing content to the debugger?",
      answers: [
        {text: "terminal.bash", correct: false},
        {text: "for loops", correct: false},
        {text: "Java", correct: false},
        {text: "console.log", correct: true}
      ]
    },
  {
    question: "Which for loop runs from 0 to 9?",
      answers: [
        {text: "for (i=0: i<10; i++)", correct: false},
        {text: "for (i<10; i = 0; i++)", correct: false},
        {text: "for (i = 0; i < 10; i++)", correct: true},
        {text: "for (i =0, i < 10, i+)", correct: false}
      ]
    },
  {
  question: "What is the proper syntax for calling a function?",
    answers: [
      {text: "myFunction();", correct: true},
      {text: "callMyFunction;", correct: false},
      {text: "function myFunction();", correct: false},
      {text: "myFunction;", correct: false}
    ]
  },
  {
    question: "Use the correct Array method to remove the last item of this array; fruits : ['mango', 'kiwi', 'apple', 'guava'].",
      answers: [
        {text: "remove(last);", correct: false},
        {text: "fruits[3-1];", correct: false},
        {text: "fruits.pop();", correct: true},
        {text: "fruits(pop)", correct: false}
      ]
    }
  ]

