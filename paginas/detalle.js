var esFavorito = false;

// Función para compartir artículo
function compartirArticulo(id, titulo, descripcion) {
    if (navigator.share) {
        navigator.share({
            title: titulo,
            text: descripcion,
            url: window.location.href
        })
        .then(() => console.log('Compartido exitosamente'))
        .catch((error) => console.log('Error al compartir:', error));
    } else {
        // Fallback: copiar al portapapeles
        const texto = `${titulo}\n\n${descripcion}\n\nLee más en: ${window.location.href}`;
        navigator.clipboard.writeText(texto).then(() => {
            alert('Enlace copiado al portapapeles');
        }).catch(() => {
            alert('No se pudo compartir. Tu navegador no soporta esta función.');
        });
    }
}

// Función para agregar o quitar un artículo de favoritos
function toggleFavorito(paramid, paramname) {
    // Leer favoritos actuales desde memoria
    let existe = false;

    // Verificar si ya está guardado
    for (let i = 0; i < favoritos.length; i++) {
        if (favoritos[i].name === paramname) {
            existe = true;
            break;
        }
    }

    if (existe == true) {
        // Remover de favoritos
        const nuevosFavoritos = [];
        for (let i = 0; i < favoritos.length; i++) {
            if (favoritos[i].name !== paramname) {
                nuevosFavoritos.push(favoritos[i]);
            }
        }
        favoritos = nuevosFavoritos;
        esFavorito = false;
    } else {
        // Si no está, agregarlo
        favoritos.push({
            name: paramname,
            url: `article/${paramid}/`
        });
        esFavorito = true;
    }

    // Actualizar el icono en pantalla (si existe el botón)
    const boton = document.querySelector(`#corazon-${paramid}`);
    if (boton) boton.textContent = esFavorito ? "STAR" : "EMPTY";
}

async function Detalle(parametro) {
    const root = document.getElementById("root");
    root.innerHTML = "";

    // Obtener datos del artículo
    const data = obtenerArticulo(parametro);
    
    if (!data) {
        root.innerHTML = "<p>Artículo no encontrado</p>";
        return;
    }

    // Revisar si este artículo ya está en favoritos
    esFavorito = false;
    for (let i = 0; i < favoritos.length; i++) {
        if (favoritos[i].name === data.name) {
            esFavorito = true;
            break;
        }
    }

    // Marcar como leído
    let yaLeido = false;
    for (let i = 0; i < misLeidos.length; i++) {
        if (misLeidos[i] === data.id) {
            yaLeido = true;
            break;
        }
    }
    
    if (!yaLeido) {
        misLeidos.push(data.id);
    }

    // HTML del detalle
    const detalle = `
    <section class="c-detalle">
      <img src="${data.imagen}" 
           alt="${data.titulo}" height="auto" width="100%">
      <h1>${data.titulo}</h1>
      <div class="meta">
        <span>Categoría: ${data.categoria}</span>
        <span>ID: #${data.id}</span>
      </div>
      <p><strong>Descripción:</strong> ${data.descripcion}</p>
      <p>${data.contenido}</p>

      <button onClick="toggleFavorito(${data.id}, '${data.name}')">
        <span id="corazon-${data.id}">${esFavorito ? 'STAR' : 'EMPTY'}</span> Favorito
      </button>
      
      <button onClick="compartirArticulo(${data.id}, '${data.titulo.replace(/'/g, "\\'")}', '${data.descripcion.replace(/'/g, "\\'")}')">
        Compartir
      </button>
    </section>
  `;

    root.innerHTML = detalle;
}
