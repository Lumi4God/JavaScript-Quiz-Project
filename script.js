const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})
 
 function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .105)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}
function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'What does HTML stand for?',
    answers: [
      { text: 'Hyper Text Markup language', correct: true },
      { text: 'Hyper Text Multiple Language', correct: false }
    ]
  },
  {
    question: 'What does CSS?',
    answers: [
      { text: 'Cascading Style Sheet', correct: true },
      { text: 'computer Style Sheet', correct: false },
      { text: 'Colorful Style sheet', correct: false },
      { text: 'Cascading Show Sheet', correct: false }
    ]
  },
  {
    question: 'The increment operator will...',
    answers: [
      { text: 'Increase th value of the variable by 10', correct: false },
      { text: 'Increase the value of the variable by 1', correct: true },
      { text: 'Increase the value of the variable by 5', correct: false },
      { text: 'Create a new variable', correct: false }
    ]
  },
  {
    question: 'How do you access the first letter of a String?',
    answers: [
      { text: 'Variablename[1]', correct: false },
      { text: 'Variablename(0)', correct: false },
      { text: 'Variablename[first]', correct: false},
      { text: 'Variablename[0]', correct: true}
    ]
  },
  {
    question: 'Which one of these is NOT a JavaScript VARIABLE type?',
    answers: [
      { text: 'const', correct: false },
      { text: 'let', correct: false },
      { text: 'var', correct: false},
      { text: 'string', correct: true}
    ]
  },
  {
    question: "Angela Merkel became Germany's chancellor in which year?",
    answers: [
      { text: "22. November 2005", correct: true },
      { text: "14. November 2004", correct: false },
      { text: "22. November 2004", correct: false },
      { text: "14. November 2005", correct: false }
    ]
  },
  {
    question: "Angela Merkel was Germany's chancellor up until which year?",
    answers: [
      { text: "8. December 2020", correct: false },
      { text: "08. February 2022", correct: false },
      { text: "08. January 2022", correct: false },
      { text: "8. December 2021", correct: true }
    ]
  },
  {
    question: "Who is the current President of America?",
    answers: [
      { text: "Joe Biden", correct: true },
      { text: "Donald Trump", correct: false },
      { text: "Mary Clinton", correct: false },
      { text: "Joe Byden", correct: false }
    ]
  },
  {
    question: "To get a random generating numbers in JavaScript, which is the correct code?",
    answers: [
      { text: "get().random", correct: false },
      { text: "Math.floor(Math.random()", correct: true },
      { text: "random.floor()* Math.ceil", correct: false },
      { text: "Math.carpet(Math.rug()", correct: false }
    ]
  },
  {
    question: "The capital of Nigeria is?",
    answers: [
      { text: "Kano", correct: false },
      { text: "Abuja", correct: true },
      { text: "Jos", correct: false },
      { text: "Lagos", correct: false }
    ]
  },
  {
    question: "What is the capital of France?",
    answers: [
      { text: "New York", correct: false },
      { text: "London", correct: false },
      { text: "Paris", correct: true },
      { text: "Dublin", correct: false }
    ]
  },
  {
    question: "Who is CEO of Tesla?",
    answers: [
      { text: "Jeff Bezos", correct: false },
      { text: "Elon Musk", correct: true },
      { text: "Bill Gates", correct: false },
      { text: "Tony Stark", correct: false }
    ]
  },
  {
    question: "The iPhone was created by which company?",
    answers: [
      { text: "Apple", correct: true },
      { text: "Intel", correct: false },
      { text: "Amazon", correct: false },
      { text: "Microsoft", correct: false }
    ]
  },
  {
    question: "How many Harry Potter books are there?",
    answers: [
      { text: "1", correct: false },
      { text: "4", correct: false },
      { text: "6", correct: false },
      { text: "7", correct: true }
    ]
  },
  {
    question: "President Barrack Obama became the US president in which year?",
    answers: [
      { text: "January 20th, 2007", correct: false },
      { text: "January 20th, 2008", correct: false },
      { text: "January 20th, 2009", correct: true },
      { text: "January 20th, 2010", correct: false }
    ]
  },
  {
    question: "What is the currency of Denmark?",
    answers: [
      { text: "Dänische krella", correct: false },
      { text: "Kishi", correct: false },
      { text: "Euro", correct: false },
      { text: "Dänische Krone", correct: true }
    ]
  },
  {
    question: "In what year did Tony Blair become British Prime Minister?",
    answers: [
      { text: "2008", correct: false },
      { text: "1998", correct: false },
      { text: "1997", correct: true },
      { text: "2007", correct: false }
    ]
  },
  {
    question: "What is the capital of New Zealand?",
    answers: [
      { text: "Wellington", correct: true },
      { text: "Christoph", correct: false },
      { text: "New land", correct: false },
      { text: "None of the above", correct: false }
    ]
  },
  {
    question: "What sport did David Beckham play?",
    answers: [
      { text: "Volleyball", correct: false },
      { text: "Basketball", correct: false },
      { text: "Handball", correct: false },
      { text: "Football", correct: true }
    ]
  },
  {
    question: "How many permanent teeth does a dog have?",
    answers: [
      { text: "62", correct: false },
      { text: "52", correct: false },
      { text: "42", correct: true },
      { text: "32", correct: false }
    ]
  },
  {
    question: "Which country in the world is believed to have the most miles of motorway?",
    answers: [
      { text: "Germany", correct: false },
      { text: "USA", correct: false },
      { text: "Japan", correct: false },
      { text: "China", correct: true }
    ]
  },
  {
    question: "Which European city hosted the 1936 Summer Olympics?",
    answers: [
      { text: "Cairo", correct: false },
      { text: "Milan", correct: false },
      { text: "Osaka", correct: false },
      { text: "Berlin", correct: true }
    ]
  },
  {
    question: "What is the capital of Finland?",
    answers: [
      { text: "Eldorado", correct: false },
      { text: "Helsinki", correct: true },
      { text: "Jabello", correct: false },
      { text: "Sicily", correct: false }
    ]
  },
  {
    question: "What language is spoken in Brazil??",
    answers: [
      { text: "English", correct: false },
      { text: "Portuguese", correct: true },
      { text: "French", correct: false },
      { text: "Bracelleto", correct: false }
    ]
  },
  {
    question: "What is the tallest mountain in the world?",
    answers: [
      { text: "Mount Amazona", correct: false },
      { text: "Kilimanjaro", correct: false },
      { text: "Mount Everest", correct: true },
      { text: "Idanre hill", correct: false }
    ]
  },
  {
    question: "How many planets are in our solar system?",
    answers: [
      { text: "8", correct: true },
      { text: "7", correct: false },
      { text: "9", correct: false },
      { text: "6", correct: false }
    ]
  },
  {
    question: "How many keys are there on a piano?",
    answers: [
      { text: "121", correct: false },
      { text: "45", correct: false },
      { text: "88", correct: true },
      { text: "29", correct: false }
    ]
  },
  {
    question: "Glossectomy is the removal of all of or part of which body part?",
    answers: [
      { text: "Eyes", correct: false },
      { text: "Tongue", correct: true },
      { text: "Ear", correct: false },
      { text: "Fingers", correct: false }
    ]
  },
  {
    question: "Where is the smallest bone in the human body located?",
    answers: [
      { text: "Jaw bone", correct: false },
      { text: "Nose", correct: false },
      { text: "Ear", correct: true },
      { text: "Mouth", correct: false }
    ]
  },
  {
    question: "How many hearts does an octopus have?",
    answers: [
      { text: "3", correct: true },
      { text: "1", correct: false },
      { text: "7", correct: false },
      { text: "5", correct: false }
    ]
  },
  {
    question: "How many elements are in the periodic table?",
    answers: [
      { text: "900", correct: false },
      { text: "320", correct: false },
      { text: "118", correct: true },
      { text: "65", correct: false }
    ]
  },
  {
    question: "With over 222 million units sold, what is Apples highest-selling iPhone model?",
    answers: [
      { text: "Iphone x", correct: false },
      { text: "Iphone 8 plus", correct: false },
      { text: "Iphone 6", correct: true },
      { text: "Iphone 12", correct: false }
    ]
  },
  {
    question: "In which year was the Microsoft XP operating system released?",
    answers: [
      { text: "1996", correct: false },
      { text: "2005", correct: false },
      { text: "2001", correct: true },
      { text: "1993", correct: false }
    ]
  },
  {
    question: "Elon Musk is the CEO of which global brand.",
    answers: [
      { text: "General motors", correct: false },
      { text: "samsung", correct: false },
      { text: "Apple", correct: false },
      { text: "Tesla", correct: true }
    ]
  },
  {
    question: "Which year did the European Union first introduce the Euro as currency??",
    answers: [
      { text: "1999", correct: true },
      { text: "1995", correct: false },
      { text: "1997", correct: false },
      { text: "2001", correct: false }
    ]
  },
  {
    question: "Beirut is the capital of which country?",
    answers: [
      { text: "Iraq", correct: false },
      { text: "Iran", correct: false },
      { text: "Lebanon", correct: true },
      { text: "syria", correct: false }
    ]
  },
  {
    question: "Hanoi is the capital of which country?",
    answers: [
      { text: "Thailand", correct: false },
      { text: "Vietnam", correct: true },
      { text: "Zimbabwe", correct: false },
      { text: "Argentina", correct: false }
    ]
  },
  {
    question: "What is the capital of Argentina?",
    answers: [
      { text: "Clit oris", correct: false },
      { text: "kaowe", correct: false },
      { text: "Everest", correct: false },
      { text: "Buenos Aries", correct: true }
    ]
  },
  {
    question: "Slovakia's capital is?",
    answers: [
      { text: "None of the above", correct: false },
      { text: "batval", correct: false },
      { text: "Buenos", correct: false },
      { text: "Bratislava", correct: true }
    ]
  },
  {
    question: "The capital of Libya is Benghazi",
    answers: [
      { text: "False-It's Aquito", correct: false },
      { text: "True", correct: false },
      { text: "Definitely yes", correct: false },
      { text: "False", correct: true }
    ]
  },
  {
    question: "The Prime Minister of Great Britain has to be a sitting Member of Parliament. True or false?",
    answers: [
      { text: "True", correct: true },
      { text: "Not necessary", correct: false },
      { text: "False", correct: false },
      { text: "None of the above", correct: false }
    ]
  },
  {
    question: "Netflix began as a DVD rental service. True or false?",
    answers: [
      { text: "False", correct: false },
      { text: "Not really correct", correct: false },
      { text: "True", correct: true },
      { text: "Not really true", correct: false }
    ]
  },
  {
    question: "In which country would you find the original Legoland?",
    answers: [
      { text: "USA", correct: false },
      { text: "Ghana", correct: false },
      { text: "Denmark", correct: true },
      { text: "China", correct: false }
    ]
  },
  {
    question: "Botany is the study of what life form?",
    answers: [
      { text: "Animals", correct: false },
      { text: "Politics", correct: false },
      { text: "Plants", correct: true },
      { text: "Mountains", correct: false }
    ]
  },
  {
    question: "What is the largest animal on the planet?",
    answers: [
      { text: "Giraffe", correct: false },
      { text: "Hippopotamus", correct: false },
      { text: "Elephant", correct: false },
      { text: "Blue whale", correct: true }
    ]
  },
  {
    question: "Where did the Duke and Duchess of Windsor visit in 1937, later causing controversy for the royal family?",
    answers: [
      { text: "Abuja", correct: false },
      { text: "Milan", correct: false },
      { text: "Berlin", correct: true },
      { text: "Paris", correct: false }
    ]
  },
  {
    question: "The Tombstone Piledriver is a finisher made famous by which iconic wrestler?",
    answers: [
      { text: "Hulk Hogan", correct: false },
      { text: "Warrior", correct: false },
      { text: "The Undertaker", correct: true },
      { text: "Stone cold", correct: false }
    ]
  },
  {
    question: "Holy Quran is the book of which religion?",
    answers: [
      { text: "Christians", correct: false },
      { text: "Muslims", correct: true },
      { text: "Atheists", correct: false },
      { text: "Monks", correct: false }
    ]
  },
  {
    question: "If Quran is for muslims then the Holy Bible is for which religion?",
    answers: [
      { text: "Jews", correct: false },
      { text: "Abramohic religion", correct: false },
      { text: "Christians", correct: true },
      { text: "Only catholics", correct: false }
    ]
  },
  {
    question: "Alberta is a province of which country??",
    answers: [
      { text: "Australia", correct: false },
      { text: "South Africa", correct: false },
      { text: "Canada", correct: true },
      { text: "Iceland", correct: false }
    ]
  },
  {
    question: "What is the longest river in the world?",
    answers: [
      { text: "South Asia river", correct: false },
      { text: "Lengthy river", correct: false },
      { text: "River Nile", correct: true },
      { text: "Pacific river", correct: false }
    ]
  },
  {
    question: "What is the hottest continent on Earth?",
    answers: [
      { text: "Asia", correct: false },
      { text: "South America", correct: false },
      { text: "Australia", correct: false },
      { text: "Africa", correct: true }
    ]
  },
  {
    question: " What is the largest country in the world?",
    answers: [
      { text: "Canada", correct: false },
      { text: "USA", correct: false },
      { text: "China", correct: false },
      { text: "Russia", correct: true }
    ]
  },
  {
    question: "The capital of Nigeria is?",
    answers: [
      { text: "Lagos", correct: false },
      { text: "Jos", correct: false },
      { text: "Abuja", correct: true },
      { text: "Kano", correct: false }
    ]
  },
  {
    question: "The most populous Africa country is?",
    answers: [
      { text: "Nigeria", correct: true },
      { text: "South Africa", correct: false },
      { text: "Egypt", correct: false },
      { text: "Angola", correct: false }
    ]
  },
  {
    question: "10) The first successful vaccine was introduced by Edward Jenner in 1796. Which disease did it guard against?",
    answers: [
      { text: "Malaria", correct: false },
      { text: "Corona-virus", correct: false },
      { text: "Smallpox", correct: true },
      { text: "Fever", correct: false }
    ]
  },
  {
    question: "What are the five colours of the Olympic rings?",
    answers: [
      { text: "Blue, yellow, black, green and purple", correct: false },
      { text: "Blue, yellow, black, green and red", correct: true },
      { text: "Yellow, Navy, black, green and red", correct: false },
      { text: "Blue, gray, black, green and red", correct: false }
    ]
  },
  {
    question: "How many players are there in a rugby league team?",
    answers: [
      { text: "10", correct: false },
      { text: "20", correct: false },
      { text: "23", correct: false },
      { text: "13", correct: true }
    ]
  },
  {
    question: "Who won the FIFA Women's World Cup in 2019?",
    answers: [
      { text: "Germany", correct: false },
      { text: "Italy", correct: false },
      { text: "USA", correct: true },
      { text: "Nigeria", correct: false }
    ]
  },
  {
    question: "Which Country won the olympics 1996 football in Atlanta?",
    answers: [
      { text: "Nigeria", correct: true },
      { text: "Germany", correct: false },
      { text: "Brazil", correct: false },
      { text: "Argentina", correct: false }
    ]
  },
  {
    question: "Which word does NOT belong with the others?",
    answers: [
      { text: "Index", correct: false },
      { text: "Glossary", correct: false },
      { text: "Book", correct: true },
      { text: "Chapter", correct: false }
    ]
  },
  {
    question: "Which word does NOT belong with the others?",
    answers: [
      { text: "Wing", correct: false },
      { text: "Fin", correct: false },
      { text: "Break", correct: true },
      { text: "Rudder", correct: false }
    ]
  },
  {
    question: "There is a room with no doors, and no windows. A man is found hung from the ceiling. A puddle of water is on the floor. How did he die?",
    answers: [
      { text: "He was standing on a block of ice", correct: true },
      { text: "He jumped", correct: false },
      { text: "He was a very tall person", correct: false },
      { text: "Not possible", correct: false }
    ]
  },
  {
    question: "A boy and a doctor were fishing. The boy is the doctor's son, but the doctor isn't the boy's father. Who is the doctor?",
    answers: [
      { text: "Grand father", correct: false },
      { text: "Step father", correct: false },
      { text: "Mother", correct: true },
      { text: "Step mother", correct: false }
    ]
  },
  {
    question: "Rearrange the following letters so as to form one word: NEW DOOR.",
    answers: [
      { text: "RODE NEW", correct: false },
      { text: "NEO WROD", correct: false },
      { text: "NEE DREW", correct: false },
      { text: "ONE WORD", correct: true }
    ]
  },
  {
    question: "What is the only question you can't answer with a yes?",
    answers: [
      { text: "Are you ok", correct: false },
      { text: "Are you rich ", correct: false },
      { text: "Are you dead", correct: true },
      { text: "Are you broke", correct: false }
    ]
  },
  {
    question: "What common English verb becomes its own past tense by rearranging its letters?",
    answers: [
      { text: "Eat", correct: true },
      { text: "Late", correct: false },
      { text: "Wait", correct: false },
      { text: "Fit", correct: false }
    ]
  },
  {
    question: "Tanya is older than Eric. Cliff is older than Tanya. Eric is older than Cliff.If the first two statements are true, the third statement is?",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
      { text: "Uncertain", correct: false },
      { text: "Correct", correct: false }
    ]
  },
  {
    question: " What are two things you can never eat for breakfast?",
    answers: [
      { text: "Breakfast", correct: false },
      { text: "Bread and butter", correct: false },
      { text: "Lunch and Dinner", correct: true },
      { text: "Fufu and soup", correct: false }
    ]
  },
  {
    question: "What is always coming but never arrives? ",
    answers: [
      { text: "You", correct: false },
      { text: "Water", correct: false },
      { text: "Tomorrow", correct: true },
      { text: "nothing", correct: false }
    ]
  },
  {
    question: "What gets wetter the more it dries? ",
    answers: [
      { text: "A towel", correct: true },
      { text: "Weather", correct: false },
      { text: "Sun", correct: false },
      { text: "none of the above", correct: false }
    ]
  },
  {
    question: "What can be broken but never held? ",
    answers: [
      { text: "A table", correct: false },
      { text: "A promise", correct: true },
      { text: "Words", correct: false },
      { text: "Chair", correct: false }
    ]
  },
  {
    question: "What word is spelled incorrectly in every single dictionary?",
    answers: [
      { text: "Incorrectly", correct: true },
      { text: "Dictionary", correct: false },
      { text: "House", correct: false },
      { text: "cellphones", correct: false }
    ]
  },
  {
    question: "What is it that lives if it is fed, and dies if you give it a drink?",
    answers: [
      { text: "Animals", correct: false },
      { text: "Fire", correct: true },
      { text: "Plants", correct: false },
      { text: "Human", correct: false }
    ]
  },
  {
    question: "What never asks a question but gets answered all the time?",
    answers: [
      { text: "nothing", correct: false },
      { text: "Radio", correct: false },
      { text: "Cellphones", correct: true },
      { text: "no idea", correct: false }
    ]
  },
  {
    question: "What goes up but never ever comes down?",
    answers: [
      { text: "Numbers", correct: false },
      { text: "Alphabets", correct: false },
      { text: "Age", correct: true },
      { text: "none of the above", correct: false }
    ]
  },
  {
    question: "What can one catch that is not thrown?",
    answers: [
      { text: "Ball", correct: false },
      { text: "Cold", correct: true },
      { text: "Books", correct: false },
      { text: "no idea", correct: false }
    ]
  },
  {
    question: "How long do elephant pregnancies last?",
    answers: [
      { text: "6 months", correct: false },
      { text: "22 months", correct: true },
      { text: "10 months", correct: false },
      { text: "None of the above", correct: false }
    ]
  },
  {
    question: "What is \"cynophobia\"?",
    answers: [
      { text: "Fear of trust", correct: false },
      { text: "Fear of failure", correct: false },
      { text: "Fear of dog", correct: true },
      { text: "Fear of mountain", correct: false }
    ]
  },
  {
    question: "How long is an Olympic swimming pool (in meters)?",
    answers: [
      { text: "50 meters", correct: true },
      { text: "100 meters", correct: false },
      { text: "150 meters", correct: false },
      { text: "200 meters", correct: false }
    ]
  },
  {
    question: "Which country do cities of Perth, Adelade & Brisbane belong to?",
    answers: [
      { text: "Iceland", correct: false },
      { text: "belgium", correct: false },
      { text: "Australia", correct: true },
      { text: "Angola", correct: false }
    ]
  },
  {
    question: "What geometric shape is generally used for stop signs?",
    answers: [
      { text: "Tangular", correct: false },
      { text: "Angle", correct: false },
      { text: "triangle", correct: false },
      { text: "Octagon", correct: true }
    ]
  },
  {
    question: "Which animal can be seen on the Porsche logo?",
    answers: [
      { text: "Cow", correct: false },
      { text: "Horse", correct: true },
      { text: "Goat", correct: false },
      { text: "Crocodile", correct: false }
    ]
  },
  {
    question: "What is the name of the largest ocean on earth?",
    answers: [
      { text: "Oceania", correct: false },
      { text: "Red sea", correct: false },
      { text: "Pacific Ocean", correct: true },
      { text: "River Jordan", correct: false }
    ]
  },
  {
    question: "Demolition of the Berlin wall separating East and West Germany began in what year?",
    answers: [
      { text: "1989", correct: true },
      { text: "1988", correct: false },
      { text: "1987", correct: false },
      { text: "1986", correct: false }
    ]
  },
  {
    question: "Which country consumes the most chocolate per capita?",
    answers: [
      { text: "Germany", correct: false },
      { text: "United State of America", correct: false },
      { text: "Switzerland", correct: true },
      { text: "Brazil", correct: false }
    ]
  },
  {
    question: "Which is the only edible food that never goes bad?",
    answers: [
      { text: "Honey", correct: true },
      { text: "Yoghurt", correct: false },
      { text: "Bread", correct: false },
      { text: "pizza", correct: false }
    ]
  },
  {
    question: "How many colors are there in the rainbow?",
    answers: [
      { text: "Ten", correct: false },
      { text: "Eight", correct: false },
      { text: "Nine", correct: false },
      { text: "Seven", correct: true }
    ]
  },
  {
    question: "Which country borders 14 nations and crosses 8 time zones?",
    answers: [
      { text: "South Africa", correct: false },
      { text: "Nigeria", correct: false },
      { text: "Russia", correct: true },
      { text: "Denmark", correct: false }
    ]
  },
  {
    question: "What is the loudest animal on Earth?",
    answers: [
      { text: "Blue whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Lion", correct: false },
      { text: "Gorilla", correct: false }
    ]
  },
  {
    question: "Trapeze has 4 angles, how many have Parallelogram?",
    answers: [
      { text: "4", correct: true },
      { text: "5", correct: false },
      { text: "6", correct: false },
      { text: "7", correct: false }
    ]
  },
  {
    question: "How many angles have a pentagon?",
    answers: [
      { text: "6", correct: false },
      { text: "7", correct: false },
      { text: "8", correct: false },
      { text: "5", correct: true }
    ]
  },
  {
    question: "The richest man in Africa is?",
    answers: [
      { text: "Remi Shonaiya", correct: false },
      { text: "Femi Otedola", correct: false },
      { text: "Aliko Dangote", correct: true },
      { text: "Chinwe Dike", correct: false }
    ]
  },
  {
    question: "which of these words is the longest",
    answers: [
      { text: "long", correct: false },
      { text: "far", correct: false },
      { text: "longest", correct: false },
      { text: "shortest", correct: true }
    ]
  },
  {
    question: "3 + 3 x 3 - 3 + 3 = ?",
    answers: [
      { text: "18", correct: true },
      { text: "23", correct: false },
      { text: "15", correct: false },
      { text: "33", correct: false }
    ]
  },
  {
    question: "Using only an addition, how do you add eight 8's and get the number 1000?",
    answers: [
      { text: "888 + 88 + 80 + 18 + 08 = 1000", correct: false },
      { text: "888 + 88 + 88 + 8 + 8 = 1000", correct: false },
      { text: "888 + 88 + 8 + 8 + 8 = 1000", correct: true },
      { text: "88 + 88 + 88 + 88 + 88 = 1000", correct: false }
    ]
  },
  {
    question: "if 1=3, 2=3, 3=5, 4=4, 5=4 Then, 6=?",
    answers: [
      { text: "4", correct: false },
      { text: "0", correct: false },
      { text: "is 2, because 2 slices 6 in 3 places", correct: false },
      { text: "is 3, because \"six\" has three letters", correct: true }
    ]
  },
  {
    question: "Which singer was known amongst other things as \"The King of Pop\"?",
    answers: [
      { text: "Celine Dion", correct: false },
      { text: "Michael Jackson", correct: true },
      { text: "Princess Diana", correct: false },
      { text: "The Prince", correct: false }
    ]
  },
  {
    question: "Wayne Rooney scored his Premier League first goal against which team?",
    answers: [
      { text: "Chelsea", correct: false },
      { text: "Bayern-Munich", correct: false },
      { text: "Arsenal", correct: true },
      { text: "Dortmund", correct: false }
    ]
  },
  {
    question: "Who scored the first Premier League hat-trick??",
    answers: [
      { text: "Cristiano Ronaldo", correct: false },
      { text: "Carlos Santana", correct: false },
      { text: "Eric Cantona", correct: true },
      { text: "Etoo Fils", correct: false }
    ]
  },
  {
    question: "President Putin is a president of which country?",
    answers: [
      { text: "Ukraine", correct: false },
      { text: "Russia", correct: true },
      { text: "Poland", correct: false },
      { text: "Bulgaria", correct: false }
    ]
  },
  {
    question: "As stated in the Bible, the first Man and Woman God created were?",
    answers: [
      { text: "Bill and Juliet", correct: false },
      { text: "Clarence and Clara", correct: false },
      { text: "Adam and Eve", correct: true },
      { text: "Paul and Peter", correct: false }
    ]
  },
  {
    question: "As stated in the Bible in the book of Genesis chapter 1, the first command of God was?",
    answers: [
      { text: "Let there be Heaven and Earth", correct: false },
      { text: "Let there be Man", correct: false },
      { text: "Let there be water", correct: false },
      { text: "Let there be light", correct: true }
    ]
  }, {
    question: "As stated in the Bible Genesis 1:1, in the beginning God created what and what?",
    answers: [
      { text: "Plants and Animals", correct: false },
      { text: "Man and Woman", correct: false },
      { text: "Heaven and Earth", correct: true },
      { text: "None of the Above", correct: false }
    ]
  },
  {
    question: "Chris Brown is a popular American singer while Davido is a popular singer of which country?",
    answers: [
      { text: "UK", correct: false },
      { text: "Ghana", correct: false },
      { text: "Nigeria", correct: true },
      { text: "Sweden", correct: false }
    ]
  }
]