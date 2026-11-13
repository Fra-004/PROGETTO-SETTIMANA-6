
const lavori = [
    {
        title: "Villa residenziale a due piani",
        year: 2024,
        img: "assets/immagini/villa-2piani.jpg",
        category: "Residenziale"
    },
    {
        title: "Villa con piscina",
        year: 2024,
        img: "assets/immagini/villa-piscina.jpg",
        category: "Residenziale"
    },
    {
        title: "Design interno cucina",
        year: 2026,
        img: "assets/immagini/design-cucina.jpg",
        category: "Interior design"
    },
    {
        title: "Design interno sala",
        year: 2025,
        img: "assets/immagini/design-sala.jpg",
        category: "Interior design"
    },
    {
        title: "Palazzina antica",
        year: 2025,
        img: "assets/immagini/palazzo-storico.jpg",
        category: "Ristrutturazione"
    },
    {
        title: "Palazzina Centro Storico",
        year: 2026,
        img: "assets/immagini/palazzina-centro-storico.jpg",
        category: "Ristrutturazione"
    }
];

const cardlavori = document.getElementById("cardLavori");
const filters = document.getElementById("filters");

function createCard(lavori) {
    const col = document.createElement("div");
    //uso class name per impostare più classi contemporaneamente
    col.className = "col-12 col-md-6 col-lg-4";

    const card = document.createElement("div");
    card.className = "card h-100 boxshadow";

    const img = document.createElement("img");
    img.className = "card-img-top Imglavori"; 
    img.src = lavori.img;
    img.alt = lavori.title;

    const description = document.createElement("div");
    description.className = "card-body";

    const title = document.createElement("h3");
    title.className = "card-title fs-5 fw-bold";
    title.textContent = lavori.title;

    const info = document.createElement("p");
    info.className = "card-text mb-0 ";
    info.textContent = `${lavori.year} · ${lavori.category}`;

    description.append(title, info);
    card.append(img, description);
    col.append(card);

    return col;
}

function render(list) {
    cardlavori.replaceChildren(...list.map(createCard));
}
// funzione filtri con event delegetion applicato al contenitore
filters.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-filtro]"); //data filtro è la classe che ho dato ai bottoni
    if (!btn) return;

    const category = btn.dataset.filtro;
    const filtrati = category === "Tutti"
        ? lavori
        : lavori.filter(l => l.category === category);
// cambio colore al bottone cliccato
    filters.querySelectorAll(".filterBtn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    render(filtrati);
});


const tema = document.querySelector("#cambiaTema");

tema.addEventListener("click", function () {

    document.body.classList.toggle("temaScuro");

    if (document.body.classList.contains("temaScuro")) {
        tema.textContent = "☀️";
    } else {
        tema.textContent = "🌙";
    }

});

render(lavori);