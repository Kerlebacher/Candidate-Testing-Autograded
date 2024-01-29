const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";


//TODO: Variables for Part 2
let questions = ["Who was the first American woman in space? " ,
"True or false: 5 kilometer == 5000 meters? " ,"(5 + 3)/2 * 10 = ? ",
"Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
"What is the minimum crew size for the ISS? " ];
let correctAnswers = ["Sally Ride",
 "true",
  "40",
   "Trajectory",
    "3"];
let candidateAnswers = [];


function askForName() {
  candidateName = input.question("Enter your name: ");
}

function askQuestion() {
  // TODO 1.2b: Replace your code from TODO 1.2b with a loop that programmatically asks each question in the array and stores the user’s responses. //
for (let i = 0; i < questions.length; i++) {
  candidateAnswers.push(input.question(questions[i]));
}
}

function gradeQuiz(candidateAnswers) {

  let score = 0;
 for (i= 0; i < 5; i++){
  if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
     score = score+1; 
    console.log(`${i+1}) ${candidateAnswers[i]} is Correct!`);
    } else {
    console.log(`${i+1}) ${candidateAnswers[i]} is Incorrect.`);
    console.log(`The correct answer is: ${correctAnswers[i]}`);
  }
}
let grade = score/5*100; 
if (grade > 70) {
  console.log (`You have passed with a(n) ${grade}%`);
} else {
  console.log (`You have failed with a(n) ${grade}%`);
}
  return grade;
  
}


function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log("Hello,", candidateName + "!");
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};