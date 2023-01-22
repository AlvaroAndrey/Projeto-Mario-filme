/*OBJETIVO 1: quando o usuário clicar no botão de veja o trailer, devemos abrir o modal com o video do trailer.
- Passo 1: dar um jeito de pegar o elemento que representa o botão na tela usando o js.
- Passo 2: dar um jeito de identificar quando o usuário clica no botão.
- Passo 3: dar um jeito de pegar o elemento da modal com js.
- Passo 4: abrir a modal na tela.

*OBJETIVO 2: quando o usuário clicar no X fechar a modal.
- Passo 1: dar um jeito de pegar o elemento de fechar a modal usando o js.- Passo 2: dar um jeito de identificar o usuário clicar no X.
- Passo 3: fechar a modal.*/

//Passo 1: dar um jeito de pegar o elemento que representa o botão na tela usando o js.
const botaoTrailer = document.querySelector(".traco-trailer");
const botaoFeacharModal = document.querySelector(".fechar-modal");
const modal = document.querySelector(".modal");
const video = document.getElementById("video");
const linkDoVideo = video.src;
console.log(linkDoVideo);


botaoTrailer.addEventListener("click", () => {
    modal.classList.add("aberto");
    video.setAttribute("src", linkDoVideo);
});

botaoFeacharModal.addEventListener("click", () => {
    modal.classList.remove("aberto");
    video.setAttribute("src", "");
});
