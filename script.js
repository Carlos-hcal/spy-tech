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

const comments = [
  {
    texto: "Gostaríamos de expressar nosso sincero agradecimento à empresa Spy Tech pelos excelentes serviços prestados. A dedicação, profissionalismo e qualidade demonstrados ao longo do trabalho fizeram toda a diferença para alcançar os resultados esperados. A equipe mostrou comprometimento, eficiência e atenção aos detalhes em cada etapa, transmitindo confiança e segurança.",
    nome: "Lucas Silva",
    cargo: "Tia da Cantina | Escola do Mecânico",
    perfil: "./img/lucas.svg",
    empresa: "./img/Logo-Escola-do-Mecanico-1.png"
  },
  {
    texto: "A experiência com a Spy Tech foi extremamente positiva do início ao fim. O time demonstrou alto nível de conhecimento técnico, organização e compromisso com os prazos estabelecidos. Cada etapa do projeto foi conduzida com clareza e transparência, o que nos trouxe muita confiança durante todo o processo. O resultado final superou nossas expectativas e agregou valor real ao nosso negócio.",
    nome: "Fernanda Alves",
    cargo: "CEO | Maré Soul",
    perfil: "./img/fernanda.svg",
    empresa: "./img/mare-soul.png"
  },
  {
    texto: "Ficamos muito satisfeitos com a qualidade do serviço prestado pela Spy Tech. Desde o primeiro contato, a equipe se mostrou atenciosa, ágil e preparada para entender nossas necessidades. A entrega foi realizada com excelência, dentro do prazo e com um nível de acabamento que realmente se destaca. Sem dúvidas, foi uma parceria muito bem-sucedida.",
    nome: "Ricardo Gomes",
    cargo: "CEO | Canal Imports",
    perfil: "./img/ricardo.svg",
    empresa: "./img/canal-imports.png"
  },
  {
    texto: "A Spy Tech demonstrou profissionalismo e competência em todas as fases do projeto. A comunicação foi sempre clara e objetiva, facilitando o alinhamento das expectativas e decisões. Além disso, a equipe apresentou soluções inteligentes que contribuíram diretamente para a melhoria dos nossos processos internos. Estamos muito satisfeitos com os resultados alcançados.",
    nome: "Juliana Rocha",
    cargo: "Gerente de Operações | NexaCorp",
     perfil: "./img/juliana.svg",
    empresa: "./img/teu-estilo.svg"
  },
  {
    texto: "Trabalhar com a Spy Tech foi uma experiência muito produtiva. A equipe mostrou domínio técnico, organização e uma atenção especial aos detalhes que fizeram toda a diferença no resultado final. O suporte durante e após a entrega também foi um grande diferencial, garantindo que tudo funcionasse perfeitamente. Recomendamos fortemente os serviços prestados.",
    nome: "Ricardo Gomes",
    cargo: "CTO | Alpha Systems",
    perfil: "./img/ricardo.svg",
    empresa: "./img/Logo-Escola-do-Mecanico-1.png"
  },
  {
    texto: "Gostaríamos de destacar a excelência do trabalho realizado pela Spy Tech. A equipe foi extremamente dedicada, compreendendo nossas necessidades e propondo soluções eficazes e bem estruturadas. O projeto foi conduzido com profissionalismo e responsabilidade, resultando em uma entrega de alta qualidade. Com certeza voltaremos a trabalhar juntos em novos projetos.",
    nome: "Patrícia Lima",
    cargo: "Coordenadora | VisionTech"
  }
];

const template = document.getElementById("comment-template");

comments.forEach((item) => {
  const clone = template.content.cloneNode(true);

  clone.querySelector(".comment").textContent = item.texto;
  clone.querySelector(".nome").textContent = item.nome;
  clone.querySelector(".cargo").textContent = item.cargo;
  clone.querySelector(".perfil img").src = item.perfil;
  clone.querySelector(".comment-card > img").src = item.empresa;

  slider.appendChild(clone);
});