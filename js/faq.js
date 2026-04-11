const container = document.getElementById("faq-container");
const template = document.getElementById("faq-template");

if (container && template) {
  fetch("./data/faq.json")
    .then(res => res.json())
    .then(faqs => {

      faqs.forEach(item => {
        const clone = template.content.cloneNode(true);

        clone.querySelector(".faq-text").textContent = item.pergunta;
        clone.querySelector(".faq-answer").textContent = item.resposta;

        container.appendChild(clone);
      });

      // 🔥 IMPORTANTE: ativar acordeon depois de criar
      const items = document.querySelectorAll(".faq-item");

      items.forEach((item) => {
        const question = item.querySelector(".faq-question");

        question.addEventListener("click", () => {
          items.forEach(i => {
            if (i !== item) i.classList.remove("active");
          });

          item.classList.toggle("active");
        });
      });

    })
    .catch(err => console.error("Erro ao carregar FAQ:", err));
}