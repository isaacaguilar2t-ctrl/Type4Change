/* =========================================
   TYPE4CHANGE - LOBBY JS
   ========================================= */


/* =========================================
   MODALES
   ========================================= */

function showModal(title, content) {

    const modal = document.getElementById("gameModal");
    const modalContent = document.getElementById("modalContent");

    modalContent.innerHTML = `
        <h2>${title}</h2>
        ${content}
    `;

    modal.classList.add("active");
}


function closeModal() {

    const modal = document.getElementById("gameModal");

    modal.classList.remove("active");
}


/* =========================================
   MISIONES
   ========================================= */

function openMissions() {

    showModal(
        "📜 MISIONES",
        `
        <p>
            Completa misiones para conseguir
            Impact Points y ayudar a mejorar
            la comunidad.
        </p>

        <button class="modal-option" onclick="startMission()">
            🌱 PARQUE MÁS LIMPIO
            <br>
            <small>+50 Impact Points</small>
        </button>

        <button class="modal-option" onclick="startMission()">
            📚 AULAS PARA TODOS
            <br>
            <small>+75 Impact Points</small>
        </button>

        <button class="modal-option" onclick="startMission()">
            🛡️ ESCUDO DIGITAL
            <br>
            <small>+100 Impact Points</small>
        </button>
        `
    );
}


function startMission() {

    window.location.href = "misiones.html";
}


/* =========================================
   MUNDOS
   ========================================= */

function openWorlds() {

    showModal(
        "🌎 MUNDOS",
        `
        <p>
            Explora diferentes lugares y
            descubre nuevos desafíos.
        </p>

        <button class="modal-option" onclick="goWorlds()">
            🌎 EXPLORAR MUNDOS
        </button>
        `
    );
}


function goWorlds() {

    window.location.href = "mundos.html";
}


/* =========================================
   PERSONAJE
   ========================================= */

function openCharacter() {

    showModal(
        "👤 PERSONAJE",
        `
        <p>
            Personaliza tu personaje y
            desbloquea nuevas opciones.
        </p>

        <button class="modal-option" onclick="goCharacter()">
            👤 PERSONALIZAR PERSONAJE
        </button>
        `
    );
}


function goCharacter() {

    window.location.href = "personaje.html";
}


/* =========================================
   LOGROS
   ========================================= */

function openAchievements() {

    showModal(
        "🏆 LOGROS",
        `
        <p>
            Estos son algunos de tus logros:
        </p>

        <button class="modal-option">
            🌱 GREEN STARTER
            <br>
            <small>Completa tu primera misión.</small>
        </button>

        <button class="modal-option">
            ⚡ SPEED WRITER
            <br>
            <small>Supera un desafío de escritura.</small>
        </button>

        <button class="modal-option">
            💚 PERFECT IMPACT
            <br>
            <small>Consigue una puntuación perfecta.</small>
        </button>

        <button class="modal-option">
            📚 KNOWLEDGE SEEKER
            <br>
            <small>Explora todos los mundos.</small>
        </button>
        `
    );
}


/* =========================================
   TIENDA
   ========================================= */

function openShop() {

    showModal(
        "🛒 TIENDA",
        `
        <p>
            Usa tus Impact Points para
            mejorar el parque.
        </p>

        <button class="modal-option" onclick="buyItem(200)">
            🌳 PLANTAR ÁRBOL
            <br>
            <small>200 Impact Points</small>
        </button>

        <button class="modal-option" onclick="buyItem(500)">
            🪑 COLOCAR BANCA
            <br>
            <small>500 Impact Points</small>
        </button>
        `
    );
}


function buyItem(price) {

    let coins =
        parseInt(localStorage.getItem("type4changeImpact")) || 520;

    if (coins >= price) {

        coins -= price;

        localStorage.setItem(
            "type4changeImpact",
            coins
        );

        document.getElementById("coins").textContent = coins;

        showModal(
            "✅ COMPRA REALIZADA",
            `
            <p class="modal-success">
                ¡Excelente! Tu mejora ayudará
                a transformar la comunidad.
            </p>

            <p>
                Impact Points restantes:
                <strong>${coins}</strong>
            </p>

            <button class="modal-option" onclick="openShop()">
                ← VOLVER A LA TIENDA
            </button>
            `
        );

    } else {

        showModal(
            "❌ NO TIENES SUFICIENTES PUNTOS",
            `
            <p>
                Necesitas más Impact Points
                para realizar esta compra.
            </p>

            <button class="modal-option" onclick="openShop()">
                ← VOLVER
            </button>
            `
        );
    }
}


/* =========================================
   CONFIGURACIÓN
   ========================================= */

function openSettings() {

    showModal(
        "⚙ CONFIGURACIÓN",
        `
        <button class="modal-option" onclick="toggleFullscreen()">
            ⛶ PANTALLA COMPLETA
        </button>

        <button class="modal-option" onclick="resetGame()">
            🔄 REINICIAR PROGRESO
        </button>
        `
    );
}


/* =========================================
   PANTALLA COMPLETA
   ========================================= */

function toggleFullscreen() {

    if (!document.fullscreenElement) {

        document.documentElement.requestFullscreen()
            .catch(() => {
                alert("No se pudo activar la pantalla completa.");
            });

    } else {

        document.exitFullscreen();
    }
}


/* =========================================
   REINICIAR JUEGO
   ========================================= */

function resetGame() {

    const confirmReset = confirm(
        "¿Seguro que quieres reiniciar todo tu progreso?"
    );

    if (!confirmReset) return;

    localStorage.clear();

    alert(
        "Tu progreso ha sido reiniciado."
    );

    location.reload();
}


/* =========================================
   NOTIFICACIÓN
   ========================================= */

function showNotification() {

    showModal(
        "🔔 NUEVA NOTIFICACIÓN",
        `
        <p>
            ¡Tienes una nueva misión disponible!
        </p>

        <button class="modal-option" onclick="startMission()">
            🌱 VER NUEVA MISIÓN
        </button>

        <p class="modal-success">
            +50 Impact Points disponibles
        </p>
        `
    );
}


/* =========================================
   CARGAR MONEDAS
   ========================================= */

function loadCoins() {

    const savedCoins =
        localStorage.getItem("type4changeImpact");

    const coinsElement =
        document.getElementById("coins");

    if (savedCoins !== null) {

        coinsElement.textContent =
            savedCoins;

    } else {

        localStorage.setItem(
            "type4changeImpact",
            "520"
        );

        coinsElement.textContent = "520";
    }
}


/* =========================================
   ESC PARA CERRAR
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
   CERRAR HACIENDO CLICK AFUERA
   ========================================= */

document.getElementById("gameModal")
    ?.addEventListener(
        "click",
        function(event) {

            if (event.target === this) {
                closeModal();
            }

        }
    );


/* =========================================
   INICIO
   ========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        loadCoins();

    }
);
/* =========================================
   MOVIMIENTO DEL PERSONAJE
========================================= */

const player = document.getElementById("player");

const keys = {};

let playerX = 50;
let playerY = 67;

const playerSpeed = 0.32;


/* =========================================
   TECLAS PRESIONADAS
========================================= */

document.addEventListener("keydown", function(event) {

    const key = event.key.toLowerCase();

    keys[key] = true;

    if (
        key === "w" ||
        key === "a" ||
        key === "s" ||
        key === "d" ||
        event.key.startsWith("Arrow")
    ) {
        event.preventDefault();
    }

});


/* =========================================
   TECLAS LIBERADAS
========================================= */

document.addEventListener("keyup", function(event) {

    keys[event.key.toLowerCase()] = false;

});


/* =========================================
   ACTUALIZAR POSICIÓN
========================================= */

function updatePlayer() {

    let moving = false;


    /* ARRIBA */

    if (
        keys["w"] ||
        keys["arrowup"]
    ) {

        playerY -= playerSpeed;

        moving = true;
    }


    /* ABAJO */

    if (
        keys["s"] ||
        keys["arrowdown"]
    ) {

        playerY += playerSpeed;

        moving = true;
    }


    /* IZQUIERDA */

    if (
        keys["a"] ||
        keys["arrowleft"]
    ) {

        playerX -= playerSpeed;

        moving = true;

        player.classList.add("looking-left");
        player.classList.remove("looking-right");
    }


    /* DERECHA */

    if (
        keys["d"] ||
        keys["arrowright"]
    ) {

        playerX += playerSpeed;

        moving = true;

        player.classList.add("looking-right");
        player.classList.remove("looking-left");
    }


    /* =========================================
       LÍMITES DEL MAPA
    ========================================= */

    playerX = Math.max(
        4,
        Math.min(
            94,
            playerX
        )
    );

    playerY = Math.max(
        12,
        Math.min(
            87,
            playerY
        )
    );


    /* =========================================
       ACTUALIZAR HTML
    ========================================= */

    player.style.left =
        playerX + "%";

    player.style.top =
        playerY + "%";


    /* =========================================
       ANIMACIÓN CAMINANDO
    ========================================= */

    if (moving) {

        player.classList.add(
            "walking"
        );

    } else {

        player.classList.remove(
            "walking"
        );

    }


    checkPlayerZones();

    requestAnimationFrame(
        updatePlayer
    );

}


/* =========================================
   ZONAS DE INTERACCIÓN
========================================= */

function checkPlayerZones() {

    const dialog =
        document.getElementById(
            "dialogText"
        );


    /* FUENTE */

    if (
        playerX > 43 &&
        playerX < 57 &&
        playerY > 38 &&
        playerY < 61
    ) {

        dialog.innerHTML =
            "Esta es la Plaza del Cambio.<br>" +
            "Desde aquí puedes comenzar tu aventura.";

        return;
    }


    /* MISIONES */

    if (
        playerX < 24 &&
        playerY > 25 &&
        playerY < 58
    ) {

        dialog.innerHTML =
            "¡Encontraste el Centro de Misiones!<br>" +
            "Acércate para descubrir nuevos desafíos.";

        return;
    }


    /* TIENDA */

    if (
        playerX > 76 &&
        playerY > 25 &&
        playerY < 58
    ) {

        dialog.innerHTML =
            "Esta es la Tienda del Cambio.<br>" +
            "Usa tus Impact Points para conseguir mejoras.";

        return;
    }


    /* MENSAJE NORMAL */

    dialog.innerHTML =
        "Explora libremente el lobby.<br>" +
        "Usa WASD o las flechas para moverte.";

}


/* =========================================
   COMENZAR GAME LOOP
========================================= */

requestAnimationFrame(
    updatePlayer
);