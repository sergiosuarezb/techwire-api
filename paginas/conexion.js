// Base de datos de artículos
let articulos = [];
let totalArticulos = 15;

// Base de datos con información real de mic-stylesheet.com
const articulosData = [
    {
        id: 1,
        name: "running-macos-windows-10",
        url: "article/1/",
        titulo: "Running macOS and Windows 10 on the Same Computer",
        categoria: "Tech Reviews",
        descripcion: "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet",
        imagen: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
        contenido: "Aprende cómo configurar un sistema dual boot para ejecutar macOS y Windows 10 en el mismo equipo. Esta guía completa te llevará paso a paso por el proceso de instalación y configuración. Descubre las mejores prácticas para mantener ambos sistemas operativos funcionando de manera óptima."
    },
    {
        id: 2,
        name: "apple-megastore-china",
        url: "article/2/",
        titulo: "Apple opens another megastore in China amid William Barr criticism",
        categoria: "Tech Reviews",
        descripcion: "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet",
        imagen: "https://images.unsplash.com/photo-1511385348-a52d2c3e2e81?w=400&h=300&fit=crop",
        contenido: "Apple continúa su expansión en el mercado asiático con la apertura de una nueva megatienda en China, en medio de críticas del fiscal general William Barr. La compañía refuerza su presencia en uno de sus mercados más importantes con un diseño innovador y experiencias interactivas únicas."
    },
    {
        id: 3,
        name: "nasa-cassini-saturn-sounds",
        url: "article/3/",
        titulo: "The 'Sounds' of Space as NASA's Cassini Dives by Saturn",
        categoria: "Technology",
        descripcion: "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet",
        imagen: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=400&h=300&fit=crop",
        contenido: "NASA ha convertido los datos de la sonda Cassini en audio, revelando los misteriosos 'sonidos' de Saturno. Descubre cómo la nave espacial capturó estas señales durante su último viaje alrededor del gigante gaseoso, proporcionando una perspectiva única del espacio."
    },
    {
        id: 4,
        name: "3d-print-glass",
        url: "article/4/",
        titulo: "Broke a Glass? Someday You Might 3-D-Print a New One",
        categoria: "Technology",
        descripcion: "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet",
        imagen: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop",
        contenido: "La impresión 3D de vidrio se acerca a la realidad doméstica. Investigadores están desarrollando nuevas técnicas que podrían permitir la fabricación de objetos de vidrio en casa, revolucionando la manera en que reparamos y creamos artículos de cristal."
    },
    {
        id: 5,
        name: "scientists-march-trump",
        url: "article/5/",
        titulo: "Scientists, Feeling Under Siege, March Against Trump Policies",
        categoria: "Technology",
        descripcion: "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet",
        imagen: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=300&fit=crop",
        contenido: "Miles de científicos han salido a las calles para protestar contra las políticas de la administración Trump que consideran perjudiciales para la investigación científica. La comunidad científica se moviliza en defensa de la ciencia basada en evidencia y el financiamiento de la investigación."
    },
    {
        id: 6,
        name: "iphone-13-save-money",
        url: "article/6/",
        titulo: "Spend a Dollar on Upcoming iPhone 13, and How to Save More",
        categoria: "Must Read",
        descripcion: "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet",
        imagen: "https://images.unsplash.com/photo-1592286927505-c0d8c8c2cc13?w=400&h=300&fit=crop",
        contenido: "Estrategias inteligentes para ahorrar dinero al comprar el nuevo iPhone 13. Descubre programas de intercambio, ofertas especiales y consejos para conseguir el mejor precio posible en el último dispositivo de Apple."
    },
    {
        id: 7,
        name: "gypsum-crystals-desert",
        url: "article/7/",
        titulo: "What Moves Gravel-Size Gypsum Crystals Around the Desert?",
        categoria: "Technology",
        descripcion: "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet",
        imagen: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=400&h=300&fit=crop",
        contenido: "Científicos investigan el misterioso movimiento de cristales de yeso del tamaño de grava en el desierto. Este fenómeno natural ha desconcertado a los investigadores durante años, y nuevos estudios revelan las fuerzas detrás de este movimiento aparentemente imposible."
    },
    {
        id: 8,
        name: "henrietta-lacks-cells",
        url: "article/8/",
        titulo: "A Lesson From the Henrietta Lacks Story: Science Needs Your Cells",
        categoria: "Technology",
        descripcion: "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet",
        imagen: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400&h=300&fit=crop",
        contenido: "La historia de Henrietta Lacks nos enseña sobre la importancia de las células humanas en la investigación científica. Sus células, conocidas como HeLa, han sido fundamentales en innumerables descubrimientos médicos, planteando importantes cuestiones éticas sobre el consentimiento y la propiedad biológica."
    },
    {
        id: 9,
        name: "dogs-science-duty",
        url: "article/9/",
        titulo: "Dogs Do Their Duty for Science",
        categoria: "Gadgets",
        descripcion: "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet",
        imagen: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=300&fit=crop",
        contenido: "Perros equipados con tecnología wearable están ayudando en importantes investigaciones científicas. Estos dispositivos permiten recopilar datos valiosos sobre el comportamiento animal y el medio ambiente, demostrando cómo nuestros mejores amigos contribuyen al avance de la ciencia."
    },
    {
        id: 10,
        name: "iot-failure-nightmare",
        url: "article/10/",
        titulo: "An IoT Failure Worst Nightmare",
        categoria: "Gadgets",
        descripcion: "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet",
        imagen: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=400&h=300&fit=crop",
        contenido: "Cuando la Internet de las Cosas falla catastróficamente, las consecuencias pueden ser devastadoras. Análisis de las peores fallas de seguridad en dispositivos IoT y cómo protegerse de estos riesgos en un mundo cada vez más conectado."
    },
    {
        id: 11,
        name: "escalators-walking",
        url: "article/11/",
        titulo: "Why You Shouldn't Walk on Escalators",
        categoria: "Software",
        descripcion: "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet",
        imagen: "https://images.unsplash.com/photo-1506003094589-53954a26283f?w=400&h=300&fit=crop",
        contenido: "La ciencia detrás de la eficiencia de las escaleras mecánicas. Estudios recientes demuestran que las escaleras mecánicas son más eficientes cuando todos los usuarios permanecen quietos en lugar de caminar sobre ellas, contrario a la intuición popular."
    },
    {
        id: 12,
        name: "cad-shortcuts",
        url: "article/12/",
        titulo: "Life on CAD: Get to Know the Shortcut",
        categoria: "Software",
        descripcion: "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet",
        imagen: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=300&fit=crop",
        contenido: "Una guía completa de atajos de teclado que todo diseñador CAD debe conocer para trabajar más rápido y eficientemente. Mejora tu productividad con estos atajos esenciales que transformarán tu flujo de trabajo en el diseño asistido por computadora."
    },
    {
        id: 13,
        name: "octopuses-genetic-oddity",
        url: "article/13/",
        titulo: "A Genetic Oddity May Give Octopuses and Squids Their Smarts",
        categoria: "Games",
        descripcion: "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet",
        imagen: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
        contenido: "Nueva investigación revela una peculiaridad genética que podría explicar la sorprendente inteligencia de pulpos y calamares. Este descubrimiento genético arroja luz sobre cómo estos cefalópodos desarrollaron sus extraordinarias capacidades cognitivas."
    },
    {
        id: 14,
        name: "badger-cow-carcass",
        url: "article/14/",
        titulo: "After Badger Buries Entire Cow Carcass, Scientists Go to the Tape",
        categoria: "Games",
        descripcion: "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet",
        imagen: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=400&h=300&fit=crop",
        contenido: "Por primera vez, científicos han documentado mediante cámaras a un tejón enterrando un animal mucho más grande que él: una vaca entera. Este comportamiento sin precedentes ha captado la atención de la comunidad científica y revela capacidades sorprendentes de estos animales."
    },
    {
        id: 15,
        name: "hans-dehmelt-nobel",
        url: "article/15/",
        titulo: "Hans Dehmelt, Nobel Laureate for Isolating Electrons, Dies at 94",
        categoria: "Apps",
        descripcion: "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet",
        imagen: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
        contenido: "Fallece a los 94 años Hans Dehmelt, pionero en física cuántica ganador del Premio Nobel. Recordamos la vida y el legado de este científico cuyo trabajo revolucionario en el aislamiento de electrones transformó nuestra comprensión de las partículas subatómicas."
    }
];

// Simular conexión para obtener lista de artículos
async function conexionLista(filtroCategoria) {
    // Simular delay de red
    await new Promise(resolve => setTimeout(resolve, 100));
    
    if (filtroCategoria == "All") {
        return articulosData.map(art => ({
            name: art.name,
            url: art.url
        }));
    } else {
        const articulosFiltrados = [];
        for (let i = 0; i < articulosData.length; i++) {
            if (articulosData[i].categoria === filtroCategoria) {
                articulosFiltrados.push({
                    name: articulosData[i].name,
                    url: articulosData[i].url
                });
            }
        }
        return articulosFiltrados;
    }
}

// Obtener información completa de un artículo
function obtenerArticulo(id) {
    for (let i = 0; i < articulosData.length; i++) {
        if (articulosData[i].id == id) {
            return articulosData[i];
        }
    }
    return null;
}

// Cargar todos los artículos al iniciar
async function General() {
    if (articulos.length === 0) {
        const lista = await conexionLista("All");
        articulos = lista;
    }
    Home();
}

// Filtrar por categoría
async function FiltroConexion(ElFiltro) {
    document.getElementById("la-lista").innerHTML = "";
    articulos = await conexionLista(ElFiltro);
    const listaHTML = generarLista(articulos);
    document.getElementById("la-lista").innerHTML = listaHTML;
}

General();