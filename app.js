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

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

const statsRef = database.ref("stream/stats");

statsRef.on("value", (snapshot) => {
  const stats = snapshot.val();

  // 4. Seleccionar AMBOS elementos HTML
  const winsElement = document.getElementById("wins-value");
  const losesElement = document.getElementById("loses-value");
  const attemptsElement = document.getElementById("racha-value");

  if (stats) {
    winsElement.innerText = stats.wins || 0;
    losesElement.innerText = stats.loses || 0;
    attemptsElement.innerText = stats.racha || 0;
  } else {
    statsRef.set({ wins: 0, loses: 0, racha: 0 });
    winsElement.innerText = 0;
    losesElement.innerText = 0;
    attemptsElement.innerText = 0;
  }
});