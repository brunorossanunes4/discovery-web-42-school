const botao = document.getElementById("botao");

const cores = ["azul", "laranja", "rosa", "verde", "roxo"];
let corAtual;

botao.addEventListener("click", function() {
    let novaCor;
    do {
        novaCor = cores[Math.floor(Math.random() * cores.length)];
    } while (novaCor === corAtual);

    corAtual = novaCor;
    document.body.className = corAtual;
});