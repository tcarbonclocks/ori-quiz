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
        vraag: "Wat is de uitkomst van het onderste stuk code?",
        antwoorden: {
            a: "ouden pal",
            b: "oud",
            c: "het goup",
            d: "ouden p"
        },
        extra: '<code>\
            var text = "het gouden paleis";\
            window.alert(text.substr(5, 7)\
        </code>',
        correcteAntwoord: "d"
    },
    {
        vraag: "TESTVRAAG",
        antwoorden: {
            a: "TEST A",
            b: "TEST B",
            c: "TEST C voor CORRECT",
            d: "TEST D"
        },
        extra: '<iframe src="https://www.youtube-nocookie.com/embed/ra6FtdXrH4Q?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
        correcteAntwoord: "c"
    },
];

var vraagNummer = 0; // Deze variabele houdt bij bij welke vraag we zijn.
var antwoorden = []; // Deze variabele houdt de antwoorden bij die de gebruiker geeft.
var isCorrect = []; // Deze variabele houdt antwoorden bij als true of false.


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

    startButton.addEventListener("click", function () {
        showStartPage();
    });
    questionsButton.addEventListener("click", function () {
        showQuestionsPage();
    });
    answerButtonA.addEventListener("click", function () {
        answerPressed("a")
    });
    answerButtonB.addEventListener("click", function () {
        answerPressed("b")
    });
    answerButtonC.addEventListener("click", function () {
        answerPressed("c")
    });
    answerButtonD.addEventListener("click", function () {
        answerPressed("d")
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

    startPage.style.display = 'none';   
    questionsPage.style.display = 'none';
    endPage.style.display = 'none';
    scoreBar.style.display = 'none';
}

/**
 * Show start page
 */
function showStartPage() {
    var page = document.getElementById('page-start');
    var startButton = document.getElementById('button-start');
    
    hideAllPages();

    page.style.display = 'block';
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
    points()

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

    questionTitle.innerHTML = "Vraag " + num;
    question.innerHTML = QUIZ_VRAGEN[num].vraag;
    questionExtras.innerHTML = QUIZ_VRAGEN[num].extra;
    answerButtonA.innerHTML = "a. " + QUIZ_VRAGEN[num].antwoorden.a;
    answerButtonB.innerHTML = "b. " + QUIZ_VRAGEN[num].antwoorden.b;
    answerButtonC.innerHTML = "c. " + QUIZ_VRAGEN[num].antwoorden.c;
    answerButtonD.innerHTML = "d. " + QUIZ_VRAGEN[num].antwoorden.d;
};

function points() {
    var scoreCounter = document.getElementById("score-counter");
    var score = countTrue(isCorrect);
    var total = QUIZ_VRAGEN.length;

    scoreCounter.innerHTML = score + " van de " + total + " punten";
};


/**
 * Deze functie definieert wat er gebeurt als je op een van de knoppen drukt.
 */
function answerPressed(answer) {
    var correct = QUIZ_VRAGEN[vraagNummer].correcteAntwoord;
    if (answer == correct) {
        window.alert("Goed! 👍 Het antwoord is " + correct + ': "' + QUIZ_VRAGEN[vraagNummer].antwoorden[correct] + '"');
        antwoorden.push(answer)
        isCorrect.push(true);
    } else {
        window.alert("Fout. 👎 Het juiste antwoord is " + correct + ': "' + QUIZ_VRAGEN[vraagNummer].antwoorden[correct] + '"');
        antwoorden.push(answer);
        isCorrect.push(false);
    };
    vraagNummer = vraagNummer + 1;
    if (QUIZ_VRAGEN[vraagNummer] == null) { // hiermee herken ik of de quiz klaar is.
        showEndPage();
    } else {
        showQuestionsPage(vraagNummer)
    }
    points()
};

// Initialize
addButtonActions();
showStartPage();
boldButton(document.getElementById('button-start'));
console.info("Misschien werkt het geheime commando... 😉")