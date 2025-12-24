
export function startSnow() {
    const snowContainer = document.querySelector('.snow');

for(let i=0; i<80; i++){
  const snow = document.createElement('span');

  let size = Math.random()*8 + 3;
  let posX = Math.random()*100;
  let delay = Math.random()*10;
  let duration = Math.random()*10 + 10;

  snow.style.width = size+'px';
  snow.style.height = size+'px';
  snow.style.left = posX+'vw';
  snow.style.animationDuration = duration+'s';
  snow.style.animationDelay = delay+'s';

  snowContainer.appendChild(snow);
}
  console.log("❄️ Inicia la nieve");
}
