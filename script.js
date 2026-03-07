const toggle = document.getElementById("menu-toggle");
const links = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
  links.classList.toggle("active");
});

const fingers = document.querySelectorAll(".finger");
const isMobile = window.matchMedia("(max-width: 768px)").matches;

function pulseFingers() {
  if (!fingers.length) return;

  const amount = isMobile
    ? Math.floor(Math.random() * 20) + 10
    : Math.floor(Math.random() * 20) + 10;

  const shuffled = Array.from(fingers).sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, amount);

  selected.forEach((finger) => {
    const delay = Math.random() * 1200;

    const visibleTime = isMobile
      ? Math.random() * 3000 + 1500
      : Math.random() * 3000 + 1500;

    const scale = isMobile
      ? (Math.random() * 3 + 0.5).toFixed(2)
      : (Math.random() * 3 + 0.5).toFixed(2);

    const rotation = Math.floor(Math.random() * 40 - 40);

    setTimeout(() => {
      // define transform UMA VEZ
      finger.style.transform = `scale(${scale}) rotate(${rotation}deg)`;

      finger.classList.add("active");

      setTimeout(() => {
        finger.classList.remove("active");
      }, visibleTime);

    }, delay);
  });

  const nextCycle = isMobile
    ? Math.random() * 3000 + 2000
    : Math.random() * 3000 + 2000;

  setTimeout(pulseFingers, nextCycle);
}

pulseFingers();

