const slider = document.querySelector('.slide-comment');

if (slider) {
  const container = slider;

  const next = document.getElementById('next');
  const prev = document.getElementById('prev');

  if (next && prev) {
    next.onclick = () => {
      container.scrollBy({ left: 420, behavior: 'smooth' });
    };

    prev.onclick = () => {
      container.scrollBy({ left: -420, behavior: 'smooth' });
    };
  }

  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;

    document.body.style.userSelect = 'none';
  });

  slider.addEventListener('mouseup', () => {
    isDown = false;
    document.body.style.userSelect = 'auto';
  });

  slider.addEventListener('mouseleave', () => {
    isDown = false;
    document.body.style.userSelect = 'auto';
  });

  slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;

    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
  });
}