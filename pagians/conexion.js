import { mostrarHome } from "./home.js";
import { mostrarPodcasts } from "./podcasts.js";
import { mostrarReviews } from "./reviews.js";
import { mostrarCategorias } from "./categorias.js";
import { mostrarAcerca } from "./acerca.js";
import { mostrarContacto } from "./contacto.js";

const contenedor = document.getElementById("contenido");

export function cargar(pagina) {
  switch (pagina) {
    case "home": mostrarHome(); break;
    case "podcasts": mostrarPodcasts(); break;
    case "reviews": mostrarReviews(); break;
    case "categorias": mostrarCategorias(); break;
    case "acerca": mostrarAcerca(); break;
    case "contacto": mostrarContacto(); break;
    default: contenedor.innerHTML = "<h2>Página no encontrada</h2>";
  }
}

// Mostrar la página de inicio al cargar
window.onload = mostrarHome;
