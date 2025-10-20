var favoritos = [];

function generarListaFavoritos(arrayFavoritos) {
    let listaHTML = "";
    for (let i = 0; i < arrayFavoritos.length; i++) {
        const art = arrayFavoritos[i];
        listaHTML += `
        <div class="c-lista-articulo articulo-${art.id}" onclick="Detalle('${art.id}')">
            <img src="${art.imagen}" width="auto" height="180" loading="lazy" alt="${art.titulo}">
            <div class="articulo-info">
                <span class="articulo-categoria">${art.categoria}</span>
                <div class="articulo-titulo">${art.titulo}</div>
                <div class="articulo-descripcion">${art.descripcion}</div>
            </div>
        </div>`;
    }
    return listaHTML;
}

function Favoritos() {
    const root = document.getElementById("root");
    
    if (favoritos.length == 0) {
        root.innerHTML = `
            <div class="info-page">
                <h1>Sin favoritos</h1>
                <p>Aún no has agregado ningún artículo a favoritos.</p>
                <p>Explora los artículos en la sección <strong>Home</strong> y marca tus favoritos haciendo clic en un artículo y luego en el botón de favorito.</p>
            </div>
        `;
    } else {
        root.innerHTML = "";
        
        const titulo = document.createElement("h2");
        titulo.textContent = `Mis Artículos Favoritos (${favoritos.length})`;
        titulo.style.textAlign = "center";
        titulo.style.color = "#667eea";
        titulo.style.marginBottom = "20px";
        
        const contenedorLista = document.createElement("div");
        contenedorLista.classList.add("c-contenedor-lista");
        contenedorLista.innerHTML = generarListaFavoritos(favoritos);
        
        root.appendChild(titulo);
        root.appendChild(contenedorLista);
    }
}