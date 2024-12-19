const disks = [
    {
        name: "Mercury Act 1",
        artist: "Imagine Dragon", 
        price: 24.99,
        image: "public/discos/imaginedragon.jpg",
        offer: false,
        description: "El álbum revolucionario de Imagine Dragons que redefine el rock moderno."
    },
    {
        name: "Get Wet",
        artist: "Krewella",
        price: 14.99,
        image: "public/discos/krewella.jpg",
        offer: false,
        description: "Un álbum lleno de energía y música electrónica vibrante de Krewella."
    },
    {
        name: "2005",
        artist: "SFDK",
        price: 9.99,
        image: "public/discos/sfdk.jpg",
        offer: false,
        description: "Un clásico del rap español con letras contundentes de SFDK."
    },
    {
        name: "No Hands",
        artist: "Joey Valence & Brae",
        price: 34.49,
        image: "public/discos/NOHANDS.jpg",
        offer: false,
        description: "Un álbum innovador que mezcla el hip-hop clásico con sonidos modernos."
    },
    {
        name: "Nevermind",
        artist: "Nirvana",
        price: 24.49,
        image: "public/discos/nirvana.jpg",
        offer: true,
        description: "El icónico álbum de Nirvana que marcó una generación y el grunge."
    },
    {
        name: "Hibrid Theory",
        artist: "Link in Park",
        price: 14.49,
        image: "public/discos/linkinpark.jpg",
        offer: false,
        description: "El álbum debut de Linkin Park que definió el nu-metal de los años 2000."
    },
    {
        name: "Abbey Road",
        artist: "The Beatles",
        price: 14.99,
        image: "public/discos/beatles.jpeg",
        offer: true,
        description: "Un álbum legendario de los Beatles con algunas de sus canciones más icónicas."
    },
    {
        name: "Bohemian Rhapsody",
        artist: "Queen",
        price: 14.49,
        image: "public/discos/queen.jpg",
        offer: false,
        description: "Una colección inolvidable de Queen con el éxito épico 'Bohemian Rhapsody'."
    }
];

const moreInfo = (disk) => {
    const body = document.querySelector("body")

    const infoBackground = document.createElement("div");
    infoBackground.className = "infoBackground";

    const infoDiv = document.createElement("div")
    infoDiv.classList.add("infoDiv")

    infoDiv.innerHTML = `
        <div>
            <h2>${disk.artist} - ${disk.name}</h2>
        </div>
        <div class="wrapper">
            <img src="${disk.image}" alt="${disk.name}">
        </div>
        <div class="infoBuy">
            <p>${disk.description}</p>
            <button id="buy">Comprar ${disk.price} €</button>
        </div>
        <div class="exit">
            <img src="public/x.png" alt="exit">
        </div>
    `;

    infoBackground.append(infoDiv)
    body.append(infoBackground)

    const button = document.getElementById("buy")
    button.addEventListener("click", () => {
        infoBackground.remove()
    })

    const exit = document.querySelector(".exit")
    exit.addEventListener("click", () => {
        infoBackground.remove()
    })
}

const ofertas = document.getElementById("ofertas");

const title2 = document.createElement("h2")
title2.textContent = "OFERTAS"
ofertas.append(title2);

const divOFERTAS = document.createElement("div");
divOFERTAS.classList.add("disks")

const catalogo = document.getElementById("catalogo");

const title = document.createElement("h2")
title.textContent = "CATÁLOGO"
catalogo.append(title);

const divDISCOS = document.createElement("div");
divDISCOS.classList.add("disks")

for (const disk of disks) {
    const divDisk = document.createElement("div");
    divDisk.classList.add("disk");
    divDisk.innerHTML = `
        <div class="disk-image">
            <img src="${disk.image}" alt="${disk.name}">
        </div>
        <div class="disk-info">
            <div>
                <h3>${disk.artist}</h3>
                <h4>${disk.name}</h4>
            </div>
            <p>${disk.price} €</p>
        </div>
    `;
    
    divDISCOS.append(divDisk);

    if(disk.offer) {
        divOFERTAS.append(divDisk);
    }
    
    divDisk.addEventListener("click", () => {
        moreInfo(disk);        
    })
}

ofertas.append(divOFERTAS);
catalogo.append(divDISCOS);

const boton = document.querySelector("button")
const form = document.querySelector("form")

boton.addEventListener("click", (e) => {
    e.preventDefault()
    alert("¡Registrado correctamente!")
    form.reset();
})