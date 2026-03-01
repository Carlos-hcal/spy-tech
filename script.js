const toggle = document.getElementById("menu-toggle");
const links = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
  links.classList.toggle("active");
});

const fingers = document.querySelectorAll(".finger");

function pulseFingers() {
  if (!fingers.length) return;

  // Quantos fingers ativar (1 a 4)
  const amount = Math.floor(Math.random() * 30) + 10;

  const shuffled = Array.from(fingers).sort(() => 0.1 - Math.random());
  const selected = shuffled.slice(0, amount);

  selected.forEach((finger) => {
    const delay = Math.random() * 1500;
    const visibleTime = Math.random() * 5000 + 1000;

    // TAMANHO aleatório (0.5x a 1.2x)
    const scale = (Math.random() * 3 + 0.5).toFixed(2);

    // ROTAÇÃO aleatória (-40° a 40°)
    const rotation = Math.floor(Math.random() * 45 - 45);

    setTimeout(() => {
      finger.style.transform = `scale(${scale}) rotate(${rotation}deg)`;
      finger.classList.add("active");

      setTimeout(() => {
        finger.classList.remove("active");
      }, visibleTime);

    }, delay);
  });

  const nextCycle = Math.random() * 3000 + 2000;
  setTimeout(pulseFingers, nextCycle);
}

pulseFingers();