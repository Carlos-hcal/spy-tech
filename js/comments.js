const slider = document.querySelector('.slide-comment');
const template = document.getElementById("comment-template");

if (slider && template) {
  fetch("./data/comments.json")
    .then(res => res.json())
    .then(comments => {
      comments.forEach((item) => {
        const clone = template.content.cloneNode(true);

        clone.querySelector(".comment").textContent = item.texto;
        clone.querySelector(".nome").textContent = item.nome;
        clone.querySelector(".cargo").textContent = item.cargo;
        clone.querySelector(".perfil img").src = item.perfil;
        clone.querySelector(".comment-card > img").src = item.empresa;

        slider.appendChild(clone);
      });
    })
    .catch(err => console.error("Erro ao carregar comentários:", err));
}