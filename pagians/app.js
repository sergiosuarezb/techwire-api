function cargarPagina(nombre) {
  const main = document.getElementById('contenido');
  fetch(`paginas/${nombre}.js`)
    .then(r => r.text())
    .then(codigo => {
      main.innerHTML = '';
      const script = document.createElement('script');
      script.textContent = codigo;
      main.appendChild(script);
    });
}

window.onload = () => {
  cargarPagina('home');
};
