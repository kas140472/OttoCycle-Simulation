
// Don't touch the below code

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");


// Don't touch the above code




// Write your MCQs here --- Start --- --------------------

const myQuestions = [
  {
    question: "The Otto cycle is employed for which type of engine?",
    answers: {
      a: "Spark ignition engine",
      b: "Compression ignition engine",
      c: "Both of the above"
    },
    correctAnswer: "a"
  },

  {
    question: "The correct sequence of processes for the Otto cycle is:",
    answers: {
      a: "Expansion - Combustion - Heat removal - Compression",
      b: "Compression - Heat removal - Expansion - Combustion",
      c: "Compression - Combustion - Expansion - Heat removal",
      d: "Combustion - Expansion - Heat removal - Compression"
    },
    correctAnswer: "c"
  },

  {
    question: "The Otto cycle consists of:",
    answers: {
      a: "Two isochores and two isothermal curves",
      b: "Two isobars and two isothermal curves",
      c: "Two isochores and two reversible adiabatic curves",
      d: "Two isobars and two reversible adiabatic curves"
    },
    correctAnswer: "c"
  },
  {
    question: "The pressure is maximum at the end of which process:",
    answers: {
      a: "Isentropic compression",
      b: "Constant volume combustion",
      c: "Isentropic expansion",
      d: "Constant volume heat removal"
    },
    correctAnswer: "b"
  },
  {
    question: "The efficiency of an Otto cycle can be increased by:",
    answers: {
      a: "Increasing the compression ratio",
      b: "Decreasing the compression ratio",
      c: "Increasing the temperature",
      d: "Decreasing the temperature"
    },
    correctAnswer: "a"
  }
];





// ---------------------------- End -------------------------------








  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
