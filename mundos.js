/* =========================================
   TYPE4CHANGE
   MUNDOS
========================================= */


/* =========================================
   PLAYER DATA
========================================= */

let impactPoints =
    Number(
        localStorage.getItem(
            "type4changeImpact"
        )
    ) || 0;


let coins =
    Number(
        localStorage.getItem(
            "type4changeCoins"
        )
    ) || 100;


/* =========================================
   RESOURCES
========================================= */

document.getElementById(
    "impactPoints"
).textContent = impactPoints;


document.getElementById(
    "coins"
).textContent = coins;


/* =========================================
   WORLD DATA
========================================= */

const worlds = {

    0: {

        icon: "⭐",

        number: "HUB CENTRAL",

        title: "COMIENZO",

        description:
            "El punto de partida de tu aventura. " +
            "Desde aquí podrás explorar todos " +
            "los mundos de Type4Change."

    },


    1: {

        icon: "🌱",

        number: "MUNDO 01",

        title: "ECOLANDIA",

        description:
            "Un mundo lleno de naturaleza. " +
            "Completa misiones para proteger " +
            "el medio ambiente."

    },


    2: {

        icon: "🌿",

        number: "MUNDO 02",

        title: "NATURA",

        description:
            "Descubre ecosistemas y aprende " +
            "cómo tus acciones pueden ayudar " +
            "a conservar la naturaleza."

    },


    3: {

        icon: "🏙️",

        number: "MUNDO 03",

        title: "METRÓPOLIS",

        description:
            "Una enorme ciudad que necesita " +
            "personas capaces de generar " +
            "un cambio positivo."

    },


    4: {

        icon: "🌐",

        number: "MUNDO 04",

        title: "DIGITAL",

        description:
            "Explora el mundo de la tecnología " +
            "y descubre cómo utilizarla " +
            "responsablemente."

    }

};


/* =========================================
   WORLD UNLOCK
========================================= */

function isWorldUnlocked(world) {

    if (world === 0) {

        return true;

    }


    if (world === 1) {

        return true;

    }


    if (world === 2) {

        return impactPoints >= 100;

    }


    if (world === 3) {

        return impactPoints >= 300;

    }


    if (world === 4) {

        return impactPoints >= 600;

    }


    return false;

}


/* =========================================
   SELECT WORLD
========================================= */

function selectWorld(world) {

    if (!isWorldUnlocked(world)) {

        alert(
            "🔒 MUNDO BLOQUEADO\n\n" +
            "Necesitas más Impact Points " +
            "para desbloquear este mundo."
        );

        return;

    }


    const data = worlds[world];


    document.getElementById(
        "panelIcon"
    ).textContent = data.icon;


    document.getElementById(
        "panelNumber"
    ).textContent = data.number;


    document.getElementById(
        "panelTitle"
    ).textContent = data.title;


    document.getElementById(
        "panelDescription"
    ).textContent = data.description;


    document.getElementById(
        "worldPanel"
    ).classList.remove("hidden");


    localStorage.setItem(
        "currentWorld",
        world
    );

}


/* =========================================
   CLOSE PANEL
========================================= */

function closePanel() {

    document
        .getElementById("worldPanel")
        .classList.add("hidden");

}


/* =========================================
   START WORLD
========================================= */

function startWorld() {

    const world =
        localStorage.getItem(
            "currentWorld"
        ) || "1";


    window.location.href =
        "misiones.html";

}


/* =========================================
   GO LOBBY
========================================= */

function goLobby() {

    window.location.href =
        "lobby.html";

}


/* =========================================
   IMPACT PROGRESS
========================================= */

const progress =
    document.getElementById(
        "impactProgress"
    );


const percentage =
    document.getElementById(
        "impactPercentage"
    );


let currentImpact = 0;


const targetImpact =
    Math.min(
        impactPoints,
        100
    );


const progressAnimation =
    setInterval(() => {

        if (
            currentImpact >=
            targetImpact
        ) {

            clearInterval(
                progressAnimation
            );

            return;

        }


        currentImpact++;


        progress.style.width =
            currentImpact + "%";


        percentage.textContent =
            currentImpact + "%";

    }, 20);


/* =========================================
   KEYBOARD
========================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            closePanel();

        }

    }
);