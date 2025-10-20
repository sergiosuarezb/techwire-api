(async () => {
  const id = localStorage.getItem('detalleId');
  const canciones = await api.obtenerCanciones();
  const cancion = canciones.find(c => c.id == id);
  const main = document.getElementById('contenido');

  main.innerHTML = `
    <div class="card">
      <h2>${cancion.titulo}</h2>
      <h4>${cancion.artista}</h4>
      <p>${cancion.descripcion}</p>
      <button onclick="agregarFavorito(${cancion.id})">⭐ Agregar a Favoritos</button>
    </div>
  `;
})();

function agregarFavorito(id) {
  let favs = JSON.parse(localStorage.getItem('favoritos')) || [];
  if (!favs.includes(id)) favs.push(id);
  localStorage.setItem('favoritos', JSON.stringify(favs));
  alert('Agregado a favoritos 🎶');
}
