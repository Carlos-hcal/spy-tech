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

  const container = document.querySelector('.slide-comment');

  document.getElementById('next').onclick = () => {
    container.scrollBy({
      left: 420,
      behavior: 'smooth'
    });
  };

  document.getElementById('prev').onclick = () => {
    container.scrollBy({
      left: -420,
      behavior: 'smooth'
    });
  };

    let isDown = false;
  let startX;
  let scrollLeft;

  const slider = document.querySelector('.slide-comment');

  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;

     document.body.style.userSelect = 'none';
  });

  slider.addEventListener('mouseleave', () => {
    isDown = false;

    document.body.style.userSelect = 'auto';
  });

  slider.addEventListener('mouseup', () => {
    isDown = false;

    document.body.style.userSelect = 'auto';
  });

  slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; // velocidade
    slider.scrollLeft = scrollLeft - walk;
  });