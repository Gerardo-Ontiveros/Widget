// 1. Configuración de Firebase (Copia esto desde tu panel de Firebase)
const firebaseConfig = {
  apiKey: "AIzaSyD4PSLSrCqBQ80DXzAqVcstZ1rk8y35Y_g",
  authDomain: "clamosbot.firebaseapp.com",
  databaseURL: "https://clamosbot-default-rtdb.firebaseio.com",
  projectId: "clamosbot",
  storageBucket: "clamosbot.firebasestorage.app",
  messagingSenderId: "805880629093",
  appId: "1:805880629093:web:6d5605792c40d3fc6e838c",
  measurementId: "G-3TZ7Z47K2F",
};

// 2. Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// 1. Apuntar al nodo "padre" (esto estaba bien)
const statsRef = database.ref("stream/stats");

// 2. Escuchar cambios en CUALQUIER valor dentro de "stats"
statsRef.on("value", (snapshot) => {
  // 3. ¡CORRECCIÓN! Obtener el objeto COMPLETO
  const stats = snapshot.val();

  // 4. Seleccionar AMBOS elementos HTML
  const winsElement = document.getElementById("wins-value");
  const losesElement = document.getElementById("loses-value");
  const attemptsElement = document.getElementById("attempts-value");

  // 5. Comprobar si el objeto 'stats' existe
  if (stats) {
    // 6. Actualizar cada elemento con su valor
    // Usamos '|| 0' por si 'wins' o 'loses' aún no se han creado
    winsElement.innerText = stats.wins || 0;
    losesElement.innerText = stats.loses || 0;
    attemptsElement.innerText = stats.attempts || 0;
  } else {
    // 7. ¡CORRECCIÓN! Si 'stats' no existe, inicializarlo
    // con la estructura de OBJETO correcta.
    statsRef.set({ wins: 0, loses: 0 });
    winsElement.innerText = 0;
    losesElement.innerText = 0;
    attemptsElement.innerText = 0;
  }
});
