(async () => {
  const canciones = await api.obtenerCanciones();
  const main = document.getElementById('contenido');

  main.innerHTML = `
    <h2>Explorar Canciones</h2>
    <input id="buscador" type="text" placeholder="Buscar canción...">
    <select id="filtro">
      <option value="">Todos los géneros</option>
      <option value="Pop">Pop</option>
      <option value="Rock">Rock</option>
      <option value="Indie">Indie</option>
      <option value="Folk">Folk</option>
      <option value="Electrónica">Electrónica</option>
    </select>
    <div id="lista"></div>
  `;

  const lista = document.getElementById('lista');
  const render = () => {
    const busqueda = document.getElementById('buscador').value.toLowerCase();
    const genero = document.getElementById('filtro').value;
    const filtradas = canciones.filter(c =>
      c.titulo.toLowerCase().includes(busqueda) &&
      (genero === "" || c.genero === genero)
    );
    lista.innerHTML = filtradas.map(c =>
      `<div class="card" onclick="verDetalle(${c.id})">
        <h3>${c.titulo}</h3>
        <p>${c.artista} - ${c.genero}</p>
      </div>`
    ).join('');
  };

  document.getElementById('buscador').addEventListener('input', render);
  document.getElementById('filtro').addEventListener('change', render);
  render();
})();

function verDetalle(id) {
  localStorage.setItem('detalleId', id);
  cargarPagina('detalle');
}
