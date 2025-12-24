import { btnStop, lyricsSong, stopMusicUI } from "./lyrics.js";
import { stopIntroMusicUI } from "./intro.js";

export function showGiftMessage() {
  console.log("🎁 Mensaje del regalo activo");
  let gift = document.querySelector(".gift-box");
  const lid = document.getElementById('lid');
  const message = document.getElementById("message");
  const hint = document.querySelector(".click-hint");


  const frases = [
    "Abriste el regalo, pero tú sigues siendo mi parte favorita.",
    "Tu presencia me acomoda el día. Solo quería recordártelo.",
    "No encontré nada que brillara más que tú… así que puse mis ganas de abrazarte aquí.",
    "Ojalá esto te saque una sonrisa… la misma que me causas tú.",
    "Tal vez no es mucho, pero salió de un lugar bonito en mí: el lugar donde te quiero.",
    "No sé si eres magia… pero contigo todo se siente más bonito.",
    "Hay cosas que no planeé, como quererte así de bonito.",
    "No lo digo siempre… pero sí lo pienso mucho: me encantas."
  ];


  let angle = 0;               // ángulo actual
  let running = true;          // si la rotación automática está activa
  let rafId = null;            // id de requestAnimationFrame
  let shakeInterval = null;    // id del interval de temblor

  function spinLoop() {
    angle = (angle + 0.4); // velocidad (ajusta pequeño valor)
    gift.style.transform = `rotateX(-15deg) rotateY(${angle}deg)`;
    rafId = requestAnimationFrame(spinLoop);
  }
  rafId = requestAnimationFrame(spinLoop);

  /* ---------- Al hacer click: detener, temblar y abrir ---------- */
  gift.addEventListener('click', () => {
    if (!running) return;    // si ya se detuvo antes, ignorar
    running = false;
    if (hint) {
      hint.classList.add("hide-hint");
      setTimeout(() => hint.remove(), 700);
    }
    stopIntroMusicUI();


    // detener el RAF
    cancelAnimationFrame(rafId);

    // ángulo fijo al momento de detenerse
    const stoppedAngle = angle;

    // empezar temblor (pequeñas variaciones alrededor del ángulo detenido)
    const shakeDurationMs = 5000;
    const shakeStepMs = 80;
    let elapsed = 0;

    shakeInterval = setInterval(() => {
      // pequeñas oscilaciones (aleatorio pequeño para sensación natural)
      const dxDeg = (Math.random() - 0.5) * 2.2;  // +- ~1.1deg
      const tx = (Math.random() - 0.5) * 2;       // px
      const ty = (Math.random() - 0.5) * 2;       // px

      gift.style.transform = `rotateX(-15deg) rotateY(${stoppedAngle + dxDeg}deg) translateX(${tx}px) translateY(${ty}px)`;

      elapsed += shakeStepMs;
      if (elapsed >= shakeDurationMs) {
        clearInterval(shakeInterval);
        /* --- 2) GIRAR LA CAJA HACIA EL FRENTE --- */
        gift.style.transition = "transform 1.2s ease";
        gift.style.transform = "rotateX(-15deg) rotateY(0deg)";
        setTimeout(() => {
          document.querySelectorAll('.ribbon-front, .ribbon-back, .ribbon-left, .ribbon-right, .ribbon-top-left, .ribbon-top-right')
            .forEach(r => r.classList.add('open-ribbon'));

          // abrir lazo
          document.querySelectorAll(".bow-loop.left, .bow-loop.right, .bow-knot")
            .forEach(el => el.classList.add("open-bow"));

          lid.classList.add("fly");
          setTimeout(() => {
            message.innerHTML = `
              <div id="feliz" class="feliz-navidad">🎄 Feliz Navidad ❤️</div>
              <div id="random" class="random-text"></div>
            `;

            const feliz = document.getElementById("feliz");
            const random = document.getElementById("random");

            const tiempoFeliz = 4000; // cuánto dura Feliz Navidad al centro

            setTimeout(() => {
              // subir feliz navidad
              message.classList.add("show");

              feliz.classList.add("feliz-arriba");

              // 🎶 Música
              const music = document.getElementById("bgMusic");
              music.volume = 0.6;     // volumen bonito
              music.play().catch(() => {
                console.log("El navegador bloqueó el audio 😅");
              });

              lyricsSong();
              btnStop();
              stopMusicUI();
              // mostrar frases
              let i = 0;
              random.textContent = frases[i];
              random.classList.add("random-show");

              setInterval(() => {
                i = (i + 1) % frases.length;
                random.textContent = frases[i];
              }, 5500);

            }, tiempoFeliz);

          }, 200);


        }, 1300);

      }
    }, shakeStepMs);
  });

}



