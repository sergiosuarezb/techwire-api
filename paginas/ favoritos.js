(async () => {
  const favs = JSON.parse(localStorage.getItem('favoritos')) || [];
  const canciones = await api.obtenerCanciones();
  const favoritas = canciones.filter(c => favs.includes(c.id));
  const main = document.getElementById('contenido');

  main.innerHTML = `
    <h2>Mis Favoritos</h2>
    ${favoritas.length === 0 ? '<p>No tienes favoritos aún.</p>' : favoritas.map(c => `
      <div class="card" onclick="verDetalle(${c.id})">
        <h3>${c.titulo}</h3>
        <p>${c.artista}</p>
      </div>
    `).join('')}
  `;
})();
