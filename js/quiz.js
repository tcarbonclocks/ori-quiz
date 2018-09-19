"use strict"

/**
 * Mijn eerste functie: een manier om de knop van de pagina waarop je bent bold te maken.
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

    startButton.addEventListener("click", function () {
        showStartPage();
        boldButton(startButton);
    });
    questionsButton.addEventListener("click", function () {
        showQuestionsPage();
        boldButton(questionsButton);
    });
}

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

    console.info('Je bent nu op de vragenpagina');
}

// Initialize
addButtonActions();
showStartPage();
boldButton(document.getElementById('button-start'));