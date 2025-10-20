var misLeidos = [];

function Aleatorios() {
    document.getElementById("nuevos").innerHTML = "";
    console.log("----------------------------------");
    let articulosAleatorios = "";
    
    for (let i = 0; i < 4; i++) {
        let num = Math.floor(Math.random() * articulosData.length);
        let articulo = articulosData[num];

        articulosAleatorios += `
            <div class="c-lista-articulo c-un_aleatorio">
                <p>#${articulo.id}</p>
                <img src="${articulo.imagen}" alt="${articulo.titulo}" width="100%" height="120">
                <p>${articulo.titulo.substring(0, 40)}...</p>
            </div>`;

        let existe = false;
        for (let j = 0; j < misLeidos.length; j++) {
            if (misLeidos[j] === articulo.id) {
                existe = true;
                break;
            }
        }

        if (!existe) {
            misLeidos.push(articulo.id);
            const elemento = document.getElementById("c-unarticulo-" + articulo.id);
            if (elemento) {
                elemento.innerHTML = `
                <div onclick="Detalle('${articulo.id}')">
                    <p>#${articulo.id}</p>
                    <p>${articulo.titulo.substring(0, 30)}...</p>
                </div>`;
                elemento.classList.add("c-mios-articulo");
            }
        }
    }

    document.getElementById("nuevos").innerHTML += articulosAleatorios;
    document.getElementById("contador").innerHTML = `${misLeidos.length} / ${totalArticulos}`;
}

function Leidos() {
    document.getElementById("root").innerHTML = "";

    // Crear sección de aleatorios
    const capturaAleatoria = document.createElement("section");
    capturaAleatoria.classList.add("c-lista");
    capturaAleatoria.id = "nuevos";

    // Crear botón de aleatorios
    const boton = document.createElement("button");
    boton.textContent = "Leer 4 artículos aleatorios";
    // Agregar el evento click para generar 4 nuevos artículos
    boton.addEventListener("click", () => {
        Aleatorios();
    });

    // Crear álbum de leídos
    const seccionLeidos = document.createElement("section");
    seccionLeidos.classList.add("leidos-container");

    let misArticulos = "";
    for (let i = 1; i <= totalArticulos; i++) {
        let estaLeido = false;
        for (let j = 0; j < misLeidos.length; j++) {
            if (misLeidos[j] === i) {
                estaLeido = true;
                break;
            }
        }

        if (estaLeido) {
            const articulo = obtenerArticulo(i);
            misArticulos += `
            <div class="c-unarticulo c-mios-articulo articulo-${i}" onclick="Detalle('${i}')">
                <p>#${i}</p>
                <p>${articulo ? articulo.titulo.substring(0, 30) + '...' : ''}</p>
            </div>`;
        } else {
            misArticulos += `
            <div class="c-unarticulo" id="c-unarticulo-${i}">
                <p>#${i}</p>
            </div>`;
        }
    }
    seccionLeidos.innerHTML = misArticulos;

    // Contador de artículos leídos
    let contador = document.createElement("p");
    contador.textContent = `${misLeidos.length} / ${totalArticulos}`;
    contador.id = "contador";

    // Añadir al elemento
    document.getElementById("root").appendChild(contador);
    document.getElementById("root").appendChild(boton);
    document.getElementById("root").appendChild(capturaAleatoria);
    document.getElementById("root").appendChild(seccionLeidos);
}