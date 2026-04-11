export function initFingerEffects() {
  const fingers = document.querySelectorAll(".finger");

  if (!fingers.length) return;

  function pulseFingers() {
    const amount = Math.floor(Math.random() * 20) + 10;

    const shuffled = Array.from(fingers).sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, amount);

    selected.forEach((finger) => {
      const delay = Math.random() * 1200;
      const visibleTime = Math.random() * 3000 + 1500;
      const scale = (Math.random() * 3 + 0.5).toFixed(2);
      const rotation = Math.floor(Math.random() * 40 - 40);

      setTimeout(() => {
        finger.style.transform = `scale(${scale}) rotate(${rotation}deg)`;
        finger.classList.add("active");

        setTimeout(() => {
          finger.classList.remove("active");
        }, visibleTime);
      }, delay);
    });

    setTimeout(pulseFingers, Math.random() * 3000 + 2000);
  }

  pulseFingers();
}