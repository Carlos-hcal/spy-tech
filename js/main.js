import "./global.js";
import "./slider.js";
import "./comments.js";
import "./faq.js";
import { initFingerEffects } from "./effects.js";

const svg = document.querySelector(".bg-fingers");

const positions = [
  [100, 100], [400, 150], [700, 120], [1000, 160],
  [1300, 130], [1600, 170], [200, 300], [500, 320],
  [800, 290], [1100, 330], [1400, 310], [1700, 340],
  [120, 500], [420, 520], [720, 480], [1020, 540],
  [1320, 510], [1620, 550], [250, 700], [550, 720],
  [850, 690], [1150, 740], [1450, 710], [1750, 750],
  [350, 900], [750, 920], [1150, 890], [1550, 940],
  [1850, 900]
];

positions.forEach(([x, y]) => {
  const img = document.createElementNS("http://www.w3.org/2000/svg", "image");

  img.setAttributeNS("http://www.w3.org/1999/xlink", "href", "./assets/img/finger.svg");
  img.setAttribute("x", x);
  img.setAttribute("y", y);
  img.setAttribute("width", "120");
  img.setAttribute("class", "finger");

  svg.appendChild(img);
});

initFingerEffects();