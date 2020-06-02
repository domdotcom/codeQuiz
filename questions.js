const questions = [
  {
    question: "How would you display 'Hello World' in an alert?",
    answers: [
      {text: "msg('Hello World')" , correct: false},
      {text:  "alert('Hello World');", correct: true },
      {text: "alertBox('Hello World');", correct: false},
      {text: "send(Hello World)", correct: false }
    ]
  },
  {
    question: "Commonly used data types DO NOT include: ",
    answers: [
      { text: 'booleans', correct: false },
      { text: 'strings', correct: false},
      { text: 'alerts', correct: true },
      { text: 'numbers', correct: false }
    ]
  },
  {
    question: "Arrays in Javascript can be used to store the following: ",
    answers: [
      { text: "booleans", correct: false },
      { text: "strings and numbers", correct: false },
      { text: "other arrays", correct: false },
      { text: "all of these", correct: true }
    ]
  },
  {
    question: "What will this output? var a = [1, 2, 3]; console.log(a[6]);",
    answers: [
      { text: "undefined", correct: true },
      { text: "syntax error", correct: false },
      { text: "6", correct: false },
      { text: "NaN", correct: false }
    ]
  },
  {
    question: "What is the condition in an if/else statment enclosed in?",
    answers: [
      { text: 'square brackets', correct: false },
      { text: "single quotes", correct: false },
      { text: "nothing", correct: false },
      { text: "parenthesis", correct: true }
    ]
  },
  {
    question: "What does the following selector: $('div') select?",
    answers: [
      { text: "the first div", correct: false },
      { text: "all divs", correct: true },
      { text: "the last div", correct: false },
      { text: "this is not a selector", correct: false }
    ]
  },
  {
    question: "Which is a useful tool during development and debugging for printing content to the debugger?",
    answers: [
      { text: "loops", correct: false },
      { text: "terminal/bash", correct: false },
      { text: "Javascript", correct: false },
      { text: "console.log", correct: true }
    ]
  },
  {
    question: "Which for loop runs from 0 to 9?",
    answers: [
      { text: "for (i=0: i<10; i++)", correct: false },
      { text: "for (i<10; i = 0; i++)", correct: false },
      { text: "for (i = 0; i < 10; i++)", correct: true },
      { text: "for (i =0, i < 10, i+)", correct: false }
    ]
  },
  {
    question:  "What is the proper syntax for calling a function?",
    answers: [
      { text: "myFunction();", correct: true },
      { text: "callMyFunction;", correct: false },
      { text: "function myFunction();", correct: false },
      { text: "myFunction;", correct: false }
    ]
  },
  {
    question: "Use the correct Array method to remove the last item of this array; fruits : ['mango', 'kiwi', 'apple', 'guava'].",
    answers: [
      { option: "remove(last);", correct: false },
      { option: "fruits[3-1];", correct: false },
      { option: "fruits.pop();", correct: true },
      { option: "fruits(pop)", correct: false }
    ]
  }
]