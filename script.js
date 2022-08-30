const quizData = [{
     question: "What is the most used programming language in 2019?",
     a: "Java",
     b: "C",
     c: "Python",
     d: "JavaScript",
     correct: "d",
}, {
     question: "Who is the President of US?",
     a: "Florin Pop",
     b: "Donald Trump",
     c: "Ivan Saldano",
     d: "Joe Biden",
     correct: "d",
}, {
     question: "What does HTML stand for?",
     a: "Hypertext Markup Language",
     b: "Cascading Style Sheet",
     c: "Jason Object Notation",
     d: "Helicopters Terminals Motorboats Lamborginis",
     correct: "a",
}, {
     question: "What year was JavaScript launched?",
     a: "1996",
     b: "1995",
     c: "1994",
     d: "none of the above",
     correct: "b",
}, {
     question: "What was the first programming language in the World?",
     a: "c",
     b: "FORTRAN",
     c: "Java",
     d: "Python",
     correct: "b",
}, {
     question: "What was the first programming language in India?",
     a: "Pyhton",
     b: "Javascript",
     c: "Kojo",
     d: "C",
     correct: "c",
}, {
     question: "Who is making the Web standards?",
     a: "The World Wide Web Consortium",
     b: "Google",
     c: "Microsoft",
     d: "Mozilla",
     correct: "a",
}, {
     question: "Approximately how much did the first cell phone cost?",
     a: "$4,000",
     b: "$8,000",
     c: "$100",
     d: "$1,000",
     correct: "a",
}, {
     question: "What was the name of the first engine-powered airplane to take flight?",
     a: "The Canary",
     b: "Wright Flyer I",
     c: "Spirit of St.Louis",
     d: "Double Eagle II",
     correct: "b",
}, {
     question: "What year was the first email sent?",
     a: "2005",
     b: "1982",
     c: "1971",
     d: "1955",
     correct: "c",
}];
 
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

const status = document.getElementById("test");

const submitBtn = document.getElementById("submit");
const nextBtn = document.getElementById("Next");
const radio1 = document.getElementById("a");
const radio2 = document.getElementById("b");
const radio3 = document.getElementById("c");
const radio4 = document.getElementById("d");
let currentQuiz = 0;

let score = 0;
 
loadQuiz();
nextBtn.disabled= true
function loadQuiz() 
{
     deselecteAnswers();
     const currentQuizData = quizData[currentQuiz];
 
     questionEl.innerText = currentQuizData.question;

     a_text.innerText = currentQuizData.a;
     b_text.innerText = currentQuizData.b;
     c_text.innerText = currentQuizData.c;
     d_text.innerText = currentQuizData.d;
}
 
function getSelected() 
{
     let answer = undefined;
     answerEls.forEach((answerEl) => {
          if (answerEl.checked) 
          {
             answer = answerEl.id;
          }
     });
     return answer;
}
 
function deselecteAnswers() {
     answerEls.forEach((answerEl) => {
         answerEl.checked = false;
     });
}
 
submitBtn.addEventListener("click", () => {
     // check to see the answer
     const answer = getSelected();
     if (answer) 
     {
          if (answer === quizData[currentQuiz].correct) 
          {
               score++;
               status.innerHTML = "You answered correctly."
               radio1.disabled = true;
               radio2.disabled = true;
               radio3.disabled = true;
               radio4.disabled = true;
          }
          else 
          {
               status.innerHTML = "You answered Wrong."
               radio1.disabled = true;
               radio2.disabled = true;
               radio3.disabled = true;
               radio4.disabled = true;
          }
          nextBtn.disabled = false
     }
});
   
nextBtn.addEventListener("click", () => {
     const answer = getSelected();
     status.innerHTML =" "
     currentQuiz++;
     radio1.disabled = false;
     radio2.disabled = false;
     radio3.disabled = false;
     radio4.disabled = false;
     nextBtn.disabled = true;
     if (currentQuiz < quizData.length) 
     {
          loadQuiz();
     } 
     else 
     {
          if (score == 10)
          {
               quiz.innerHTML = '<h2>You answered all 10 questions correctly.</h2><center><button onclick="location.reload();">Reload</button></center>';
          }
          else
          {
               quiz.innerHTML = '<h2>You only answered ' + score + '/' + quizData.length + ' questions correctly.</h2><center><button onclick="location.reload();">Reload</button></center>';
          }
          
     }
});

/**
 * 
 */