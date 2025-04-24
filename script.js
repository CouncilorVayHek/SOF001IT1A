// -----------------------------
// Kysymyspankki
// -----------------------------
// Jokainen alkio sisältää:
//   • question  – itse kysymysteksti
//   • answers   – neljän vastausobjektin taulukko
//       • text      – vastausvaihtoehdon teksti
//       • correct   – onko vastaus oikea (true/false)
const questions = [
    {
        question: "what is my favorite animal?",
        answers: [
            { text: "shark", correct: false },
            { text: "hyena", correct: false },
            { text: "cat", correct: true },
            { text: "dog", correct: false },
        ]
    },
    {
        question: "what is Milja's favorite animal?",
        answers: [
            { text: "kangaroo", correct: false },
            { text: "lion", correct: false },
            { text: "rat", correct: false },
            { text: "dog", correct: true },
        ]
    },
    {
        question: "which is a dog?",
        answers: [
            { text: "elephant", correct: false },
            { text: "mouse", correct: false },
            { text: "dog", correct: true },
            { text: "rat", correct: false },
        ]
    }
];

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
    nextButton.innerHTML = "Pelaa Uudestaan";
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

// Next-napin klikkauskuuntelija:
// - Jos visa on kesken, siirtyy seuraavaan kysymykseen
// - Jos kaikki kysymykset on käyty läpi, käynnistää visan uudelleen
nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

// Käynnistetään tietovisa sivun latautuessa
startQuiz();

