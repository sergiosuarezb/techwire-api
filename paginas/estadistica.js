function Estadisticas() {
    const root = document.getElementById("root");
    
    // Calcular estadísticas
    const totalLeidos = misLeidos.length;
    const totalFavoritos = favoritos.length;
    const porcentajeLeidos = ((totalLeidos / totalArticulos) * 100).toFixed(1);
    
    // Contar por categoría
    const categorias = {};
    for (let i = 0; i < misLeidos.length; i++) {
        const articulo = obtenerArticulo(misLeidos[i]);
        if (articulo) {
            if (categorias[articulo.categoria]) {
                categorias[articulo.categoria]++;
            } else {
                categorias[articulo.categoria] = 1;
            }
        }
    }
    
    // Encontrar categoría favorita
    let categoriaFavorita = "Ninguna";
    let maxCount = 0;
    for (let cat in categorias) {
        if (categorias[cat] > maxCount) {
            maxCount = categorias[cat];
            categoriaFavorita = cat;
        }
    }
    
    // Generar barras de progreso por categoría
    let barrasHTML = "";
    const todasCategorias = ["Tech Reviews", "Technology", "Must Read", "Gadgets", "Software", "Games", "Apps"];
    
    for (let i = 0; i < todasCategorias.length; i++) {
        const cat = todasCategorias[i];
        const count = categorias[cat] || 0;
        const total = articulosData.filter(a => a.categoria === cat).length;
        const porcentaje = total > 0 ? ((count / total) * 100).toFixed(0) : 0;
        
        barrasHTML += `
            <div style="margin-bottom: 20px;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                    <span style="font-weight: 500;">${cat}</span>
                    <span style="color: #667eea;">${count}/${total}</span>
                </div>
                <div style="background: #e0e0e0; border-radius: 10px; height: 20px; overflow: hidden;">
                    <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); height: 100%; width: ${porcentaje}%; transition: 0.3s;"></div>
                </div>
            </div>
        `;
    }
    
    root.innerHTML = `
        <div class="info-page">
            <h1>Estadísticas de Lectura</h1>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin: 30px 0;">
                <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 10px; text-align: center;">
                    <div style="font-size: 40px; font-weight: bold;">${totalLeidos}</div>
                    <div style="opacity: 0.9;">Artículos Leídos</div>
                </div>
                
                <div style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white; padding: 20px; border-radius: 10px; text-align: center;">
                    <div style="font-size: 40px; font-weight: bold;">${porcentajeLeidos}%</div>
                    <div style="opacity: 0.9;">Progreso Total</div>
                </div>
                
                <div style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); color: white; padding: 20px; border-radius: 10px; text-align: center;">
                    <div style="font-size: 40px; font-weight: bold;">${totalFavoritos}</div>
                    <div style="opacity: 0.9;">Favoritos</div>
                </div>
            </div>
            
            <h2>Categoría Favorita</h2>
            <p style="font-size: 20px; color: #667eea; font-weight: 600;">${categoriaFavorita}</p>
            
            <h2 style="margin-top: 30px;">Progreso por Categoría</h2>
            ${barrasHTML}
            
            <h2 style="margin-top: 30px;">Objetivos</h2>
            <div style="background: #f8f9ff; padding: 20px; border-radius: 10px; border-left: 4px solid #667eea;">
                ${totalLeidos >= totalArticulos ? 
                    '<p>Felicitaciones! Has leído todos los artículos disponibles.</p>' :
                    `<p>Te faltan <strong>${totalArticulos - totalLeidos} artículos</strong> para completar tu colección.</p>`
                }
                ${totalFavoritos >= 5 ?
                    '<p>Excelente! Tienes una buena colección de favoritos.</p>' :
                    '<p>Tip: Marca al menos 5 artículos como favoritos para acceder rápidamente a ellos.</p>'
                }
            </div>
        </div>
    `;
}