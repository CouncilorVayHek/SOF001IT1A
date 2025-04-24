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
            { text: "cat",  correct: true  },
            { text: "dog",  correct: false },
        ]
    },
    {
        question: "what is Milja's favorite animal?",
        answers: [
            { text: "kangaroo", correct: false },
            { text: "lion",     correct: false },
            { text: "rat",      correct: false },
            { text: "dog",      correct: true  },
        ]
    },
    {
        question: "which is a dog?",
        answers: [
            { text: "elephant", correct: false },
            { text: "mouse",    correct: false },
            { text: "dog",      correct: true  },
            { text: "rat",      correct: false },
        ]
    }
];

// -----------------------------
// Viittaukset HTML-elementteihin
// -----------------------------
const questionElement  = document.getElementById("question");        // <h2 id="question">
const answerButtons    = document.getElementById("answer-buttons");  // <div id="answer-buttons">
const nextButton       = document.getElementById("next-btn");        // <button id="next-btn">

// -----------------------------
// Pelin tilamuuttujat
// -----------------------------
let currentQuestionIndex = 0; // mikä kysymys on menossa
let score               = 0; // montako oikeaa vastausta

// -----------------------------
// Alustetaan peli
// -----------------------------
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";  // nollataan “Next”-tekstiksi
    showQuestion();                 // näytetään ensimmäinen kysymys
}

// -----------------------------
// Näytetään nykyinen kysymys
// -----------------------------
function showQuestion() {
    resetState(); // tyhjennetään vanhat vastaukset yms.

    const currentQuestion = questions[currentQuestionIndex]; // haetaan nykyinen kysymys
    const questionNo      = currentQuestionIndex + 1;        // 1-pohjainen numerointi

    // Päivitetään kysymysteksti muotoon "1. what is …?"
    questionElement.innerHTML = `${questionNo}. ${currentQuestion.question}`;

    // Luodaan vastauspainikkeet
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;     // painikkeeseen vastausteksti
        button.classList.add("btn");        // perus-tyyli
        answerButtons.appendChild(button);  // lisätään DOMiin

        // Talletetaan data-attribuuttiin tieto oikeellisuudesta
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }

        // Rekisteröidään klikinkuuntelija
        button.addEventListener("click", selectAnswer);
    });
}

// -----------------------------
// Tyhjennetään layout uutta kysymystä varten
// -----------------------------
function resetState() {
    nextButton.style.display = "none"; // piilotetaan “Next”
    // poistetaan kaikki aiemmat vastauspainikkeet
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

// -----------------------------
// Käsitellään vastaus
// -----------------------------
function selectAnswer(e) {
    const selectedBtn = e.target;                      // painike johon klikattiin
    const isCorrect   = selectedBtn.dataset.correct === "true";

    // Väritetään klikattu painike vihreäksi tai punaiseksi
    selectedBtn.classList.add(isCorrect ? "correct" : "incorrect");

    // Käydään kaikki painikkeet läpi:
    //   • merkitään oikea vastaus vihreällä
    //   • estetään uudet klikkaukset (disabled)
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextButton.style.display = "block"; // tuodaan “Next” näkyviin
}

// -----------------------------
// Käynnistetään peli sivun latautuessa
// -----------------------------
startQuiz();
