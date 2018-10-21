/*jshint esversion: 6 */
"use strict";

/**
 * This constant contains all questions to the quiz.
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
        extra: "<img src=pictures/nummerNul.png>"
    },
    {
        vraag: "Hoe maak je een lijst met nummers in het begin?",
        antwoorden: {
            a: "Met een bl-element",
            b: "Met een ol-element",
            c: "Met een ul-element",
            d: "Met een al-element"
        },
        extra: "<img src=pictures/numberedlist.png>"
    },
    {
        vraag: "Wat is de uitkomst van het onderste stuk JavaScript-code?",
        antwoorden: {
            a: "ouden pal",
            b: "oud",
            c: "het gou",
            d: "ouden p"
        },
        extra: '<code>' +
        '    var text = "het gouden paleis";</br>' +
        '    window.alert(text.substr(5, 7));' +
        '</code>'
    },
    {
        vraag: "Wat is de uitkomst van het onderste stuk JavaScript-code?",
        antwoorden: {
            a: "true en true",
            b: "true en false",
            c: "false en true",
            d: "false en false"
        },
        extra: '<code>' +
        '    window.alert(9 == "9");</br>' +
        '    window.alert(9 === "9");' +
        '</code>'
    },
    {
        vraag: "In welk bestand kan ik de grootte van de deze video veranderen?",
        antwoorden: {
            a: "Het HTML-bestand",
            b: "Het CSS-bestand",
            c: "Het JavaScript-bestand",
            d: "Alledrie"
        },
        extra: '<iframe src="https://www.youtube-nocookie.com/embed/ra6FtdXrH4Q?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
    },
    {
        vraag: "Hoe kom ik bij mijnAppel?",
        antwoorden: {
            a: "rugTas.boodschappenTas.fruitZakje.appelZakje[1]",
            b: "rugTas.schoolTas[2]",
            c: "rugTas.schoolTas[1]",
            d: "rugTas.schoolTas.1"
        },
        extra: '<code>' +
        'var rugTas = { </br>' +
        '    boodschappenTas: {</br>' +
        '        broodZakje: ["pistolets", "croissants"],</br>' +
        '       fruitZakje: {</br>' +
        '            perenZakje: ["peer 1", "peer 2", "peer3"],</br>' +
        '            appelZakje: ["peer 4", "voordeelbon", "appel 1"]</br>' +
        '        },</br>' +
        '    },</br>' +
        '    schoolTas: ["collegeblok", "mijnAppel", "etui", "portaal naar andere dimensie"],</br>' +
        '};' +
        '</code>'
    },
    {
        vraag: "Van welk programma is dit het logo?",
        antwoorden: {
            a: "Git",
            b: "Visual Studio",
            c: "Visual Studio Code",
            d: "Linux Version Control"
        },
        extra: '<img src=pictures/programmaLogo.png>'
    },
    {
        vraag: "Met wat kan ik in de CSS de achtergrondkleur veranderen als mijn muis over de knop zweeft?",
        antwoorden: {
            a: ":mouseover",
            b: ":hover",
            c: ":mousecheck",
            d: ".hover"
        },
        extra: '<video autoplay loop muted playsinline>' +
        '<source src="pictures/hoverEffect.mp4" type="video/mp4">' +
        '</video>'
    },
    {
        vraag: "Hoe kan ik de startpagina (variabele 'start') laten verdwijnen met JavaScript?",
        antwoorden: {
            a: "start.display = 'off'",
            b: "start.style.display = 'off'",
            c: "start.style.display = 'none'",
            d: "start.show = 'none'"
        },
        extra: '<video width=320 autoplay loop muted playsinline>' +
        '<source src="pictures/displayNone.mp4" type="video/mp4">' +
        '</video>'
    },
    {
        vraag: "Hoe definieer ik een class in CSS?",
        antwoorden: {
            a: ".class",
            b: "#class",
            c: ":class",
            d: "class"
        },
        extra: ""
    },
    {
        vraag: "Welke bewering is waar?",
        antwoorden: {
            a: "We zijn bij de negende vraag en de maker heeft in de vraagtitel '- 1' vergeten.",
            b: "We zijn bij de tiende vraag.",
            c: "We zijn bij de elfde vraag en de maker heeft in de vraagtitel '+ 1' vergeten.",
            d: "We zijn bij de twaalfde vraag en de maker heeft in de vraagtitel '+ 2' vergeten."
        },
        extra: ""
    }, 
    {
        vraag: "Van boven naar onder, welke woorden missen hier?",
        antwoorden: {
            a: "border, padding en margin",
            b: "margin, padding en border",
            c: "pading, border en margin",
            d: "margin, border en padding"
        },
        extra: "<img src=pictures/boxModel.png>"
    },
    {
        vraag: "Hoe kan ik d.m.v. JavaScript deze knop (variabele 'button') een groene kleur geven?",
        antwoorden: {
            a: "button.style.background = 'green'",
            b: "button.style.backgroundColour = 'green'",
            c: "button.body.style.background = 'green'",
            d: "button.background = 'green'"
        },
        extra: '<video width=320 autoplay loop muted playsinline>' +
        '<source src="pictures/green.mp4" type="video/mp4">' +
        '</video>'
    },
    {
        vraag: "Hoe kan ik in Git mijn veranderingen naar de server uploaden?",
        antwoorden: {
            a: "git fetch",
            b: "git push",
            c: "git upload",
            d: "git share"
        },
        extra: '<img src=pictures/programmaLogo.png>'
    },
    {
        vraag: "Wat voor soort element is het h2-element?",
        antwoorden: {
            a: "Een block-element",
            b: "Een inline-element",
            c: "Een inline-block-element",
            d: "Een relative-element"
        },
        extra: ""
    },
    {
        vraag: "Wat voor datatype is dit?",
        antwoorden: {
            a: "Een object",
            b: "Een array",
            c: "Een string",
            d: "Een multidimensionale array"
        },
        extra: "<code>var HansBastiaan = {gender: 'male', teaches: 'ORI', likesArrays: true}</code>"
    },
    {
        vraag: "Wat is i++?",
        antwoorden: {
            a: "De opvolger van h++",
            b: "i + 1",
            c: "i + 2",
            d: "ii"
        },
        extra: ""
    },
    {
        vraag: "Hoe zorg ik ervoor dat er niet meer dan 8 karakters in mijn input kunnen?",
        antwoorden: {
            a: "limit='8'",
            b: "length='8'",
            c: "maxlength='8'",
            d: "maxChracters='8'"
        },
        extra: "<img src=pictures/textField.png>"
    },
    {
        vraag: "Hoe kan ik de waarde van deze input (variabele 'input') in een variabele stoppen?",
        antwoorden: {
            a: "var output = input.output;",
            b: "var typed = input.typed;",
            c: "var content = input.content;",
            d: "var value = input.value;"
        },
        extra: "<img src=pictures/textField.png>"
    },
    {
        vraag: "Wat is het datatype van de volgende variabele?",
        antwoorden: {
            a: "Een object",
            b: "Een array",
            c: "Een string",
            d: "Een boolean"
        },
        extra: "<code>var SuperClass = document.getElementsByClassName('class')</code>"
    }, 
];

/**
 * This constant contains all correct answers. Yes, that's right.
 */
const CORRECTE_ANTWOORDEN = "YWJkYmRjYWJjYWNkYWJhYWJjZGI=";

var questionNumber = 0; // This variable keeps track of at which question we are.
var answers = []; // This array stores the answers given by the player.
var isCorrect = []; // This array stores if the answers given are correct.
var answerButtonClickable; // This boolean makes sure that the answer buttons can't be pressed when looking back etc.
var studentInfo; // This array stores the student data retrieved from the API to be used in different parts of the quiz.
var startTime, endTime; // These variables keep track of the times (since 1970). endTime - startTime = quiz time.
var leaderboard; // This array globally stores the leaderboard, retrieved from the API.

/**
 * Converts milliseconds to minutes and seconds, for the end screen.
 * Thanks to https://stackoverflow.com/questions/21294302/converting-milliseconds-to-minutes-and-seconds-with-javascript 
 * @param {integer} millis Time in milliseconds 
 */
function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = Math.floor((millis % 60000) / 1000);
    return minutes + (minutes == 1 ? ' minuut en ' : ' minuten en ') + seconds + " seconden";
}

/**
 * Converts seconds to minutes and seconds.
 * Used on the leaderboard.
 * @param {integer} inputseconds Time in seconds
 */
function secondsToMinutesAndSeconds(inputseconds) {
    var minutes = Math.floor(inputseconds / 60);
    var seconds = Math.floor(inputseconds % 60);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

/**
 * Gets leaderboard from API
 * and calls two other functions to sort and show the leaderboard.
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
            }
        }
    };
    xHttp.onerror = function () {
        console.error(xHttp.statusText);
    };
    xHttp.open("GET", "https://quiz.clow.nl/v1/highscores/s1132653", true);
    xHttp.send();
}

/**
 * Sort array by value in objects (https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value-in-javascript)
 * and then creates the leaderboard .
 * @param {array} array Array to be sorted, in this case the leaderboard. 
 */
function sortLeaderboard(array) {
    function compare(a,b) {
        if (b.points < a.points)
          return -1;
        if (b.points > a.points)
          return 1;
        return 0;
    }
    array.sort(compare);
    leaderboard = array;
}

/**
 * Sends score of the player to the Quiz-API.
 * @param {string} student Student number of player
 * @param {*} points Points of player
 * @param {*} time Time the player has spent
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

    xHttp.open("POST", "https://quiz.clow.nl/v1/score", true);
    xHttp.setRequestHeader('Content-Type', 'application/json');
    xHttp.send(JSON.stringify({
        quizMaster: "s1132653",
        student: student,
        points: points,
        time: time,
    }));
}


/**
 * Before checking if the student number exists, this function checks if the input is empty.
 * With this, I can avoid an error 500 from the API.
 * @param {string} number 
 */
function checkIfEmpty(number) {
    if (number === "") {
        studentIdentificationFailed("Het kan niet leeg zijn.");
    } else {
        checkStudent(number);
    }
}

/**
 * Check if student number exists using the API (copied from US10)
 * and returns with either one of two functions.
 * @param {string} number Student number given
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
 * Quiz gets started the the timer begins.
 * @param {string} student Student number
 */
function studentIdentificationSucces(student) {
    var loginStatus = document.getElementById('login-status');
    var studentNumber = document.getElementById("studentnummer");
    console.info(student); // Een Javascript-object met studentnummer, voornaam en achternaam

    // Schrijf hier de code die uitgevoerd moet worden als het studentnummer klopt

    loginStatus.style.color = "rgb(51, 153, 51)";
    loginStatus.innerHTML = "Welkom " + student.firstName + " " + student.lastName + ". Veel succes met de quiz.";
    studentNumber.setAttribute("readonly", true);
    studentInfo = student;

    setTimeout(function () {
        showQuestionsPage();
        startTime = Date.now();
    }, 3000);

}

/**
 * Student number is incorrect (copied from US10)
 * @param {*} errorMessage Error message from API
 */
function studentIdentificationFailed(errorMessage) {
    var loginStatus = document.getElementById('login-status');
    
    console.error(errorMessage);

    // Schrijf hier de code die uitgevoerd moet worden als het studentnummer NIET klopt

    loginStatus.style.color = "rgb(204, 0, 0)";
    loginStatus.innerHTML = "Studentnummer onjuist. Probeer het opnieuw.";
}


/**
 * Counts the amount of trues in an array.
 * Used in the quiz to count the amount of points.
 * @param {array} array Array, in this case the isCorrect array
 */
function countTrue(array) {
    var onlyTrue = array.filter(value => value === true);
    var amountOfTrues = onlyTrue.length;
    return amountOfTrues;
}

/**
 * Makes all buttons on the nav bar un-bold.
 */
function unBoldAllButtons() {
    var navButtons = document.getElementsByClassName('nav-button');
    for (var i = 0; i < navButtons.length; ++i) {
        var item = navButtons[i];
        item.style.fontWeight = 'normal';
    }
}

/**
 * Makes chosen nav button bold.
 * @param {*} btn name of button
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
    var currentQuestion = document.getElementById('current-question');
    var previousQuestion = document.getElementById('previous-question');
    var checkButton = document.getElementById('check-number');
    var studentNumber = document.getElementById('studentnummer');

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
        checkIfEmpty(studentNumber.value);
    });
    // also runs checkStudent if user presses the enter button, thanks to https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp
    studentNumber.addEventListener("keyup", function (event) {
        // Cancel default action
        event.preventDefault();

        // Detect if enter key (key 13) is pressed
        if (event.keyCode === 13) {
            checkIfEmpty(studentNumber.value);
        }
    });
    answerButtonA.addEventListener("click", function () {
        if (answerButtonClickable === true) {
            answerPressed("a");
        }
    });
    answerButtonB.addEventListener("click", function () {
        if (answerButtonClickable === true) {
            answerPressed("b");
        }
    });
    answerButtonC.addEventListener("click", function () {
        if (answerButtonClickable === true) {
            answerPressed("c");
        }
    });
    answerButtonD.addEventListener("click", function () {
        if (answerButtonClickable === true) {
            answerPressed("d");
        }
    });
    nextQuestion.addEventListener("click", function () {
        goToNextQuestion(); 
    });
    currentQuestion.addEventListener("click", function () {
        showQuestion(questionNumber);
    });
    previousQuestion.addEventListener("click", function () {
        showPreviousQuestion(questionNumber);
    });
}

/**
 * Hide all pages, the score bar and the nav bar.
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
}

/**
 * Show leaderboard page and gets leaderboard
 */
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
}

/**
 * Shows the entries of the leaderboard itself.
 */
function showLeaderboard() {
    var LB = document.getElementsByClassName("leaderboardentry");
    var LBError = document.getElementById("lberrortext");

    try {
        for (var i = 0; i < LB.length; i++) {
            LB[i].innerHTML = leaderboard[i].player.firstName + " " + leaderboard[i].player.lastName + ", " + leaderboard[i].points + (leaderboard[i].points == 1 ? ' punt, ' : ' punten, ') + secondsToMinutesAndSeconds(leaderboard[i].time);
        }
    } catch(err) {
        LBError.innerHTML = "De leaderboard is nog niet vol, doordat er nog niet genoeg spelers zijn.";
    }
}

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

    console.info('Je bent nu op de loginpagina.');
}

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
    showQuestion(questionNumber);
    updateScoreCounter();

    console.info('Je bent nu op de vragenpagina');
}

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
    var sendScoreResult = document.getElementById('sendscore-result');

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
    }

    endIntro.innerHTML = "Je bent bij het einde van de quiz gekomen, " + studentInfo.firstName + ".";
    endScore.innerHTML = "Je hebt in totaal " + score + " vragen van de " + total + " goed beantwoord.";
    endTimeElapsed.innerHTML = "Het maken van de quiz duurde " + quizTimeinMinSec + ".";
    if (score == total) {
        endResult.innerHTML = "Je hebt alles goed 🤯. Goed zo!";
    } else if ((score / total) >= 0.5) {
        endResult.innerHTML = "Je hebt (meer dan) de helft goed 😃. Voldoende.";
    } else {
        endResult.innerHTML = "Jammer 😔! Je hebt minder dan de helft goed. </br> <audio controls><source src='pictures/loss.ogg' type='audio/ogg'></audio>";
    }

    console.info('Je bent nu op de eindpagina van de quiz.');
}

/**
 * Shows the question on the question page using innerHTML.
 * @param {*} num (Current) question number
 */
function showQuestion(num) {
    var allAnswerButtons = document.getElementsByClassName("answer-button");
    // Deze for-loop zorgt ervoor dat alle knoppen weer de normale kleur krijgen
    for (var i = 0; i < allAnswerButtons.length; i++) {
        allAnswerButtons[i].style.background = "transparent";
    }

    var questionTitle = document.getElementById("question-title");
    var question = document.getElementById("question");
    var questionExtras = document.getElementById("question-extras");
    var answerButtonA = document.getElementById('answerA');
    var answerButtonB = document.getElementById('answerB');
    var answerButtonC = document.getElementById('answerC');
    var answerButtonD = document.getElementById('answerD');
    var feedback = document.getElementById('feedback');
    var nextQuestion = document.getElementById('next-question');
    var currentQuestion = document.getElementById('current-question');
    var previousQuestion = document.getElementById('previous-question');

    questionTitle.innerHTML = "Vraag " + num;
    question.innerHTML = QUIZ_VRAGEN[num].vraag;
    questionExtras.innerHTML = QUIZ_VRAGEN[num].extra;
    answerButtonA.innerHTML = "a. " + QUIZ_VRAGEN[num].antwoorden.a;
    answerButtonB.innerHTML = "b. " + QUIZ_VRAGEN[num].antwoorden.b;
    answerButtonC.innerHTML = "c. " + QUIZ_VRAGEN[num].antwoorden.c;
    answerButtonD.innerHTML = "d. " + QUIZ_VRAGEN[num].antwoorden.d;
    feedback.innerHTML = "";

    answerButtonClickable = true;
    nextQuestion.style.display = 'none';
    currentQuestion.style.display = 'none';
    if (num === 0) {
        previousQuestion.style.display = 'none';
    } else {
        previousQuestion.style.display = 'inline-block';
    }
}


/**
 * Allows the player to look back to the previous question.
 * @param {*} num  Number of current question
 */
function showPreviousQuestion(num) {
    var questionTitle = document.getElementById("question-title");
    var question = document.getElementById("question");
    var questionExtras = document.getElementById("question-extras");
    var answerButtonA = document.getElementById('answerA');
    var answerButtonB = document.getElementById('answerB');
    var answerButtonC = document.getElementById('answerC');
    var answerButtonD = document.getElementById('answerD');
    var feedback = document.getElementById('feedback');
    var nextQuestion = document.getElementById('next-question');
    var currentQuestion = document.getElementById('current-question');
    var previousQuestion = document.getElementById('previous-question');

    var correct = atob(CORRECTE_ANTWOORDEN)[num -1];

    var correctButton;
    if (correct == "a") {
        correctButton = answerButtonA;
    } else if (correct == "b") {
        correctButton = answerButtonB;
    } else if (correct == "c") {
        correctButton = answerButtonC;
    } else {
        correctButton = answerButtonD;
    }

    var pressedButton;
    if (answers[num - 1] == "a") {
        pressedButton = answerButtonA;
    } else if (answers[num - 1] == "b") {
        pressedButton = answerButtonB;
    } else if (answers[num - 1] == "c") {
        pressedButton = answerButtonC;
    } else {
        pressedButton = answerButtonD;
    }

    questionTitle.innerHTML = "Vraag " + (num - 1);
    question.innerHTML = QUIZ_VRAGEN[num - 1].vraag;
    questionExtras.innerHTML = QUIZ_VRAGEN[num - 1].extra;
    answerButtonA.innerHTML = "a. " + QUIZ_VRAGEN[num - 1].antwoorden.a;
    answerButtonB.innerHTML = "b. " + QUIZ_VRAGEN[num - 1].antwoorden.b;
    answerButtonC.innerHTML = "c. " + QUIZ_VRAGEN[num - 1].antwoorden.c;
    answerButtonD.innerHTML = "d. " + QUIZ_VRAGEN[num - 1].antwoorden.d;

    answerButtonClickable = false;
    nextQuestion.style.display = 'none';
    currentQuestion.style.display = 'inline-block';
    previousQuestion.style.display = 'none';

    if (isCorrect[num - 1] === false) {
        correctButton.style.background = "rgb(51, 153, 51)";
        pressedButton.style.background = "rgb(204, 0, 0)";
        feedback.innerHTML = "Fout. 👎";
    } else {
        correctButton.style.background = "rgb(51, 153, 51)";
        feedback.innerHTML = "Goed. 👍"; 
    }
}

/**
 * Updates the score counter shown on top of the screeen while playing the quiz.
 */
function updateScoreCounter() {
    var scoreCounter = document.getElementById("score-counter");
    var score = countTrue(isCorrect);
    var total = QUIZ_VRAGEN.length;

    scoreCounter.innerHTML = score + " van de " + total + " punten, ingelogd als " + studentInfo.firstName + " " + studentInfo.lastName + " ("+ studentInfo.number + ")";

}


/**
 * What happens when one of the buttons get pressed.
 * First, the answer gets checked with an if-sequence.
 * Then, by coloring the buttons, the player can reflect on the answer given.
 * @param {string} answer either a, b, c or d, given by the buttons.
 */
function answerPressed(answer) {
    var correct = atob(CORRECTE_ANTWOORDEN)[questionNumber];
    var feedback = document.getElementById('feedback');

    var answerButtonA = document.getElementById('answerA');
    var answerButtonB = document.getElementById('answerB');
    var answerButtonC = document.getElementById('answerC');
    var answerButtonD = document.getElementById('answerD');

    var nextQuestion = document.getElementById('next-question');
    var currentQuestion = document.getElementById('current-question');
    var previousQuestion = document.getElementById('previous-question');

    var correctButton;
    if (correct == "a") {
        correctButton = answerButtonA;
    } else if (correct == "b") {
        correctButton = answerButtonB;
    } else if (correct == "c") {
        correctButton = answerButtonC;
    } else {
        correctButton = answerButtonD;
    }

    var pressedButton;
    if (answer == "a") {
        pressedButton = answerButtonA;
    } else if (answer == "b") {
        pressedButton = answerButtonB;
    } else if (answer == "c") {
        pressedButton = answerButtonC;
    } else {
        pressedButton = answerButtonD;
    }


    answerButtonClickable = false;

    // Als het antwoord correct is, wordt dat aangegeven, de juiste knop groen gemarkeerd en het antwoord opgeslagen.
    // Als het fout is, wordt dat opgeslagen en wordt het foute antwoord ook gemarkeerd.
    if (answer == correct) {
        feedback.innerHTML = "Goed. 👍";
        answers.push(answer);
        isCorrect.push(true);
        correctButton.style.background = "rgb(51, 153, 51)";
    } else {
        feedback.innerHTML = "Fout. 👎";
        answers.push(answer);
        isCorrect.push(false);
        correctButton.style.background = "rgb(51, 153, 51)";
        pressedButton.style.background = "rgb(204, 0, 0)";
    }
    updateScoreCounter();
    nextQuestion.style.display = "inline-block";
    currentQuestion.style.display = 'none';
    previousQuestion.style.display = 'none';
}

/**
 * Function called by the "Volgende vraag" button.
 */
function goToNextQuestion() {
    questionNumber++;



    if (QUIZ_VRAGEN[questionNumber] === undefined) { // hiermee herken ik of de quiz klaar is.
        showEndPage();
    } else {
        showQuestion(questionNumber);
    }
}

// Initialize
addButtonActions();
showStartPage();
boldButton(document.getElementById('button-start'));