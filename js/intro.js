const introMusic = document.getElementById("introMusic");
const toggleBtn = document.getElementById("musicToggle");
const nextBtn = document.getElementById("nextMusic");
const prevBtn = document.getElementById("prevMusic");

let playlist = [
    "assets/Siwar-Situy.mp3",
    "assets/una-pandereta.mp3",
    "assets/lindo-ninucha.mp3",
    "assets/Villancico-Llegó-Ya-Navidad.mp3",
    "assets/vamos-pastores.mp3",
    "assets/rueda-rueda.mp3"
];

let currentSong = 0;

export function playlistIntro() {
    introMusic.src = playlist[currentSong];
    introMusic.volume = 0.6;
    introMusic.play().catch(() => console.log("Autoplay bloqueado 😅"));

    // 👉 Cuando termina una canción pasa a la siguiente
    introMusic.addEventListener("ended", nextSong);

    // 🎛️ Botón Play / Pausa
    if (toggleBtn) {
        toggleBtn.addEventListener("click", () => {
            if (introMusic.paused) {
                introMusic.play();
                toggleBtn.textContent = "⏸️ Pausar canción";
            } else {
                introMusic.pause();
                toggleBtn.textContent = "▶️ Reanudar canción";
            }
        });
    }

    if (nextBtn) nextBtn.addEventListener("click", nextSong);
  if (prevBtn) prevBtn.addEventListener("click", prevSong);
}

// ⏮️ anterior
function prevSong() {
  currentSong--;
  if (currentSong < 0) currentSong = playlist.length - 1;

  introMusic.src = playlist[currentSong];
  introMusic.play();
}


// 👉 Función que cambia a la siguiente canción
function nextSong() {
    currentSong++;

    if (currentSong >= playlist.length) {
        currentSong = 0; // vuelve al inicio si se acaba
    }

    introMusic.src = playlist[currentSong];
    introMusic.play();
}


// ⛔ DETENER TODO cuando se abra el regalo
export function stopIntroMusicUI() {
    introMusic.pause();
    introMusic.currentTime = 0;

    if (toggleBtn) toggleBtn.style.display = "none";
    if (nextBtn) nextBtn.style.display = "none";
    if (prevBtn) prevBtn.style.display = "none";
}
