const botao = document.getElementById("botao");
const lista = document.getElementById("ft_list");


// Função que cria a nova tarefa, já com a opção de deletar ao clicar
function criarTarefa(titulo) {
    const novaTarefa = document.createElement("div");
    novaTarefa.textContent = titulo;
    novaTarefa.style.border = "1px solid #333";

    novaTarefa.addEventListener("click", () => {
        const confirmar = confirm(`Você deseja remover a tarefa "${titulo}"?`);
            if (confirmar) {
                novaTarefa.remove();
                salvarTarefas();
            }
        });
        return novaTarefa;
        }


// Função que transforma as tarefas em uma array de texto e salva como cookie
function salvarTarefas() {
    const tarefas = Array.from(lista.children).map(div => div.textContent);
    const valor = JSON.stringify(tarefas);

    document.cookie = "minhastarefas=" + valor + "; path=/; max-age=" + (60*60*24*30)
}


// Função que lê o cookie com a chave dada no argumento e retorna apenas o valor dele
function lerCookie(nome) {
    const partes = document.cookie.split("; ");

    for (const parte of partes) {
        const [chave, valor] = parte.split("=");
        if (chave === nome) {
            return valor;
        }
    }

    return null;
}


// Função que, ao carregar a página, transforma o cookie de volta em array e recria a lista de tarefas
function carregarTarefas() {
    const valor = lerCookie("minhastarefas");

    if (valor) {
        const tarefas = JSON.parse(valor);
        tarefas.forEach(titulo => {
            const elemento = criarTarefa(titulo);
            lista.appendChild(elemento);
        });
    }
}


// Funcionamento do botão
botao.addEventListener("click", () => {
    const titulo = prompt("Digite o nome da nova tarefa:");

    if (titulo) {
        const novaTarefa = criarTarefa(titulo);
        lista.prepend(novaTarefa);
        salvarTarefas();
    }
})

carregarTarefas();
