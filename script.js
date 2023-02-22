const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');

const questions = [
  {
    question: "What is Spiderman's real name?",
    answers: {
      a: "Peter Parker",
      b: "Tony Stark",
      c: "Steve Rogers"
    },
    correctAnswer: "a"
  },
  {
    question: "What is the name of Spiderman's love interest?",
    answers: {
      a: "Mary Jane Watson",
      b: "Gwen Stacy",
      c: "Felicia Hardy"
    },
    correctAnswer: "a"
  },
  {
    question: "What is the name of Spiderman's arch-nemesis?",
    answers: {
      a: "Green Goblin",
      b: "Doctor Octopus",
      c: "Venom"
    },
    correctAnswer: "a"
  },
  {
    question: "Who is the creator of Spiderman?",
    answers: {
      a: "Stan Lee",
      b: "Jack Kirby",
      c: "Steve Ditko"
    },
    correctAnswer: "c"
  },
  {
    question: "What is the name of the villain who becomes the Green Goblin?",
    answers: {
      a: "Norman Osborn",
      b: "Harry Osborn",
      c: "Eddie Brock"
    },
    correctAnswer: "a"
  },
  {
    question: "What is the name of the newspaper where Peter Parker works?",
    answers: {
      a: "The Daily Bugle",
      b: "The Daily Planet",
      c: "The Daily News"
    },
    correctAnswer: "a"
  },
  {
    question: "What is the name of the symbiote that bonds with Peter Parker and becomes Venom?",
    answers: {
      a: "Carnage",
      b: "Riot",
      c: "Black Suit Spiderman"
    },
    correctAnswer: "c"
  },
  {
    question: "What is the name of the superhero team that Spiderman joins in the Marvel Comics universe?",
    answers: {
      a: "The X-Men",
      b: "The Avengers",
      c: "The Fantastic Four"
    },
    correctAnswer: "b"
  }  
];

function buildQuiz() {
  const output = [];

  questions.forEach((question, index) => {
    const answers = [];

    for (const letter in question.answers) {
      answers.push(
        `<label>
          <input type="radio" name="question${index}" value="${letter}">
          ${letter} : ${question.answers[letter]}
        </label>`
      );
    }

    output.push(
      `<div class="question">
        <p>${question.question}</p>
        <div class         ${answers.join('')}
        </div>`
      );
    });
  
    quizContainer.innerHTML = output.join('');
  }
  
  function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.question');
    let score = 0;
  
    questions.forEach((question, index) => {
      const answerContainer = answerContainers[index];
      const selector = `input[name=question${index}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
      if (userAnswer === question.correctAnswer) {
        score++;
        answerContainer.style.color = '#0f0';
      } else {
        answerContainer.style.color = '#f00';
      }
    });
  
    alert(`You scored ${score} out of ${questions.length}!`);
  }
  
  buildQuiz();
  
  submitButton.addEventListener('click', showResults);
  
