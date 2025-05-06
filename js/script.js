/* ---------------------------------------------------------------
   1. Poimi valittu kategoria ja löydä sitä vastaava skripti
---------------------------------------------------------------- */
const category = sessionStorage.getItem("chosenCategory");

let categoryScriptPath = "";
switch (category) {
  case "eläimet":  categoryScriptPath = "./js/kategories/eläimet.js";  break;
  case "historia": categoryScriptPath = "./js/kategories/historia.js"; break;
  case "suomi":    categoryScriptPath = "./js/kategories/suomi.js";    break;
  case "tekijät": categoryScriptPath = "./js/kategories/tekijät.js"; break;
  default:
    alert("Kategoriaa ei löytynyt!");
}

// category  on jo haettu sessionStoragesta
const categoryNames = {
    "eläimet":  "Eläimet 🐾",
    "historia": "Historia 🏺",
    "suomi":    "Suomi 🇫🇮",
    "tekijät": "Tekijät"
  };
  
  const titleEl = document.getElementById("visa-nimi");
  if (titleEl) {
    // Jos löytyi vastine sanakirjasta, käytä sitä, muuten näytä kategoria sellaisenaan
    titleEl.textContent = categoryNames[category] || category || "Tietovisa";
  }
  

/* ---------------------------------------------------------------
   2. Fisher–Yates-sekoitus: satunnaistaa taulukon paikan päällä
---------------------------------------------------------------- */
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

/* ---------------------------------------------------------------
   3. Lataa kategoria­skripti, sekoita kysymykset ja rajaa 10 kpl
---------------------------------------------------------------- */
if (categoryScriptPath) {
  const script = document.createElement("script");
  script.src = categoryScriptPath;
  script.onload = () => {
    // odotetaan, että kategoria­sivulla on globaali `questions`
    if (!Array.isArray(questions) || questions.length === 0) {
      alert("Kysymyksiä ei löytynyt!");
      return;
    }

    shuffleArray(questions);      // satunnainen järjestys
    if (questions.length > 10) questions.splice(10); // max 10

    startQuiz();                  // aloita peli
  };
  document.body.appendChild(script);
}

/* ---------------------------------------------------------------
   4. Elementit ja pelin tila
---------------------------------------------------------------- */
const questionElement = document.getElementById("question");
const answerButtons  = document.getElementById("answer-buttons");
const nextButton     = document.getElementById("next-btn");
const textElement = document.getElementById("onnitteluteksti");

let currentQuestionIndex = 0; // monesko kysymys menossa
let score = 0;                // oikeiden vastausten määrä

/* ---------------------------------------------------------------
   5. Peli-funktiot
---------------------------------------------------------------- */

// käynnistä peli
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.textContent = "Next";
  showQuestion();
}

// näytä kysymys ja vastaukset
function showQuestion() {
  resetState();
  const q = questions[currentQuestionIndex];
  questionElement.textContent = `${currentQuestionIndex + 1}. ${q.question}`;

  q.answers.forEach(ans => {
    const btn = document.createElement("button");
    btn.textContent = ans.text;
    btn.classList.add("btn");
    if (ans.correct) btn.dataset.correct = "true";
    btn.addEventListener("click", selectAnswer);
    answerButtons.appendChild(btn);
  });
}

// tyhjennä vanhat vastaukset
function resetState() {
  nextButton.style.display = "none";
  answerButtons.innerHTML = "";
}

// kun vastaus valitaan
function selectAnswer(e) {
  const selected = e.target;
  const correct  = selected.dataset.correct === "true";

  selected.classList.add(correct ? "correct" : "incorrect");
  if (correct) score++;

  Array.from(answerButtons.children).forEach(btn => {
    if (btn.dataset.correct === "true") btn.classList.add("correct");
    btn.disabled = true;
  });

  nextButton.style.display = "block";
}

// näytä tulos
function showScore() {
  resetState();
  questionElement.textContent = `Sait ${score}/${questions.length}!`;
  nextButton.textContent = "Takaisin etusivulle";
  nextButton.style.display = "block";


// tuloksen yhteydessä näytetään onnitteluteksti ja siihen liittyvä kuva

     
const container = document.getElementById('kuvanpaikka');

if (score > 7) {

    textElement.innerHTML = "Tietovisan huipulla on tilaa vain yhdelle ja se olet sinä!";
    textElement.style.display = "block";
    
    const img = document.createElement('img');
    img.src = 'assets/Hyvascore.jpg';
    img.alt = 'Iloinen kani';
    img.width = 500;
    img.height = 500;

    // Lisää kontekstiin
    container.appendChild(img);
    
  }

  else if (score > 4) {

    textElement.innerHTML = "Tietäjää sinussa on - vielä vähän harjoittelua!";
    textElement.style.display = "block";

    const img = document.createElement('img');
    img.src = 'assets/Neutraaliscore.jpg';
    img.alt = 'Iloinen kani';
    img.width = 500;
    img.height = 500;

    // Lisää kontekstiin
    container.appendChild(img);
}


  else if (score >= 0) {

    textElement.innerHTML = "No...ainakin voit sanoa, että opit jotain uutta tänään!";
    textElement.style.display = "block";

    const img = document.createElement('img');
    img.src = 'assets/Huonoscore.jpg';
    img.alt = 'Iloinen kani';
    img.width = 500;
    img.height = 500;

    // Lisää kontekstiin
    container.appendChild(img);
  }
}

// siirry seuraavaan kysymykseen tai tulokseen
function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

// Next-napin kuuntelija
nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    window.location.href = "index.html";
  }
});
