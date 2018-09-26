"use strict"

/**
 * Deze constante bevat alle vragen van de quiz en is dynamisch uit te breiden.
 */
const quizVragen = [
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
        vraag: "TESTVRAAG",
        antwoorden: {
            a: "TEST A",
            b: "TEST B",
            c: "TEST C voor CORRECT",
            d: "TEST D"
        },
        extra: '<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/ra6FtdXrH4Q?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
        correcteAntwoord: "c"
    }
];

var vraagNummer = 0; // Deze variabele houdt bij bij welke vraag we zijn.
var antwoorden = []; // Deze variabele houdt de antwoorden bij als "true" of "false".

// Dit is om de transparency van het scorebord te veranderen als je scrollt.
window.addEventListener('scroll', function () {
    document.body.classList[
        window.scrollY > 200 ? 'add': 'remove'
    ]('scrolled');
});
  

/**
 * Deze functie telt het aantal juiste antwoorden. Dit heb ik later nodig.
 */
function countTrue(array) {
    var onlyTrue = array.filter(value => value == true);
    var amountOfTrues = onlyTrue.length;
    return amountOfTrues;
};

/**
 * Deze functie maakt de navigatieknoppen bold op basis van op welke pagina je bent.
 */
function boldButton(btn) {
    // De for-loop zorgt ervoor dat beide knoppen eerst normaal worden gemaakt.
    var navButtons = document.getElementsByClassName('nav-button');
    for (var i = 0; i < navButtons.length; ++i) {
        var item = navButtons[i];
        item.style.fontWeight = 'normal';
    }

    // Dit verandert de zelfgekozen knop naar bold.
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
        boldButton(startButton);
    });
    questionsButton.addEventListener("click", function () {
        showQuestionsPage();
        boldButton(questionsButton);
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
 * Hide all pages
 */
function hideAllPages() {
    var startPage = document.getElementById('page-start');
    var questionsPage = document.getElementById('page-questions');

    startPage.style.display = 'none';   
    questionsPage.style.display = 'none';
}

/**
 * Show start page
 */
function showStartPage() {
    var page = document.getElementById('page-start');
    
    hideAllPages();

    page.style.display = 'block';

    console.info('Je bent nu op de startpagina');
}

/**
 * Show questions page
 */
function showQuestionsPage() {
    var page = document.getElementById('page-questions');
    
    hideAllPages();

    page.style.display = 'block';
    showQuestion(vraagNummer)
    points()

    console.info('Je bent nu op de vragenpagina');
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
    question.innerHTML = quizVragen[num].vraag;
    questionExtras.innerHTML = quizVragen[num].extra;
    answerButtonA.innerHTML = "a. " + quizVragen[num].antwoorden.a;
    answerButtonB.innerHTML = "b. " + quizVragen[num].antwoorden.b;
    answerButtonC.innerHTML = "c. " + quizVragen[num].antwoorden.c;
    answerButtonD.innerHTML = "d. " + quizVragen[num].antwoorden.d;
};

function points() {
    var scoreCounter = document.getElementById("score-counter");
    var score = countTrue(antwoorden);
    var total = quizVragen.length;

    scoreCounter.innerHTML = score + " van de " + total + " punten.";
};


/**
 * Deze functie definieert wat er gebeurt als je op een van de knoppen drukt.
 */
function answerPressed(answer) {
    var correct = quizVragen[vraagNummer].correcteAntwoord;
    if (answer == correct) {
        window.alert("Goed! 👍 Het antwoord is " + correct + ': "' + quizVragen[vraagNummer].antwoorden[correct] + '"');
        antwoorden.push(true);
    } else {
        window.alert("Fout. 👎 Het juiste antwoord is " + correct + ': "' + quizVragen[vraagNummer].antwoorden[correct] + '"');
        antwoorden.push(false);
    };
    vraagNummer = vraagNummer + 1;
    if (quizVragen[vraagNummer] == null) { // hiermee herken ik of de quiz klaar is.
        var amountTrue = countTrue(antwoorden); // dit gaat later weg
        window.alert("TESTING Je bent bij het einde van de quiz en je hebt " + amountTrue + " vraag/vragen goed. Vernieuw de pagina om de quiz opnieuw te proberen."); // Dit gaat later weg
    } else {
        showQuestionsPage(vraagNummer)
    }
    points()
};

// Initialize
addButtonActions();
showStartPage();
boldButton(document.getElementById('button-start'));
console.log("Misschien werkt het geheime commando... 😉")