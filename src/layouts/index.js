const background = document.querySelector('.back');
const dots = [];
const numDotsX = 20; // Numero di pallini sull'asse X
const numDotsY = 20; // Numero di pallini sull'asse Y

// Dimensioni dello schermo
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

// Spaziatura
const spacingX = screenWidth / numDotsX;
const spacingY = screenHeight / numDotsY;

for (let i = 0; i < numDotsX; i++) {
  for (let j = 0; j < numDotsY; j++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.style.left = `${i * spacingX}px`;
    dot.style.top = `${125 + j * spacingY}px`; // Partiamo da 80px in giù
    background.appendChild(dot);
    dots.push(dot);
  }
}

// Coordinate mouse (inizialmente al centro dello schermo)
let mouseX = screenWidth / 2;
let mouseY = screenHeight / 2;

// Aggiorna le coordinate del mouse
document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// Effetto di animazione
function animateDots() {
  dots.forEach((dot) => {
    const dotX = parseFloat(dot.style.left);
    const dotY = parseFloat(dot.style.top);

    // Calcola lo spostamento in base alla distanza dal mouse
    const deltaX = (mouseX - dotX) * 0.03; // Velocità di movimento
    const deltaY = (mouseY - dotY) * 0.03;

    // Aggiorna la posizione del pallino
    dot.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
  });

  requestAnimationFrame(animateDots);
}

animateDots();