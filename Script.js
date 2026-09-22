/* ==================================================
   TYPE4CHANGE
   HOME
================================================== */

const playButton =
    document.getElementById("playButton");

const settingsButton =
    document.getElementById("settingsButton");

const exitButton =
    document.getElementById("exitButton");

const languageButton =
    document.getElementById("languageButton");

const transitionScreen =
    document.getElementById("transitionScreen");


/* ==================================================
   PLAY
================================================== */

playButton.addEventListener("click", () => {

    transitionScreen.classList.add("active");

    setTimeout(() => {

        window.location.href =
            "lobby.html";

    }, 1100);

});


/* ==================================================
   SETTINGS
================================================== */

settingsButton.addEventListener(
    "click",
    () => {

        /*
        Si ya tienes configuracion.html:
        */

        window.location.href =
            "configuracion.html";

    }
);


/* ==================================================
   EXIT
================================================== */

exitButton.addEventListener(
    "click",
    () => {

        const answer =
            confirm(
                "¿Seguro que quieres salir de Type4Change?"
            );

        if (!answer) {
            return;
        }

        /*
        Los navegadores no permiten normalmente
        cerrar una pestaña que el usuario abrió.

        Regresamos al inicio visualmente.
        */

        alert(
            "¡Gracias por jugar Type4Change!"
        );

    }
);


/* ==================================================
   LANGUAGE
================================================== */

languageButton.addEventListener(
    "click",
    () => {

        const spanish =
            languageButton
                .textContent
                .includes("ES");


        if (spanish) {

            languageButton.textContent =
                "🌐 EN";

            playButton.textContent =
                "PLAY";

            settingsButton.textContent =
                "SETTINGS";

            exitButton.textContent =
                "EXIT";

        }

        else {

            languageButton.textContent =
                "🌐 ES";

            playButton.textContent =
                "JUGAR";

            settingsButton.textContent =
                "CONFIGURACIÓN";

            exitButton.textContent =
                "SALIR";

        }

    }
);