// script.js
const category = sessionStorage.getItem("chosenCategory");

let categoryScriptPath = "";

switch (category) {
  case "eläimet":
    categoryScriptPath = "./js/kategories/eläimet.js";
    break;
  case "historia":
    categoryScriptPath = "./js/kategories/historia.js";
    break;
  case "suomi":
    categoryScriptPath = "./js/kategories/suomi.js";
    break;
  default:
    alert("Kategoriaa ei löytynyt!");
    break;
}

// Dynamically load the appropriate script
if (categoryScriptPath) {
  const script = document.createElement("script");
  script.src = categoryScriptPath;
  script.onload = () => {
    // Assuming each category file defines a global variable `questions`
    startQuiz(questions); // You implement this function to initialize the quiz with the loaded questions
  };
  document.body.appendChild(script);
}


// -----------------------------
// Viittaukset HTML-elementteihin
// -----------------------------
const questionElement = document.getElementById("question");        // <h2 id="question">
const answerButtons = document.getElementById("answer-buttons");  // <div id="answer-buttons">
const nextButton = document.getElementById("next-btn");        // <button id="next-btn">

// -----------------------------
// Pelin tilamuuttujat
// -----------------------------
let currentQuestionIndex = 0; // mikä kysymys on menossa
let score = 0; // montako oikeaa vastausta


// Käynnistää tietovisan alusta:
// - Nollaa kysymysindeksin ja pistelaskurin
// - Asettaa Next-napin tekstin
// - Lataa ensimmäisen kysymyksen näytölle
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

// Näyttää nykyisen kysymyksen ja sen vastausvaihtoehdot:
// - Tyhjentää edellisen ruudun (resetState)
// - Asettaa kysymyksen tekstin
// - Luo jokaiselle vastaukselle painikkeen ja liittää niihin klikkauskuuntelijan
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            // Tallennetaan dataksi, että tämä painike on oikea vastaus
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

// Palauttaa näkymän lähtötilaan ennen seuraavaa kysymystä:
// - Piilottaa Next-napin
// - Poistaa kaikki aiemmat vastauspainikkeet DOMista
function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

// Käsittelee käyttäjän valitseman vastauksen:
// - Merkitsee oikean/väärän värillä
// - Näyttää kaikki oikeat vastaukset
// - Estää lisäklikkaukset ja paljastaa Next-napin
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    // Korostetaan myös muut oikeat painikkeet ja disabloidaan painikkeet
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

// Näyttää lopputuloksen ja tarjoaa mahdollisuuden aloittaa alusta:
// - Tyhjentää ruudun resetState-funktiolla
// - Tulostaa pistemäärän näkyville
// - Muuttaa Next-napin tekstiksi ”Pelaa Uudestaan”
// - Asettaa napin näkyviin
function showScore() {
    resetState();
    questionElement.innerHTML = `Sait ${score}/${questions.length}!`;

    nextButton.innerHTML = "Takaisin etusivulle";
    nextButton.style.display = "block";
}



// Siirtää tietovisaa eteenpäin:
// - Kasvattaa kysymysindeksiä
// - Jos kysymyksiä on vielä jäljellä, näyttää seuraavan
// - Muuten näyttää lopputuloksen
function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        window.location.href = "index.html";
    }
});



// Käynnistetään tietovisa sivun latautuessa
startQuiz();

