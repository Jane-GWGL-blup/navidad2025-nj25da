const music = document.getElementById("bgMusic");
const giftToggleBtn = document.getElementById("giftMusicToggle");
const lyricsBox = document.getElementById("lyrics");

export function lyricsSong() {
    if (!lyricsBox || !music) return;

    lyricsBox.classList.add("show");

    const lyricsTimeline = [
        { time: 0, text: "♪♫♬♪" },
        { time: 3, text: "Te-te-te-te-te-te necesi-" },
        { time: 5, text: "Te necesito" },
        { time: 7, text: "Te-te-te-te-te-te necesi-" },
        { time: 9, text: "Te necesito" },
        { time: 11, text: "Te-te-te-te-te-te necesi-" },
        { time: 13, text: "Te necesito" },
        { time: 14, text: "Nunca dije que no se lo iba a decir a nadie" },
        { time: 19, text: "No bebé..." },
        { time: 22, text: "Pero este buen amor," },
        { time: 24, text: "no puedo guardarmelo para mi misma" },
        { time: 27, text: "Oh no" },
        { time: 28, text: " " },
        { time: 29, text: "Cuando estamos juntos" },
        { time: 30, text: "Es como brazas ardiendo en calor" },
        { time: 33, text: " " },
        { time: 34, text: "Oh, bebé" },
        { time: 36, text: " " },
        { time: 37, text: "Mi cuerpo esta deseoso, asi que," },
        { time: 39, text: "presta atención a mi deseo" },
        { time: 42, text: "Vamos, vamos" },
        { time: 44, text: "Dos corazones" },
        { time: 46, text: "Dos corazones que laten como uno" },
        { time: 48, text: "Dos corazones" },
        { time: 49, text: "Te necesito," },
        { time: 50, text: "Te necesito, te necesito" },
        { time: 51, text: "Dos corazones" },
        { time: 53, text: "Dos corazones que laten como uno" },
        { time: 55, text: "Dos corazones" },
        { time: 57, text: "Vamos," },
        { time: 58, text: "Vamos, vamos" },
        { time: 59, text: "La gente se ponse celosa porque siempre estamos juntos" },
        { time: 63, text: "Si, carino" },
        { time: 64, text: " " },
        { time: 66, text: "Supongo que realmente quieren un amor como" },
        { time: 68, text: "El tuyo y el mio" },
        { time: 71, text: "Juntos, por siempre" },
        { time: 73, text: "Nunca pensé que algún dia me pondría tan feliz" },
        { time: 78, text: "Si, carino" },
        { time: 80, text: " " },
        { time: 81, text: "Mis oraciones fueron respondidas," },
        { time: 83, text: "llegaste justo a tiempo 💗⌛" },
        { time: 86, text: " " },
        { time: 87, text: "♪♫♬♪" },
        { time: 88, text: "Tengo el presentimiento de que te vas a quedar" },
        { time: 92, text: "Nunca imaginé que podría pasar de esta manera" },
        { time: 95, text: "Antes de conocerte me caía a pedazos" },
        { time: 99, text: "Pero ahora, por fín, realmente sé que somos..." },
        { time: 103, text: "Dos corazones" },
        { time: 105, text: "Dos corazones que laten como uno" },
        { time: 107, text: "Dos corazones" },
        { time: 108, text: "Te necesito," },
        { time: 109, text: "Te necesito, te necesito" },
        { time: 110, text: "Dos corazones" },
        { time: 112, text: "Dos corazones que laten como uno" },
        { time: 114, text: "Dos corazones" },
        { time: 116, text: "Vamos," },
        { time: 117, text: "Vamos, vamos" },
        { time: 118, text: "♪♫♬♪" },
        { time: 120, text: "♫♬♪♪" },
        { time: 121, text: "Te-te-te-te-te-te necesi-" },
        { time: 123, text: "Te necesito" },
        { time: 125, text: "Te-te-te-te-te necesi-" },
        { time: 126, text: "Te-te-te-te-te-te necesi-" },
        { time: 128, text: "Te necesi-" },
        { time: 130, text: "Te  necesi-" },
        { time: 131, text: "Te necesito" },
        { time: 133, text: "♪♫♬♪" },
        { time: 140, text: "Nunca dije que no se lo iba a decir a nadie" },
        { time: 145, text: "No bebé..." },
        { time: 147, text: "Pero este buen amor," },
        { time: 149, text: "no puedo guardarmelo para mi misma" },
        { time: 152, text: "Oh no" },
        { time: 154, text: "Cuando estamos juntos" },
        { time: 156, text: "Es como brazas ardiendo en calor" },
        { time: 159, text: "Oh, bebé" },
        { time: 161, text: " " },
        { time: 162, text: "Mi cuerpo esta deseoso, asi que," },
        { time: 164, text: "presta atención a mi deseo" },
        { time: 167, text: "♪♫♬♪" },
        { time: 170, text: "Tengo el presentimiento de que te vas a quedar" },
        { time: 173, text: "Nunca imaginé que podría pasar de esta manera" },
        { time: 177, text: "Antes de conocerte me caía a pedazos" },
        { time: 180, text: "Pero ahora, por fín, realmente sé que somos..." },
        { time: 184, text: "Dos corazones" },
        { time: 186, text: "Dos corazones que laten como uno" },
        { time: 187, text: "Dos corazones" },
        { time: 189, text: "Te necesito," },
        { time: 190, text: "Te necesito, te necesito" },
        { time: 191, text: "Dos corazones" },
        { time: 193, text: "Dos corazones que laten como uno" },
        { time: 195, text: "Dos corazones" },
        { time: 197, text: "Vamos," },
        { time: 198, text: "Vamos, vamos" },
        { time: 199, text: "Dos corazones" },
        { time: 201, text: "Dos corazones que laten como uno" },
        { time: 202, text: "Dos corazones" },
        { time: 204, text: "Te necesito," },
        { time: 205, text: "Te necesito, te necesito" },
        { time: 206, text: "Dos corazones" },
        { time: 208, text: "Dos corazones que laten como uno" },
        { time: 210, text: "Dos corazones" },
        { time: 212, text: "Vamos," },
        { time: 213, text: "Vamos, vamos" },
        { time: 214, text: "♪♫♬♪" },
        { time: 225, text: " " },
    ];

    let currentIndex = 0;

    // Mostrar primera línea inmediatamente
    lyricsBox.textContent = lyricsTimeline[0].text;

    music.addEventListener("timeupdate", () => {
        if (
            currentIndex < lyricsTimeline.length &&
            music.currentTime >= lyricsTimeline[currentIndex].time
        ) {
            lyricsBox.textContent = lyricsTimeline[currentIndex].text;
            currentIndex++;
        }
    });
}


// BOTÓN PAUSA / PLAY DE LA CANCIÓN DEL REGALO
const giftBtn = document.getElementById("giftMusicToggle");

export function btnStop() {
    giftBtn.classList.remove("hidden"); // mostrarlo cuando empiece

    giftBtn.addEventListener("click", () => {
        if (music.paused) {
            music.play();
            giftBtn.textContent = "⏸️ Pausar canción";
        } else {
            music.pause();
            giftBtn.textContent = "▶️ Reanudar canción";
        }
    });
}

// ⛔ DETENER cuando se acabe la cancion
export function stopMusicUI() {

giftBtn.addEventListener("ended", () => {
         if (giftToggleBtn) giftBtn.style.display = "none";
    });
}