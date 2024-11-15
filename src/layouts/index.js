const background = document.querySelector('.back');
const dots = [];
const numDotsX = 20;
const numDotsY = 20;

const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

const spacingX = screenWidth / numDotsX;
const spacingY = screenHeight / numDotsY;

for (let i = 0; i < numDotsX; i++) {
  for (let j = 0; j < numDotsY; j++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.style.left = `${i * spacingX}px`;
    dot.style.top = `${125 + j * spacingY}px`;
    background.appendChild(dot);
    dots.push(dot);
  }
}

let mouseX = screenWidth / 2;
let mouseY = screenHeight / 2;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateDots() {
  dots.forEach((dot) => {
    const dotX = parseFloat(dot.style.left);
    const dotY = parseFloat(dot.style.top);

    const deltaX = (mouseX - dotX) * 0.03; 
    const deltaY = (mouseY - dotY) * 0.03;

    dot.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
  });

  requestAnimationFrame(animateDots);
}

animateDots();