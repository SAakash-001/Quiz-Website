const questions =[
  {
    question: "What is the capital of France?",
    answers: [
      { text: "Paris", correct: true },
      { text: "Berlin", correct: false },
      { text: "London", correct: false },
      { text: "Rome", correct: false }
    ],
     selected: null
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    answers: [
      { text: "Harper Lee", correct: true },
      { text: "F. Scott Fitzgerald", correct: false },
      { text: "J.K. Rowling", correct: false },
      { text: "Stephen King", correct: false }
    ],
     selected: null
  },
  {
    question: "What is the chemical symbol for water?",
    answers: [
      { text: "H2O", correct: true },
      { text: "CO2", correct: false },
      { text: "NaCl", correct: false },
      { text: "O2", correct: false }
    ],
     selected: null
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Venus", correct: false },
      { text: "Mercury", correct: false }
    ],
     selected: null
  },
  {
    question: "Who painted the Mona Lisa?",
    answers: [
      { text: "Leonardo da Vinci", correct: true },
      { text: "Pablo Picasso", correct: false },
      { text: "Vincent van Gogh", correct: false },
      { text: "Michelangelo", correct: false }
    ],
     selected: null
  },
  {
    question: "What is the boiling point of water in Celsius?",
    answers: [
      { text: "100°C", correct: true },
      { text: "0°C", correct: false },
      { text: "-100°C", correct: false },
      { text: "50°C", correct: false }
    ],
     selected: null
  },
  {
    question: "Who discovered penicillin?",
    answers: [
      { text: "Alexander Fleming", correct: true },
      { text: "Marie Curie", correct: false },
      { text: "Albert Einstein", correct: false },
      { text: "Isaac Newton", correct: false }
    ],
     selected: null
  },
  {
    question: "What is the chemical symbol for gold?",
    answers: [
      { text: "Au", correct: true },
      { text: "Ag", correct: false },
      { text: "Fe", correct: false },
      { text: "Pb", correct: false }
    ],
     selected: null
  },
  {
    question: "Who wrote '1984'?",
    answers: [
      { text: "George Orwell", correct: true },
      { text: "J.R.R. Tolkien", correct: false },
      { text: "Charles Dickens", correct: false },
      { text: "Jane Austen", correct: false }
    ],
     selected: null
  },
  {
    question: "Which country is famous for its tulips?",
    answers: [
      { text: "Netherlands", correct: true },
      { text: "Italy", correct: false },
      { text: "Japan", correct: false },
      { text: "Australia", correct: false }
    ],
     selected: null
  },
  {
    question: "What is the largest mammal in the world?",
    answers: [
      { text: "Blue whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
      { text: "Hippopotamus", correct: false }
    ],
     selected: null
  },
  {
    question: "Who composed the 'Moonlight Sonata'?",
    answers: [
      { text: "Ludwig van Beethoven", correct: true },
      { text: "Johann Sebastian Bach", correct: false },
      { text: "Wolfgang Amadeus Mozart", correct: false },
      { text: "Frédéric Chopin", correct: false }
    ],
     selected: null
  },
  {
    question: "What is the tallest mountain in the world?",
    answers: [
      { text: "Mount Everest", correct: true },
      { text: "K2", correct: false },
      { text: "Kangchenjunga", correct: false },
      { text: "Lhotse", correct: false }
    ],
     selected: null
  },
  {
    question: "What is the currency of Japan?",
    answers: [
      { text: "Yen", correct: true },
      { text: "Euro", correct: false },
      { text: "Dollar", correct: false },
      { text: "Pound", correct: false }
    ],
     selected: null
  },
  {
    question: "Who invented the telephone?",
    answers: [
      { text: "Alexander Graham Bell", correct: true },
      { text: "Thomas Edison", correct: false },
      { text: "Nikola Tesla", correct: false },
      { text: "Guglielmo Marconi", correct: false }
    ],
     selected: null
  },
  {
    question: "What is the chemical symbol for oxygen?",
    answers: [
      { text: "O", correct: true },
      { text: "O2", correct: false },
      { text: "Oh", correct: false },
      { text: "Om", correct: false }
    ],
     selected: null
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    answers: [
      { text: "William Shakespeare", correct: true },
      { text: "Jane Austen", correct: false },
      { text: "Mark Twain", correct: false },
      { text: "Emily Brontë", correct: false }
    ],
     selected: null
  },
  {
    question: "What is the smallest country in the world?",
    answers: [
      { text: "Vatican City", correct: true },
      { text: "Monaco", correct: false },
      { text: "Maldives", correct: false },
      { text: "San Marino", correct: false }
    ],
     selected: null
  },
  {
    question: "Who discovered electricity?",
    answers: [
      { text: "Benjamin Franklin", correct: true },
      { text: "Thomas Edison", correct: false },
      { text: "Isaac Newton", correct: false },
      { text: "Michael Faraday", correct: false }
    ],
     selected: null
  },
  {
    question: "Which planet is known as the 'Morning Star'?",
    answers: [
      { text: "Venus", correct: true },
      { text: "Mars", correct: false },
      { text: "Mercury", correct: false },
      { text: "Jupiter", correct: false }
    ],
     selected: null
  },
  {
    question: "Who painted the Sistine Chapel ceiling?",
    answers: [
      { text: "Michelangelo", correct: true },
      { text: "Leonardo da Vinci", correct: false },
      { text: "Raphael", correct: false },
      { text: "Donatello", correct: false }
    ],
     selected: null
  },
  {
    question: "What is the main component of air?",
    answers: [
      { text: "Nitrogen", correct: true },
      { text: "Oxygen", correct: false },
      { text: "Carbon dioxide", correct: false },
      { text: "Hydrogen", correct: false }
    ],
     selected: null
  },
  {
    question: "Who discovered gravity?",
    answers: [
      { text: "Isaac Newton", correct: true },
      { text: "Albert Einstein", correct: false },
      { text: "Galileo Galilei", correct: false },
      { text: "Johannes Kepler", correct: false }
    ],
     selected: null
  },
  {
    question: "What is the capital of Australia?",
    answers: [
      { text: "Canberra", correct: true },
      { text: "Sydney", correct: false },
      { text: "Melbourne", correct: false },
      { text: "Perth", correct: false }
    ],
     selected: null
  },
  {
    question: "Who wrote 'Pride and Prejudice'?",
    answers: [
      { text: "Jane Austen", correct: true },
      { text: "Emily Brontë", correct: false },
      { text: "Charlotte Brontë", correct: false },
      { text: "Louisa May Alcott", correct: false }
    ],
     selected: null
  },
  {
    question: "What is the chemical symbol for carbon?",
    answers: [
      { text: "C", correct: true },
      { text: "Ca", correct: false },
      { text: "Co", correct: false },
      { text: "Cr", correct: false }
    ],
     selected: null
  },
  {
    question: "Who wrote 'The Great Gatsby'?",
    answers: [
      { text: "F. Scott Fitzgerald", correct: true },
      { text: "Ernest Hemingway", correct: false },
      { text: "John Steinbeck", correct: false },
      { text: "T.S. Eliot", correct: false }
    ],
     selected: null
  },
  {
    question: "What is the chemical symbol for sodium?",
    answers: [
      { text: "Na", correct: true },
      { text: "Ni", correct: false },
      { text: "Nb", correct: false },
      { text: "Sn", correct: false }
    ],
     selected: null
  },
  {
    question: "Who painted 'Starry Night'?",
    answers: [
      { text: "Vincent van Gogh", correct: true },
      { text: "Pablo Picasso", correct: false },
      { text: "Claude Monet", correct: false },
      { text: "Salvador Dalí", correct: false }
    ],
     selected: null
  },
  {
    question: "What is the chemical symbol for iron?",
    answers: [
      { text: "Fe", correct: true },
      { text: "Fr", correct: false },
      { text: "Ir", correct: false },
      { text: "In", correct: false }
    ],
     selected: null
  },
  {
    question: "Who wrote 'The Catcher in the Rye'?",
    answers: [
      { text: "J.D. Salinger", correct: true },
      { text: "F. Scott Fitzgerald", correct: false },
      { text: "Ernest Hemingway", correct: false },
      { text: "Mark Twain", correct: false }
    ],
     selected: null
  },
  {
    question: "What is the chemical symbol for silver?",
    answers: [
      { text: "Ag", correct: true },
      { text: "Au", correct: false },
      { text: "Pt", correct: false },
      { text: "Hg", correct: false }
    ],
     selected: null
  },
  {
    question: "Who wrote 'The Odyssey'?",
    answers: [
      { text: "Homer", correct: true },
      { text: "Virgil", correct: false },
      { text: "Socrates", correct: false },
      { text: "Plato", correct: false }
    ],
     selected: null
  },
  {
    question: "What is the chemical symbol for calcium?",
    answers: [
      { text: "Ca", correct: true },
      { text: "Ce", correct: false },
      { text: "Co", correct: false },
      { text: "Cf", correct: false }
    ],
     selected: null
  },
  {
    question: "Who wrote 'Hamlet'?",
    answers: [
      { text: "William Shakespeare", correct: true },
      { text: "John Milton", correct: false },
      { text: "Homer", correct: false },
      { text: "Dante Alighieri", correct: false }
    ],
     selected: null
  },
  {
    question: "What is the chemical symbol for potassium?",
    answers: [
      { text: "K", correct: true },
      { text: "P", correct: false },
      { text: "Po", correct: false },
      { text: "Pt", correct: false }
    ],
     selected: null
  },
  {
    question: "Who painted 'The Last Supper'?",
    answers: [
      { text: "Leonardo da Vinci", correct: true },
      { text: "Michelangelo", correct: false },
      { text: "Raphael", correct: false },
      { text: "Donatello", correct: false }
    ],
     selected: null
  },
  {
    question: "What is the chemical symbol for lead?",
    answers: [
      { text: "Pb", correct: true },
      { text: "Ld", correct: false },
      { text: "P", correct: false },
      { text: "L", correct: false }
    ],
     selected: null
  },
  {
    question: "Who wrote 'The Iliad'?",
    answers: [
      { text: "Homer", correct: true },
      { text: "Virgil", correct: false },
      { text: "Aristotle", correct: false },
      { text: "Socrates", correct: false }
    ],
     selected: null
  },
  {
    question: "What is the chemical symbol for mercury?",
    answers: [
      { text: "Hg", correct: true },
      { text: "Me", correct: false },
      { text: "Mr", correct: false },
      { text: "Mg", correct: false }
    ],
     selected: null
  },
  {
    question: "Who wrote 'Moby-Dick'?",
    answers: [
      { text: "Herman Melville", correct: true },
      { text: "Mark Twain", correct: false },
      { text: "Nathaniel Hawthorne", correct: false },
      { text: "Emily Dickinson", correct: false }
    ],
     selected: null
  },
  {
    question: "What is the chemical symbol for tin?",
    answers: [
      { text: "Sn", correct: true },
      { text: "Ti", correct: false },
      { text: "Tn", correct: false },
      { text: "Tm", correct: false }
    ],
     selected: null
  },
  {
    question: "Who wrote 'The Canterbury Tales'?",
    answers: [
      { text: "Geoffrey Chaucer", correct: true },
      { text: "John Milton", correct: false },
      { text: "William Wordsworth", correct: false },
      { text: "William Shakespeare", correct: false }
    ],
     selected: null
  },
  {
    question: "What is the chemical symbol for uranium?",
    answers: [
      { text: "U", correct: true },
      { text: "Un", correct: false },
      { text: "Ur", correct: false },
      { text: "Um", correct: false }
    ],
     selected: null
  },
  {
    question: "Who wrote 'War and Peace'?",
    answers: [
      { text: "Leo Tolstoy", correct: true },
      { text: "Fyodor Dostoevsky", correct: false },
      { text: "Anton Chekhov", correct: false },
      { text: "Ivan Turgenev", correct: false }
    ],
     selected: null
  },
  {
    question: "What is the chemical symbol for helium?",
    answers: [
      { text: "He", correct: true },
      { text: "H", correct: false },
      { text: "Hl", correct: false },
      { text: "Hu", correct: false }
    ],
     selected: null
  },
  {
    question: "Who wrote 'The Divine Comedy'?",
    answers: [
      { text: "Dante Alighieri", correct: true },
      { text: "Virgil", correct: false },
      { text: "Petrarch", correct: false },
      { text: "Boccaccio", correct: false }
    ],
     selected: null
  }
];



const timerElement = document.getElementById("timer");
const timeDisplay = document.getElementById("time");
let timeLeft = 300; // 5 minutes in seconds

function startTimer() {
  const timerInterval = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      timeDisplay.textContent = "00:00";
      showScore(); // Call your function to end the quiz when time runs out
    } else {
      const minutes = Math.floor(timeLeft / 60);
      let seconds = timeLeft % 60;
      seconds = seconds < 3 ? "0" + seconds : seconds;
      timeDisplay.textContent = `${minutes}:${seconds}`;
      timeLeft--;
    }
  }, 1000);
}

startTimer();


const questionElement = document.getElementById("question");
const nextButton = document.getElementById("next_btn");
const prevButton = document.getElementById("prev_btn");

let score = 0;
let questionsPerPage = 5;
let totalQuestions = Math.min(questions.length, 5); // Limit total questions to 20
let totalPages = Math.ceil(totalQuestions / questionsPerPage);
let currentPage = 1;

// Function to shuffle questions array
function shuffleQuestions(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Shuffle questions
shuffleQuestions(questions);

// Function to generate a random set of questions for the current page
function generatePageQuestions() {
  const startIndex = (currentPage - 1) * questionsPerPage;
  const endIndex = Math.min(startIndex + questionsPerPage, totalQuestions);
  return questions.slice(startIndex, endIndex);
}

// Function to start quiz
function startQuiz() {
  showQuestion();
}

// Function to show questions for the current page
function showQuestion() {
  resetState();
  const pageQuestions = generatePageQuestions();

  pageQuestions.forEach((currentQuestion, index) => {
    const questionIndex = (currentPage - 1) * questionsPerPage + index;
    let questionText = `${questionIndex + 1}. ${currentQuestion.question}`;

    let questionDiv = document.createElement("div");
    questionDiv.classList.add("question");
    questionDiv.textContent = questionText;
    questionElement.appendChild(questionDiv);

    currentQuestion.answers.forEach((answer, ansIndex) => {
      const button = document.createElement("button");
      button.textContent = answer.text;
      button.classList.add("btn");

      // Check if this answer was previously selected
      if (currentQuestion.selected === ansIndex) {
        button.classList.add("selected");
      }

      button.addEventListener("click", () => selectAnswer(currentQuestion, ansIndex));
      questionDiv.appendChild(button);
    });
  });

  checkAllAnswered();
}

// Function to reset the question area
function resetState() {
  while (questionElement.firstChild) {
    questionElement.removeChild(questionElement.firstChild);
  }
}

// Function to handle answer selection and toggle class
function selectAnswer(question, ansIndex) {
  question.selected = ansIndex;
  showQuestion();
}

// Function to check if all questions on the current page are answered
function checkAllAnswered() {
  const pageQuestions = generatePageQuestions();
  const allAnswered = pageQuestions.every((question) => question.selected !== null);
  
  if (allAnswered && currentPage < totalPages) {
    nextButton.style.display = "block";
    nextButton.textContent = "Next";
  } else if (allAnswered && currentPage === totalPages) {
    nextButton.style.display = "block";
    nextButton.textContent = "Finish";
  } else {
    nextButton.style.display = "none";
  }

  // Show "Previous" button except on the first page
  if (currentPage > 1) {
    prevButton.style.display = "block";
  } else {
    prevButton.style.display = "none";
  }
}

// Function to handle next button click
function handleNextButton() {
  currentPage++;
  showQuestion();
  scrollToTop();
}

// Function to handle previous button click
function handlePrevButton() {
  currentPage--;
  showQuestion();
  scrollToTop();
}

// Function to scroll to the top of the page
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// Function to show final score
function showScore() {
  resetState();
  questions.forEach((question, index) => {
    const selectedAnswer = question.selected;
    const correctAnswer = question.answers.findIndex((answer) => answer.correct);

    if (selectedAnswer === correctAnswer) {
      score++;
    }
  });

  questionElement.innerHTML = `You scored ${score} out of ${totalQuestions}!`;
  nextButton.style.display = "none";
  prevButton.style.display = "none";
}

nextButton.addEventListener("click", () => {
  if (currentPage < totalPages) {
    handleNextButton();
  } else {
    showScore();
  }
});

prevButton.addEventListener("click", () => {
  if (currentPage > 1) {
    handlePrevButton();
  }
});

startQuiz();

