// variables
const startQuizBtn = document.getElementById('quizStart')
const introTxt = document.getElementById('quizChallenge')
const timerElement = document.getElementById('timer')
const questionElement = document.getElementById('question-container')

startQuizBtn.addEventListener('click', startQuiz)


// functions needed
function startQuiz(){
  // console.log('Started');
  startQuizBtn.classList.add('hide')
  introTxt.classList.add('hide')
  timerElement.classList.remove('hide')
  questionElement.classList.remove('hide')


}

function nxtQuestion(){

}

function answerSelection(){

}



// quiz questions
const myQuestions = 
    [{
      question: "How would you display 'Hello World' in an alert??",
      answers: {
        a: "msg('Hello World')",
        b: "alert('Hello World');",
        c: "alertBox('Hello World');",
        d: "send(Hello World)"
      },
      correctAnswer: "b"
    },
    {
      question: "Commonly used data types DO NOT include: ",
      answers: {
        a: "booleans",
        b: "alerts",
        c: "numbers",
        d: "strings"
      },
      correctAnswer: "b"
    },
    {
      question: "Arrays in Javascript can be used to store the following: ",
      answers: {
        a: "other arrays",
        b: "booleans",
        c: "numbers and strings",
        d: "all of the above"
      },
      correctAnswer: "d"
    },
    {
        question: "What will this output? var a = [1, 2, 3]; console.log(a[6]);",
        answers: {
            a: "undefined",
            b: "NaN",
            c: "void",
            d: "6"
    },
        correctAnswer: "a"
    },
    {
        question: "What is the condition in an if/else statment enclosed in?",
        answers: {
          a: "quotes",
          b: "nothing",
          c: "parenthesis",
          d: "square brackets"
        },
        correctAnswer: "c"
    },
    {
        question: "What does the following selector: $('div') select?",
        answers: {
          a: "the first div element",
          b: "the last div element",
          c: "all div elements'",
          d: "its not a selector"
        },
        correctAnswer: "c"
    },
    {
        question: "Which is a useful tool during development and debugging for printing content to the debugger?",
        answers: {
          a: "Javascript",
          b: "for loops",
          c: "terminal/bash",
          d: "console.log"
        },
        correctAnswer: "d"
    },
    {
        question: "Which for loop runs from 0 to 9?",
        answers: {
          a: "for (i=0: i<10; i++)",
          b: "for (i<10; i = 0; i++)",
          c: "for (i = 0; i < 10; i++)",
          d: "for (i =0, i < 10, i+) "
        },
        correctAnswer: "c"
    },
    {
        question: "What is the proper syntax for calling a function?",
        answers: {
          a: "myFunction();",
          b: "callMyFunction;",
          c: "function myFunction();",
          d: "myFunction;"
        },
        correctAnswer: "a"
    },
    {
        question: "Use the correct Array method to remove the last item of this array; fruits : ['mango', 'kiwi', 'apple', 'guava'].",
        answers: {
          a: "remove(last);",
          b: "fruits[3-1];",
          c: "fruits.pop();",
          d: "fruits(pop);"
        },
        correctAnswer: "c"
    }
  ];






