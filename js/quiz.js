"use strict"

/**
 * Deze constante bevat alle vragen van de quiz en is dynamisch uit te breiden.
 */
const QUIZ_VRAGEN = [
    {
        vraag: "Het antwoord is 0. Wat is de vraag?", 
        antwoorden: {
            a: "Bij welk nummer beginnen arrays met tellen?",
            b: "Over hoeveel jaar vergaat de wereld?",
            c: "Wat is het geheime commando voor de console om alle antwoorden in te zien?",
            d: "Wat is het nummer van de volgende vraag?"
        },
        extra: "<img src=pictures/nummerNul.png>",
        correcteAntwoord: "a"
    },
    {
        vraag: "Hoe maak je een lijst met nummers in het begin?",
        antwoorden: {
            a: "Met een bl-element",
            b: "Met een ol-element",
            c: "Met een ul-element",
            d: "Met een al-element"
        },
        extra: "<img src=pictures/numberedlist.png>",
        correcteAntwoord: "b"
    },
    {
        vraag: "Wat is de uitkomst van het onderste stuk JavaScript-code?",
        antwoorden: {
            a: "ouden pal",
            b: "oud",
            c: "het gou",
            d: "ouden p"
        },
        extra: '<code>\
            var text = "het gouden paleis";</br>\
            window.alert(text.substr(5, 7)\
        </code>',
        correcteAntwoord: "d"
    },
    {
        vraag: "Wat is de uitkomst van het onderste stuk JavaScript-code?",
        antwoorden: {
            a: "true en true",
            b: "true en false",
            c: "false en true",
            d: "false en false"
        },
        extra: '<code>\
            window.alert(9 == "9");</br>\
            window.alert(9 === "9")\
        </code>',
        correcteAntwoord: "b"
    },
    {
        vraag: "In welk bestand kan ik de grootte van de deze video veranderen?",
        antwoorden: {
            a: "Het HTML-bestand",
            b: "Het CSS-bestand",
            c: "Het JavaScript-bestand",
            d: "Alledrie"
        },
        extra: '<iframe src="https://www.youtube-nocookie.com/embed/ra6FtdXrH4Q?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
        correcteAntwoord: "d"
    },
];

var vraagNummer = 0; // Deze variabele houdt bij bij welke vraag we zijn.
var antwoorden = []; // Deze variabele houdt de antwoorden bij die de gebruiker geeft.
var isCorrect = []; // Deze variabele houdt antwoorden bij als true of false.
var answerButtonClickable;


/**
 * Deze functie telt het aantal juiste antwoorden. Dit heb ik later nodig.
 */
function countTrue(array) {
    var onlyTrue = array.filter(value => value == true);
    var amountOfTrues = onlyTrue.length;
    return amountOfTrues;
};

/**
 * Deze functie maakt alle knoppen niet-bold.
 */
function unBoldAllButtons() {
    var navButtons = document.getElementsByClassName('nav-button');
    for (var i = 0; i < navButtons.length; ++i) {
        var item = navButtons[i];
        item.style.fontWeight = 'normal';
    }
}

/**
 * Deze functie maakt de navigatieknoppen bold op basis van op welke pagina je bent.
 */
function boldButton(btn) {
    btn.style.fontWeight = 'bold' ;
}

/**
 * Add actions to page buttons 
 */
function addButtonActions() {
    var startButton = document.getElementById('button-start');
    var questionsButton = document.getElementById('button-questions');
    var answerButtonA = document.getElementById('answerA');
    var answerButtonB = document.getElementById('answerB');
    var answerButtonC = document.getElementById('answerC');
    var answerButtonD = document.getElementById('answerD');
    var nextQuestion = document.getElementById('next-question');

    startButton.addEventListener("click", function () {
        showStartPage();
    });
    questionsButton.addEventListener("click", function () {
        showQuestionsPage();
    });
    answerButtonA.addEventListener("click", function () {
        if (answerButtonClickable == true) {
            answerPressed("a");
        }
    });
    answerButtonB.addEventListener("click", function () {
        if (answerButtonClickable == true) {
            answerPressed("b");
        }
    });
    answerButtonC.addEventListener("click", function () {
        if (answerButtonClickable == true) {
            answerPressed("c");
        }
    });
    answerButtonD.addEventListener("click", function () {
        if (answerButtonClickable == true) {
            answerPressed("d");
        }
    });
    nextQuestion.addEventListener("click", function () {
        goToNextQuestion(); 
    });
};

/**
 * Hide all pages and the score bar
 */
function hideAllPages() {
    var startPage = document.getElementById('page-start');
    var questionsPage = document.getElementById('page-questions');
    var endPage = document.getElementById('page-end');
    var scoreBar = document.getElementById('scorebar');
    var navBar  = document.getElementById('nav-bar');

    startPage.style.display = 'none';   
    questionsPage.style.display = 'none';
    endPage.style.display = 'none';
    scoreBar.style.display = 'none';
    navBar.style.display = 'none';
}

/**
 * Show start page
 */
function showStartPage() {
    var page = document.getElementById('page-start');
    var startButton = document.getElementById('button-start');
    var navBar = document.getElementById('nav-bar');
    
    hideAllPages();

    page.style.display = 'block';
    navBar.style.display = 'block';
    unBoldAllButtons();
    boldButton(startButton);

    console.info('Je bent nu op de startpagina');
}

/**
 * Show questions page
 */
function showQuestionsPage() {
    var page = document.getElementById('page-questions');
    var scoreBar = document.getElementById('scorebar');
    var questionsButton = document.getElementById('button-questions');
    
    hideAllPages();

    page.style.display = 'block';
    scoreBar.style.display = 'block';
    unBoldAllButtons();
    boldButton(questionsButton);
    showQuestion(vraagNummer)
    updateScoreCounter()

    console.info('Je bent nu op de vragenpagina');
}


function showEndPage() {
    var page = document.getElementById('page-end');
    var navBar = document.getElementById('nav-bar');

    var endScore = document.getElementById('end-score');
    var endResult = document.getElementById('end-result');

    var score = countTrue(isCorrect);
    var total = QUIZ_VRAGEN.length;

    hideAllPages();

    navBar.style.display = 'none';
    page.style.display = 'block';

    endScore.innerHTML = "Je hebt in totaal " + score + " vragen van de " + total + " goed beantwoord.";
    if (score == total) {
        endResult.innerHTML = "Je hebt alles goed 🤯. Goed zo!";
    } else if ((score / total) >= 0.5) {
        endResult.innerHTML = "Je hebt (meer dan) de helft goed 😃. Voldoende.";
    } else {
        endResult.innerHTML = "Jammer 😔! Je hebt minder dan de helft goed."
    }

    console.info('Je bent nu op de eindpagina van de quiz.');
}

/**
 * Deze functie laat de vraag zien in de vragenpagina.
 */
function showQuestion(num) {
    var questionTitle = document.getElementById("question-title");
    var question = document.getElementById("question");
    var questionExtras = document.getElementById("question-extras");
    var answerButtonA = document.getElementById('answerA');
    var answerButtonB = document.getElementById('answerB');
    var answerButtonC = document.getElementById('answerC');
    var answerButtonD = document.getElementById('answerD');
    var feedback = document.getElementById('feedback');
    var nextQuestion = document.getElementById('next-question');

    questionTitle.innerHTML = "Vraag " + num;
    question.innerHTML = QUIZ_VRAGEN[num].vraag;
    questionExtras.innerHTML = QUIZ_VRAGEN[num].extra;
    answerButtonA.innerHTML = "a. " + QUIZ_VRAGEN[num].antwoorden.a;
    answerButtonB.innerHTML = "b. " + QUIZ_VRAGEN[num].antwoorden.b;
    answerButtonC.innerHTML = "c. " + QUIZ_VRAGEN[num].antwoorden.c;
    answerButtonD.innerHTML = "d. " + QUIZ_VRAGEN[num].antwoorden.d;
    feedback.innerHTML = ""

    answerButtonClickable = true;
    nextQuestion.style.display = 'none';
};

function updateScoreCounter() {
    var scoreCounter = document.getElementById("score-counter");
    var score = countTrue(isCorrect);
    var total = QUIZ_VRAGEN.length;

    scoreCounter.innerHTML = score + " van de " + total + " punten";
};


/**
 * Deze functie definieert wat er gebeurt als je op een van de knoppen drukt.
 * Hierdoor gebeuren een aantal dingen die ik de 'feedback-flow' noem.
 * Daardoor kan de gebruiker het antwoord evalueren.
 */
function answerPressed(answer) {
    var correct = QUIZ_VRAGEN[vraagNummer].correcteAntwoord;
    var feedback = document.getElementById('feedback');

    var answerButtonA = document.getElementById('answerA');
    var answerButtonB = document.getElementById('answerB');
    var answerButtonC = document.getElementById('answerC');
    var answerButtonD = document.getElementById('answerD');

    var nextQuestion = document.getElementById('next-question');

    var correctButton;
    if (correct == "a") {
        correctButton = answerButtonA;
    } else if (correct == "b") {
        correctButton = answerButtonB;
    } else if (correct == "c") {
        correctButton = answerButtonC;
    } else {
        correctButton = answerButtonD;
    };

    var pressedButton;
    if (answer == "a") {
        pressedButton = answerButtonA;
    } else if (answer == "b") {
        pressedButton = answerButtonB;
    } else if (answer == "c") {
        pressedButton = answerButtonC;
    } else {
        pressedButton = answerButtonD;
    };


    answerButtonClickable = false;

    // Als het antwoord correct is, wordt dat aangegeven, de juiste knop groen gemarkeerd en het antwoord opgeslagen.
    // Als het fout is, wordt dat opgeslagen en wordt het foute antwoord ook gemarkeerd.
    if (answer == correct) {
        feedback.innerHTML = "Goed. 👍";
        antwoorden.push(answer);
        isCorrect.push(true);
        correctButton.style.background = "rgb(51, 153, 51)";
    } else {
        feedback.innerHTML = "Fout. 👎";
        antwoorden.push(answer);
        isCorrect.push(false);
        correctButton.style.background = "rgb(51, 153, 51)";
        pressedButton.style.background = "rgb(204, 0, 0)";
    };
    updateScoreCounter();
    nextQuestion.style.display = "inline-block";
};

function goToNextQuestion() {
    vraagNummer++;
    var allAnswerButtons = document.getElementsByClassName("answer-button");
    // Deze for-loop zorgt ervoor dat alle knoppen weer de normale kleur krijgen
    for (var i = 0; i < allAnswerButtons.length; i++) {
        allAnswerButtons[i].style.background = "transparent";
    }


    if (QUIZ_VRAGEN[vraagNummer] == null) { // hiermee herken ik of de quiz klaar is.
        showEndPage();
    } else {
        showQuestionsPage(vraagNummer)
    }
}

// Initialize
addButtonActions();
showStartPage();
boldButton(document.getElementById('button-start'));
console.info("Misschien werkt het geheime commando... 😉")