const cores = ["azul", "laranja", "rosa", "verde", "roxo"];
let corAtual;

$("#botao").click(function() {
    let novaCor;
    do {
        novaCor = cores[Math.floor(Math.random() * cores.length)];
    } while (novaCor === corAtual);

    corAtual = novaCor;
    $("body").attr("class", corAtual);
});