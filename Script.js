/* =========================================
   TYPE4CHANGE
   HOME PAGE
========================================= */


/* =========================================
   VARIABLES
========================================= */

const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");

const impactProgress =
    document.getElementById("impactProgress");

const impactValue =
    document.getElementById("impactValue");


/* =========================================
   CARGAR IMPACTO
========================================= */

let impact =
    Number(localStorage.getItem("type4changeImpact")) || 0;

impact = Math.min(impact, 100);


/* =========================================
   ANIMACIÓN DEL IMPACTO
========================================= */

function updateImpact() {

    impactProgress.style.width =
        impact + "%";

    let current = 0;

    const animation = setInterval(() => {

        if (current >= impact) {

            clearInterval(animation);

            return;

        }

        current++;

        impactValue.textContent =
            current;

    }, 20);

}


/* =========================================
   INICIAR JUEGO
========================================= */

function startGame() {

    /*
        Más adelante esto llevará al Lobby:

        window.location.href = "lobby.html";
    */

    localStorage.setItem(
        "type4changeStarted",
        "true"
    );

    showMessage(
        "¡PREPÁRATE!",
        `
        <p>
            Tu aventura está a punto de comenzar.
        </p>

        <p>
            En la siguiente versión podrás
            entrar al Lobby y elegir tu primera misión.
        </p>

        <button
            class="game-button"
            onclick="goToLobby()">

            ▶ CONTINUAR

        </button>
        `
    );

}


/* =========================================
   IR AL LOBBY
========================================= */

function goToLobby() {

    /*
        Cuando creen lobby.html,
        simplemente descomenten:

        window.location.href = "lobby.html";
    */

    alert(
        "Aquí conectaremos el Lobby del juego."
    );

}


/* =========================================
   CÓMO JUGAR
========================================= */

function openHowToPlay() {

    showMessage(
        "¿CÓMO JUGAR?",
        `
        <p>
            En Type4Change tus palabras
            generan acciones.
        </p>

        <ul>

            <li>
                ⌨️ Escribe las palabras
                correctamente.
            </li>

            <li>
                ⚡ Mantén una buena velocidad.
            </li>

            <li>
                🎯 Evita cometer errores.
            </li>

            <li>
                🌎 Completa misiones.
            </li>

            <li>
                ⭐ Consigue Impact Points.
            </li>

        </ul>

        <p>
            Tu velocidad y precisión
            ayudarán a transformar
            el mundo del juego.
        </p>
        `
    );

}


/* =========================================
   SOBRE EL PROYECTO
========================================= */

function openAbout() {

    showMessage(
        "SOBRE TYPE4CHANGE",
        `
        <p>
            Type4Change es un videojuego
            de mecanografía basado en
            misiones con propósito.
        </p>

        <p>
            Aquí escribir no sirve solamente
            para conseguir palabras por minuto.
        </p>

        <p>
            <strong>
                Tus palabras generan acciones.
            </strong>
        </p>

        <p>
            Completa misiones, toma decisiones
            y genera impacto.
        </p>
        `
    );

}


/* =========================================
   CONFIGURACIÓN
========================================= */

function openSettings() {

    showMessage(
        "CONFIGURACIÓN",
        `
        <p>
            ⚙️ Configuración
        </p>

        <br>

        <button
            class="game-button"
            onclick="toggleFullscreen()">

            ⛶ PANTALLA COMPLETA

        </button>

        <br><br>

        <button
            class="game-button"
            onclick="resetProgress()">

            🗑 REINICIAR PROGRESO

        </button>
        `
    );

}


/* =========================================
   MODAL
========================================= */

function showMessage(title, content) {

    modalContent.innerHTML = `

        <h2>
            ${title}
        </h2>

        ${content}

    `;

    modal.classList.add("active");

}


function closeModal() {

    modal.classList.remove("active");

}


/* =========================================
   CERRAR MODAL CON ESC
========================================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closeModal();

        }

    }
);


/* =========================================
   PANTALLA COMPLETA
========================================= */

function toggleFullscreen() {

    if (!document.fullscreenElement) {

        document.documentElement.requestFullscreen();

    } else {

        document.exitFullscreen();

    }

}


/* =========================================
   REINICIAR PROGRESO
========================================= */

function resetProgress() {

    const confirmReset =
        confirm(
            "¿Seguro que quieres borrar tu progreso?"
        );

    if (!confirmReset) return;

    localStorage.clear();

    impact = 0;

    updateImpact();

    closeModal();

}


/* =========================================
   PARTÍCULAS
========================================= */

const canvas =
    document.getElementById("particles");

const ctx =
    canvas.getContext("2d");

let particles = [];


function resizeCanvas() {

    canvas.width =
        window.innerWidth;

    canvas.height =
        window.innerHeight;

}


window.addEventListener(
    "resize",
    resizeCanvas
);

resizeCanvas();


/* =========================================
   CREAR PARTÍCULAS
========================================= */

function createParticles() {

    particles = [];

    for (
        let i = 0;
        i < 80;
        i++
    ) {

        particles.push({

            x: Math.random() *
                canvas.width,

            y: Math.random() *
                canvas.height,

            size:
                Math.random() * 3 + 1,

            speed:
                Math.random() * 0.5 + 0.2,

            opacity:
                Math.random()

        });

    }

}


createParticles();


/* =========================================
   ANIMAR PARTÍCULAS
========================================= */

function animateParticles() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    particles.forEach(p => {

        p.y -= p.speed;


        if (p.y < 0) {

            p.y =
                canvas.height;

            p.x =
                Math.random() *
                canvas.width;

        }


        ctx.globalAlpha =
            p.opacity;

        ctx.fillStyle =
            "#ffffff";

        ctx.fillRect(
            p.x,
            p.y,
            p.size,
            p.size
        );

    });


    ctx.globalAlpha = 1;

    requestAnimationFrame(
        animateParticles
    );

}


animateParticles();


/* =========================================
   INICIAR
========================================= */

updateImpact();