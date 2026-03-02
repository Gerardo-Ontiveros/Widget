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
const statsRef = database.ref("stream/seasonFinal");

statsRef.on("value", (snapshot) => {
  const stats = snapshot.val();

  if (stats) {
    // --- SERGIO ---
    if (stats["Sergio"]) { 
      document.getElementById("sergio-wins").innerText = stats["Sergio"].wins || 0;
      document.getElementById("sergio-loses").innerText = stats["Sergio"].loses || 0;
      document.getElementById("sergio-rank").innerText = stats["Sergio"].rank || 0;
    }

    // --- ARDEN ---
    if (stats["Arden"]) { 
      document.getElementById("arden-wins").innerText = stats["Arden"].wins || 0;
      document.getElementById("arden-loses").innerText = stats["Arden"].loses || 0;
      document.getElementById("arden-rank").innerText = stats["Arden"].rank || 0;
    }

    // --- ANABAN ---
    if (stats["Anaban"]) { 
      document.getElementById("anaban-wins").innerText = stats["Anaban"].wins || 0;
      document.getElementById("anaban-loses").innerText = stats["Anaban"].loses || 0;
      document.getElementById("anaban-rank").innerText = stats["Anaban"].rank || 0;
    }
  }
});
