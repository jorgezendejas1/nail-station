// main.js

// Cambia el tema dinámicamente según la hora del día
function aplicarTemaPorHora() {
  const hora = new Date().getHours();
  const body = document.body;

  body.classList.remove("morning", "night", "late");

  if (hora >= 6 && hora < 12) {
    body.classList.add("morning");
  } else if (hora >= 18 || hora < 3) {
    body.classList.add("night");
  } else {
    body.classList.add("late");
  }
}

// Efecto de color reactivo al movimiento del mouse
function activarColoresMouse() {
  const root = document.documentElement;

  document.addEventListener("mousemove", (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    const red = Math.round(255 * x);
    const green = Math.round(255 * y);
    const blue = 255 - Math.round((x + y) * 127);

    const color = `rgb(${red}, ${green}, ${blue})`;

    root.style.setProperty("--color-secundario", color);
  });
}

// Inicializar todo
document.addEventListener("DOMContentLoaded", () => {
  aplicarTemaPorHora();
  activarColoresMouse();
});
