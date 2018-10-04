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
    {
        vraag: "Hoe kom ik bij mijnAppel?",
        antwoorden: {
            a: "rugTas.boodschappenTas.fruitZakje.appelZakje[1]",
            b: "rugTas.schoolTas[2]",
            c: "rugTas.schoolTas[1]",
            d: "rugTas.schoolTas.1"
        },
        extra: '<code>\
        var rugTas = { </br>\
            boodschappenTas: {</br>\
                broodZakje: ["pistolets", "croissants"],</br>\
                fruitZakje: {</br>\
                    perenZakje: ["peer 1", "peer 2", "peer3"],</br>\
                    appelZakje: ["peer 4", "voordeelbon", "appel 1"]</br>\
                },</br>\
            },</br>\
            schoolTas: ["collegeblok", "mijnAppel", "etui", "portaal naar andere dimensie"],</br>\
        };\
        </code>',
        correcteAntwoord: "c"
    },
    {
        vraag: "Van welk programma is dit het logo?",
        antwoorden: {
            a: "Git",
            b: "Visual Studio",
            c: "Visual Studio Code",
            d: "Linux Version Control"
        },
        extra: '<img src=pictures/programmaLogo.png>',
        correcteAntwoord: "a"
    },
    {
        vraag: "Met wat kan ik in de CSS de achtergrondkleur veranderen als mijn muis over de knop zweeft?",
        antwoorden: {
            a: ":mouseover",
            b: ":hover",
            c: ":mousecheck",
            d: ".hover"
        },
        extra: '<video autoplay loop muted>\
        <source src="pictures/hoverEffect.mp4" type="video/mp4">\
        </video>',
        correcteAntwoord: "b"
    },
    {
        vraag: "Hoe kan ik de startpagina (variabele 'start') laten verdwijnen met JavaScript?",
        antwoorden: {
            a: "start.display = 'off'",
            b: "start.style.display = 'off'",
            c: "start.style.display = 'none'",
            d: "start.show = 'none'"
        },
        extra: '<video width=320 autoplay loop muted>\
        <source src="pictures/displayNone.mp4" type="video/mp4">\
        </video>',
        correcteAntwoord: "c"
    },
    {
        vraag: "Hoe definieer ik een class in CSS?",
        antwoorden: {
            a: ".class",
            b: "#class",
            c: ":class",
            d: "class"
        },
        extra: "",
        correcteAntwoord: "a"
    },
    {
        vraag: "Hoeveel vragen hebben we al gehad?",
        antwoorden: {
            a: "Acht",
            b: "Negen",
            c: "Tien",
            d: "Elf"
        },
        extra: "",
        correcteAntwoord: "c"
    }, 
    {
        vraag: "Van boven naar onder, welke woorden missen hier?",
        antwoorden: {
            a: "border, padding en margin",
            b: "margin, padding en border",
            c: "pading, border en margin",
            d: "margin, border en padding"
        },
        extra: "<img src=pictures/boxModel.png>",
        correcteAntwoord: "d"
    },
    {
        vraag: "Hoe kan ik d.m.v. JavaScript deze knop (variabele 'button') een groene kleur geven?",
        antwoorden: {
            a: "button.style.background = 'green'",
            b: "button.style.backgroundColour = 'green'",
            c: "button.body.style.background = 'green'",
            d: "button.background = 'green'"
        },
        extra: '<video width=320 autoplay loop muted>\
        <source src="pictures/green.mp4" type="video/mp4">\
        </video>',
        correcteAntwoord: "a"
    },
    {
        vraag: "Hoe kan ik in Git mijn veranderingen naar de server uploaden?",
        antwoorden: {
            a: "git fetch",
            b: "git push",
            c: "git upload",
            d: "git share"
        },
        extra: '<img src=pictures/programmaLogo.png>',
        correcteAntwoord: "b"
    },
    {
        vraag: "Wat voor soort element is het h2-element?",
        antwoorden: {
            a: "Een block-element",
            b: "Een inline-element",
            c: "Een inline-block-element",
            d: "Een relative-element"
        },
        extra: "",
        correcteAntwoord: "a"
    },
    {
        vraag: "Wat voor datatype is dit?",
        antwoorden: {
            a: "Een object",
            b: "Een array",
            c: "Een string",
            d: "Een multidimensionale array"
        },
        extra: "<code>var HansBastiaan = {gender: 'male', teaches: 'ORI', likesArrays: true}</code>",
        correcteAntwoord: "a"
    },
    {
        vraag: "Wat is i++?",
        antwoorden: {
            a: "De opvolger van h++",
            b: "i + 1",
            c: "i + 2",
            d: "ii"
        },
        extra: "",
        correcteAntwoord: "b"
    },
    {
        vraag: "Hoe zorg ik ervoor dat er niet meer dan 8 karakters in mijn input kunnen?",
        antwoorden: {
            a: "limit='8'",
            b: "length='8'",
            c: "maxlength='8'",
            d: "maxChracters='8'"
        },
        extra: "<img src=pictures/textField.png>",
        correcteAntwoord: "c"
    },
    {
        vraag: "Hoe kan ik de waarde van deze input (variabele 'input') in een variabele stoppen?",
        antwoorden: {
            a: "var output = input.output;",
            b: "var typed = input.typed;",
            c: "var content = input.content;",
            d: "var value = input.value;"
        },
        extra: "<img src=pictures/textField.png>",
        correcteAntwoord: "d"
    },
    {
        vraag: "Wat is het datatype van de volgende variabele?",
        antwoorden: {
            a: "Een object",
            b: "Een array",
            c: "Een string",
            d: "Een boolean"
        },
        extra: "<code>var SuperClass = document.getElementsByClassName('class')</code>",
        correcteAntwoord: "b"
    }, 
];

var vraagNummer = 0; // Deze variabele houdt bij bij welke vraag we zijn.
var antwoorden = []; // Deze variabele houdt de antwoorden bij die de gebruiker geeft.
var isCorrect = []; // Deze variabele houdt antwoorden bij als true of false.
var alreadyPlayed = [];
var answerButtonClickable, studentInfo, startTime, endTime, leaderboard;

// Converteert milliseconden naar minuten en seconden, met dank aan https://stackoverflow.com/questions/21294302/converting-milliseconds-to-minutes-and-seconds-with-javascript
function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = Math.floor((millis % 60000) / 1000);
    return minutes + (minutes = 1 ? ' minuut en ' : ' minuten en ') + seconds + " seconden";
};

function secondsToMinutesAndSeconds(inputseconds) {
    var minutes = Math.floor(inputseconds / 60);
    var seconds = Math.floor(inputseconds % 60);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
};

/**
 * Get leaderboard  
 */
function getLeaderBoard() {
    var xHttp = new XMLHttpRequest();
    xHttp.onreadystatechange = function () {
        if (xHttp.readyState == XMLHttpRequest.DONE) {
            var response = JSON.parse(xHttp.response);
            if (xHttp.status == 200) {
                console.info("Leaderboard is geladen");
                console.log(response);
                sortLeaderboard(response);
                showLeaderboard();
            } else {
                console.error(response);
            };
        };
    };
    xHttp.onerror = function () {
        console.error(xHttp.statusText)
    };
    xHttp.open("GET", "https://quiz.clow.nl/v1/highscores/s1132653", true);
    xHttp.send();
};

/**
 * Sort array by value in objects (https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value-in-javascript)
 * and then creates the leaderboard .
 */
function sortLeaderboard(array) {
    function compare(a,b) {
        if (b.points < a.points)
          return -1;
        if (b.points > a.points)
          return 1;
        return 0;
    };
    array.sort(compare);
    leaderboard = array;
};


function makeAlreadyPlayedArray() {
    alreadyPlayed = [];
    getLeaderBoard();
    for (var i = 0; i < leaderboard.length; i++) {
        alreadyPlayed.push(leaderboard[i].player.number);
    };
};

function checkAlreadyPlayed(num) {
    makeAlreadyPlayedArray();

    if (alreadyPlayed.includes(num)) {
        return true;
    } else {
        return false;
    };
};

/**
 * Function to send score to leaderboard 
 */
function sendScore(student, points, time) {
    var xHttp = new XMLHttpRequest();
    var sendScoreResult = document.getElementById("sendscore-result");

    xHttp.onreadystatechange = function () {
        if (xHttp.readyState == XMLHttpRequest.DONE) {
            if (xHttp.status == 200) {
                console.info("Score succesvol opgeslagen");
            } else {
                console.error("Score niet succesvol opgeslagen");
                sendScoreResult.innerHTML = "Door een fout kon je score jammer genoeg niet opgeslagen worden.";
            }
        }
    };
    
    xHttp.onerror = function () {
        console.error("Score niet succesvol opgeslagen");
    };

    xHttp.open("POST", "https://quiz.clow.nl/v1/score", true)
    xHttp.setRequestHeader('Content-Type', 'application/json');
    xHttp.send(JSON.stringify({
        quizMaster: "s1132653",
        student: student,
        points: points,
        time: time,
    }));
};


/**
 * Check student number using the API (copied from US10)
 */
function checkStudent(number) {
    var xHttp = new XMLHttpRequest();
    xHttp.onreadystatechange = function () {
        if (xHttp.readyState == XMLHttpRequest.DONE) {
            var response = JSON.parse(xHttp.response);
            if (xHttp.status == 200) {
                studentIdentificationSucces(response);
            } else {
                studentIdentificationFailed(response);
            }
        }
    };
    xHttp.onerror = function () {
        studentIdentificationFailed(xHttp.statusText);
    };
    xHttp.open("GET", "https://quiz.clow.nl/v1/student/" + number, true);
    xHttp.send();
}

/**
 * Student is successfully identified (copied from US10)
 */
function studentIdentificationSucces(student) {
    var loginStatus = document.getElementById('login-status');

    console.info(student); // Een Javascript-object met studentnummer, voornaam en achternaam

    // Schrijf hier de code die uitgevoerd moet worden als het studentnummer klopt

    loginStatus.style.color = "rgb(51, 153, 51)"
    loginStatus.innerHTML = "Welkom " + student.firstName + " " + student.lastName + ". Veel succes met de quiz.";
    studentInfo = student;

    setTimeout(function () {
        showQuestionsPage();
        startTime = Date.now();
    }, 3000)

}

/**
 * Student number is incorrect (copied from US10)
 */
function studentIdentificationFailed(errorMessage) {
    var loginStatus = document.getElementById('login-status');
    
    console.error(errorMessage);

    // Schrijf hier de code die uitgevoerd moet worden als het studentnummer NIET klopt

    loginStatus.style.color = "rgb(204, 0, 0)";
    loginStatus.innerHTML = "Studentnummer onjuist. Probeer het opnieuw.";
}


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
    var leaderboardButton = document.getElementById("button-leaderboard");
    var loginButton = document.getElementById('button-login');
    var answerButtonA = document.getElementById('answerA');
    var answerButtonB = document.getElementById('answerB');
    var answerButtonC = document.getElementById('answerC');
    var answerButtonD = document.getElementById('answerD');
    var nextQuestion = document.getElementById('next-question');
    var checkButton = document.getElementById('check-number');
    var studentNumber = document.getElementById('studentnummer');

    var loginStatus = document.getElementById('login-status');

    startButton.addEventListener("click", function () {
        showStartPage();
    });
    leaderboardButton.addEventListener("click", function () {
        showLeaderboardPage();
    });
    loginButton.addEventListener("click", function () {
        showLoginPage();
    });
    checkButton.addEventListener("click", function () {
        if (checkAlreadyPlayed(studentNumber.value) == true) {
            loginStatus.style.color = "rgb(204, 0, 0)";
            loginStatus.innerHTML = "Je mag de quiz niet meer dan 1 keer spelen.";
        } else {
            checkStudent(studentNumber.value);
        };
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
    var leaderboardPage = document.getElementById('page-leaderboard');
    var loginPage = document.getElementById('page-login');
    var questionsPage = document.getElementById('page-questions');
    var endPage = document.getElementById('page-end');
    var scoreBar = document.getElementById('scorebar');
    var navBar  = document.getElementById('nav-bar');

    startPage.style.display = 'none';   
    leaderboardPage.style.display = 'none';
    loginPage.style.display = 'none';
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
};

function showLeaderboardPage() {
    var page = document.getElementById("page-leaderboard");
    var leaderboardButton = document.getElementById("button-leaderboard");
    var navBar = document.getElementById('nav-bar');

    hideAllPages();


    page.style.display = 'block';
    navBar.style.display = 'block';
    unBoldAllButtons();
    boldButton(leaderboardButton);

    getLeaderBoard();

    console.info("Je bent nu op de leaderboard-pagina.");
};


function showLeaderboard() {
    var LB1 = document.getElementById("lb1");
    var LB2 = document.getElementById("lb2");
    var LB3 = document.getElementById("lb3");
    var LB4 = document.getElementById("lb4");
    var LB5 = document.getElementById("lb5");
    var LB6 = document.getElementById("lb6");
    var LB7 = document.getElementById("lb7");
    var LB8 = document.getElementById("lb8");
    var LB9 = document.getElementById("lb9");
    var LB10 = document.getElementById("lb10");

    LB1.innerHTML = leaderboard[0].player.firstName + " " + leaderboard[0].player.lastName + " (" + leaderboard[0].player.number + "), " + leaderboard[0].points + " punten, " + secondsToMinutesAndSeconds(leaderboard[0].time);
    LB2.innerHTML = leaderboard[1].player.firstName + " " + leaderboard[1].player.lastName + " (" + leaderboard[1].player.number + "), " + leaderboard[1].points + " punten, " + secondsToMinutesAndSeconds(leaderboard[1].time);
    LB3.innerHTML = leaderboard[2].player.firstName + " " + leaderboard[2].player.lastName + " (" + leaderboard[2].player.number + "), " + leaderboard[2].points + " punten, " + secondsToMinutesAndSeconds(leaderboard[2].time);
    LB4.innerHTML = leaderboard[3].player.firstName + " " + leaderboard[3].player.lastName + " (" + leaderboard[3].player.number + "), " + leaderboard[3].points + " punten, " + secondsToMinutesAndSeconds(leaderboard[3].time);
    LB5.innerHTML = leaderboard[4].player.firstName + " " + leaderboard[4].player.lastName + " (" + leaderboard[4].player.number + "), " + leaderboard[4].points + " punten, " + secondsToMinutesAndSeconds(leaderboard[4].time);
    LB6.innerHTML = leaderboard[5].player.firstName + " " + leaderboard[5].player.lastName + " (" + leaderboard[5].player.number + "), " + leaderboard[5].points + " punten, " + secondsToMinutesAndSeconds(leaderboard[5].time);
    LB7.innerHTML = leaderboard[6].player.firstName + " " + leaderboard[6].player.lastName + " (" + leaderboard[6].player.number + "), " + leaderboard[6].points + " punten, " + secondsToMinutesAndSeconds(leaderboard[6].time);
    LB8.innerHTML = leaderboard[7].player.firstName + " " + leaderboard[7].player.lastName + " (" + leaderboard[7].player.number + "), " + leaderboard[7].points + " punten, " + secondsToMinutesAndSeconds(leaderboard[7].time);
    LB9.innerHTML = leaderboard[8].player.firstName + " " + leaderboard[8].player.lastName + " (" + leaderboard[8].player.number + "), " + leaderboard[8].points + " punten, " + secondsToMinutesAndSeconds(leaderboard[8].time);
    LB10.innerHTML = leaderboard[9].player.firstName + " " + leaderboard[9].player.lastName + " (" + leaderboard[9].player.number + "), " + leaderboard[9].points + " punten, " + secondsToMinutesAndSeconds(leaderboard[9].time);
};

/**
 * Show login page
 */
function showLoginPage() {
    var page = document.getElementById('page-login');
    var loginButton = document.getElementById('button-login');
    var navBar = document.getElementById('nav-bar');

    hideAllPages();

    getLeaderBoard(); // om te checken of iemand al heeft gespeeld, ben ik afhankelijk van de leaderboard.

    page.style.display = 'block';
    navBar.style.display = 'block';
    unBoldAllButtons();
    boldButton(loginButton);

    console.info('Je bent nu op de loginpagina.')
};

/**
 * Show questions page
 */
function showQuestionsPage() {
    var page = document.getElementById('page-questions');
    var scoreBar = document.getElementById('scorebar');
    
    hideAllPages();

    page.style.display = 'block';
    scoreBar.style.display = 'block';
    unBoldAllButtons();
    showQuestion(vraagNummer)
    updateScoreCounter()

    console.info('Je bent nu op de vragenpagina');
};

/**
 * Show end page that appears after all questions have been answered
 */
function showEndPage() {
    var page = document.getElementById('page-end');
    var navBar = document.getElementById('nav-bar');

    var endIntro = document.getElementById('end-intro');
    var endScore = document.getElementById('end-score');
    var endTimeElapsed = document.getElementById('end-time-elapsed');
    var endResult = document.getElementById('end-result');

    var score = countTrue(isCorrect);
    var total = QUIZ_VRAGEN.length;

    hideAllPages();

    navBar.style.display = 'none';
    page.style.display = 'block';

    endTime = Date.now();
    var quizTime = (endTime - startTime);
    var quizTimeInSec = (quizTime) / 1000; 
    var quizTimeinMinSec = millisToMinutesAndSeconds(quizTime);
    
    if (quizTimeInSec < 3600 && quizTime > 0) {
        sendScore(studentInfo.number, countTrue(isCorrect), quizTimeInSec);
    } else {
        sendScoreResult.innerHTML = "Door een fout kon je score jammer genoeg niet opgeslagen worden.";
        console.error("Tijd te lang of te kort"); 
    };

    endIntro.innerHTML = "Je bent bij het einde van de quiz gekomen, " + studentInfo.firstName + ".";
    endScore.innerHTML = "Je hebt in totaal " + score + " vragen van de " + total + " goed beantwoord.";
    endTimeElapsed.innerHTML = "Het maken van de quiz duurde " + quizTimeinMinSec + ".";
    if (score == total) {
        endResult.innerHTML = "Je hebt alles goed 🤯. Goed zo!";
    } else if ((score / total) >= 0.5) {
        endResult.innerHTML = "Je hebt (meer dan) de helft goed 😃. Voldoende.";
    } else {
        endResult.innerHTML = "Jammer 😔! Je hebt minder dan de helft goed."
        var audio = new Audio('pictures/loss.ogg');
        audio.volume = 0.5;
        audio.play();
    }

    console.info('Je bent nu op de eindpagina van de quiz.');
};

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

    scoreCounter.innerHTML = score + " van de " + total + " punten, ingelogd als " + studentInfo.firstName + " " + studentInfo.lastName + " ("+ studentInfo.number + ")";

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
        showQuestion(vraagNummer)
    }
}

// Initialize
addButtonActions();
showStartPage();
boldButton(document.getElementById('button-start'));
console.info("Misschien werkt het geheime commando... 😉")