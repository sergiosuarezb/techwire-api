function buscadorfuncion(sza) {
    if (sza.length >= 3) {
        const filtrados = [];
        for (let i = 0; i < articulosData.length; i++) {
            const titulo = articulosData[i].titulo.toLowerCase();
            const descripcion = articulosData[i].descripcion.toLowerCase();
            if (titulo.includes(sza.toLowerCase()) || descripcion.includes(sza.toLowerCase())) {
                filtrados.push({
                    name: articulosData[i].name,
                    url: articulosData[i].url
                });
            }
        }
        let listaHTML = generarLista(filtrados);
        document.getElementById("la-lista").innerHTML = listaHTML;
    } else {
        let listaHTML = generarLista(articulos);
        document.getElementById("la-lista").innerHTML = listaHTML;
    }
}

function generarLista(arrayArticulos) {
    let listaHTML = "";
    for (let i = 0; i < arrayArticulos.length; i++) {
        let id = arrayArticulos[i].url.split("/")[1];
        
        // Buscar el artículo completo en articulosData
        let articuloCompleto = obtenerArticulo(id);
        
        if (articuloCompleto) {
            listaHTML += `
            <div class="c-lista-articulo articulo-${id}" onclick="Detalle('${id}')">
                <img src="${articuloCompleto.imagen}" width="auto" height="180" loading="lazy" alt="${articuloCompleto.titulo}">
                <div class="articulo-info">
                    <span class="articulo-categoria">${articuloCompleto.categoria}</span>
                    <div class="articulo-titulo">${articuloCompleto.titulo}</div>
                    <div class="articulo-descripcion">${articuloCompleto.descripcion}</div>
                </div>
            </div>`;
        }
    }

    return listaHTML;
}

function Home(filtro) {
    var root = document.getElementById("root");
    root.innerHTML = "";
    
    // Buscador
    const buscador = document.createElement("input");
    buscador.classList.add("c-buscador");
    buscador.type = "text";
    buscador.placeholder = "Buscar artículos de tecnología...";
    buscador.addEventListener("input", () => {
        buscadorfuncion(buscador.value);
    });

    // Contenedor filtro de categorías
    const categorias = [
        "Tech Reviews", "Technology", "Must Read", "Gadgets", "Software", "Games", "Apps"
    ];

    const contenedorFiltro = document.createElement("div");
    contenedorFiltro.classList.add("categorias-container");

    // Botón "Todos"
    const btnTodos = document.createElement("button");
    btnTodos.textContent = "Todos";
    btnTodos.addEventListener("click", () => {
        FiltroConexion("All");
    });
    contenedorFiltro.appendChild(btnTodos);

    for (let i = 0; i < categorias.length; i++) {
        const btn = document.createElement("button");
        btn.textContent = categorias[i];
        
        // Agregar el evento click para filtrar por categoría
        btn.addEventListener("click", () => {
            FiltroConexion(categorias[i]);
        });

        // Agregar el botón al contenedor
        contenedorFiltro.appendChild(btn);
    }

    // Add contenedor lista
    const listaHTML = generarLista(articulos);
    var contenedorLista = document.createElement("div");
    contenedorLista.classList.add("c-contenedor-lista");
    contenedorLista.id = "la-lista";
    contenedorLista.innerHTML = listaHTML;

    // Agregar contenedores
    root.appendChild(buscador);
    root.appendChild(contenedorFiltro);
    root.appendChild(contenedorLista);
}