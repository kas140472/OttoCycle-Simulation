
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
      question: "Consider the heat capacity ratio γ to be 1.4. If the compression ratio of an air standard Otto cycle is 8, what is the efficiency?",
      answers: {
        a: "56",
        b: "48",
        c: "28",
        d: "32"
      },
      correctAnswer: "a"
    },
    {
      question: "The ratio of the actual thermal efficiency of a vehicle to its air standard efficiency is known as ________ efficiency.",
      answers: {
        a: "brake",
        b: "mechanical",
        c: "volumetric",
        d: "relative"
      },
      correctAnswer: "d"
    },
    {
      question: "If P1 = 5.39 kPa and the compression ratio is 3.1, what is P2 for an air standard Otto cycle?",
      answers: {
        a: "29.25 kPa",
        b: "35.73 kPa",
        c: "36.16 kPa",
        d: "38.54 kPa"
      },
      correctAnswer: "c"
    },
    {
      question: "If the compression ratio of the Otto cycle changes from 5 to 6, the percent change in the air standard efficiency is",
      answers: {
        a: "1%",
        b: "20%",
        c: "16.67%",
        d: "8%"
      },
      correctAnswer: "d"
    },
    {
      question: "In an SI engine, when the air-fuel mixture is ready to be ignited by the spark plug, the volume of the mixture is 4 m3/kg. What is the volume of the at the end of the combustion process?",
      answers: {
        a: "5.56 m3/kg",
        b: "4 m3/kg",
        c: "3.9 m3/kg",
        d: "6.62 m3/kg"
      },
      correctAnswer: "b"
    }
  ];




// ---------------------------- End -------------------------------








  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
