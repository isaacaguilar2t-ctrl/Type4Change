const worlds = {
    educacion: {
        title: "Mundo Educación",
        icon: "📚",
        description:
            "Ayuda a estudiantes, recupera espacios educativos y demuestra que aprender también puede cambiar una comunidad."
    },

    planeta: {
        title: "Mundo Planeta",
        icon: "🌱",
        description:
            "Limpia parques, protege los ríos, recicla materiales y devuelve la naturaleza a diferentes zonas."
    },

    comunidad: {
        title: "Mundo Comunidad",
        icon: "🤝",
        description:
            "Trabaja junto a los habitantes, recupera espacios públicos y completa misiones de ayuda comunitaria."
    },

    bienestar: {
        title: "Mundo Bienestar",
        icon: "❤️",
        description:
            "Completa desafíos relacionados con hábitos saludables, actividad física, descanso y bienestar."
    },

    digital: {
        title: "Mundo Digital",
        icon: "💻",
        description:
            "Enfrenta desafíos de seguridad digital, privacidad, información responsable y ciudadanía en internet."
    }
};


const islands = document.querySelectorAll(".island");

const modal = document.getElementById("worldModal");
const modalIcon = document.getElementById("modalIcon");
const modalTitle = document.getElementById("modalTitle");
const modalDescription =
    document.getElementById("modalDescription");

const enterButton =
    document.getElementById("enterWorld");

const closeButton =
    document.getElementById("closeModal");


let selectedURL = "";


/* =============================
   SELECCIONAR ISLA
============================= */

islands.forEach(island => {

    island.addEventListener("click", () => {

        const worldName =
            island.dataset.world;

        const world =
            worlds[worldName];

        selectedURL =
            island.dataset.url;


        modalIcon.textContent =
            world.icon;

        modalTitle.textContent =
            world.title;

        modalDescription.textContent =
            world.description;


        modal.classList.add("show");

    });

});


/* =============================
   ENTRAR AL MUNDO
============================= */

enterButton.addEventListener(
    "click",
    () => {

        if (selectedURL) {
            window.location.href =
                selectedURL;
        }

    }
);


/* =============================
   CERRAR MODAL
============================= */

closeButton.addEventListener(
    "click",
    () => {

        modal.classList.remove("show");

    }
);


modal.addEventListener(
    "click",
    event => {

        if (event.target === modal) {
            modal.classList.remove("show");
        }

    }
);


/* ESC */

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {
            modal.classList.remove("show");
        }

    }
);