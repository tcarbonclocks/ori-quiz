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
        extra: '<code>' +
        '    var text = "het gouden paleis";</br>' +
        '    window.alert(text.substr(5, 7)' +
        '</code>',
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
        extra: '<code>' +
        '    window.alert(9 == "9");</br>' +
        '    window.alert(9 === "9")' +
        '</code>',
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
        '</code>',
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
        extra: '<video autoplay loop muted playsinline>' +
        '<source src="pictures/hoverEffect.mp4" type="video/mp4">' +
        '</video>',
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
        extra: '<video width=320 autoplay loop muted playsinline>' +
        '<source src="pictures/displayNone.mp4" type="video/mp4">' +
        '</video>',
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
        extra: '<video width=320 autoplay loop muted playsinline>' +
        '<source src="pictures/green.mp4" type="video/mp4">' +
        '</video>',
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