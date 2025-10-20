function Informativa() {
    document.getElementById("root").innerHTML = `
        <div class="info-page">
            <h1>Acerca de Tech News Reader</h1>
            <p><strong>Bienvenido a Tech News Reader</strong>, tu aplicación para seguir las últimas noticias de tecnología inspirada en <a href="https://mic-stylesheet.com/" target="_blank" style="color: #667eea;">mic-stylesheet.com</a>.</p>
            
            <h2>Características:</h2>
            <p><strong>Home:</strong> Explora todos los artículos disponibles. Usa el buscador para encontrar temas específicos o filtra por categoría (Tech Reviews, Technology, Gadgets, Software, Games, Apps).</p>
            
            <p><strong>Leídos:</strong> Lleva un registro de los artículos que has leído. Los artículos leídos se marcan automáticamente cuando visualizas su detalle. Puedes generar 4 artículos aleatorios para descubrir contenido nuevo.</p>
            
            <p><strong>Favoritos:</strong> Guarda tus artículos preferidos para acceder a ellos rápidamente. Marca un artículo como favorito desde su página de detalle.</p>
            
            <p><strong>Estadísticas:</strong> Visualiza tu progreso de lectura, categorías favoritas y objetivos completados.</p>
            
            <h2>Categorías disponibles:</h2>
            <p><strong>Tech Reviews:</strong> Reseñas y análisis de tecnología, incluyendo macOS, Windows y dispositivos Apple</p>
            <p><strong>Technology:</strong> Noticias de ciencia y tecnología, desde exploración espacial hasta impresión 3D</p>
            <p><strong>Must Read:</strong> Artículos destacados y de lectura obligatoria sobre tecnología</p>
            <p><strong>Gadgets:</strong> Lo último en dispositivos IoT y wearables para mascotas</p>
            <p><strong>Software:</strong> Aplicaciones CAD, eficiencia en transporte y herramientas de productividad</p>
            <p><strong>Games:</strong> Ciencia y descubrimientos sobre naturaleza y comportamiento animal</p>
            <p><strong>Apps:</strong> Noticias sobre física cuántica y científicos destacados</p>
            
            <h2>Cómo usar:</h2>
            <p>1. <strong>Navega</strong> por los artículos en la página de inicio</p>
            <p>2. <strong>Haz clic</strong> en cualquier artículo para ver su detalle completo</p>
            <p>3. <strong>Marca como favorito</strong> los artículos que te interesen</p>
            <p>4. <strong>Revisa tu progreso</strong> en la sección de Leídos</p>
            <p>5. <strong>Descubre nuevo contenido</strong> con el generador aleatorio</p>
            <p>6. <strong>Comparte artículos</strong> con el botón de compartir</p>
            
            <p style="margin-top: 30px; font-style: italic; color: #888;">Esta aplicación está inspirada en el contenido de mic-stylesheet.com y simula un lector de noticias tecnológicas. Los datos se almacenan en memoria durante tu sesión.</p>
        </div>
    `;
}