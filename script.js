var button = document.querySelector("#move-button");

button.addEventListener("click", function() {
  // Obtém as dimensões da janela
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;

  // Gera posições aleatórias
  var newX = Math.floor(Math.random() * windowWidth);
  var newY = Math.floor(Math.random() * windowHeight);

  // Atualiza a posição do botão
  button.style.left = newX + "px";
  button.style.top = newY + "px";
});

hide = () => {
    const mensagem = document.querySelector(".mensagem")
    mensagem.classList.add("hide")
}