import AlertMsgClose from "./componentes/alert/AlertMsgClose.js";
import AlertMsgNotNull from "./componentes/alert/AlertMsgNotNull.js";
import AlertMsgWin from "./componentes/alert/AlertMsgWin.js";
import limparCampo from "./limparCampo.js";

var jogadores = [];

function adicionarCampo() {
    if (jogadores.length < 6) {
        var containerJogadores = document.getElementById("jogadores");

        var divNovoJogador = document.createElement("div");
        divNovoJogador.style.display = "inline-block";

        var label = document.createElement("label");
        label.htmlFor = "nome"; // Corrigido para htmlFor
        label.style.fontSize = "25px";
        label.style.display = "block";
        label.innerText = "Nome do Jogador:";
        divNovoJogador.appendChild(label);

        var input = document.createElement("input");
        input.type = "text";
        input.id = "nome";
        input.required = true;
        input.style.margin = "auto";
        input.style.display = "block";
        input.style.fontSize = "25px";
        divNovoJogador.appendChild(input);

        var button = document.createElement("button");
        button.innerText = "Cadastrar";
        button.onclick = function () {
            cadastrarJogador();
        };
        divNovoJogador.appendChild(button);

        containerJogadores.appendChild(divNovoJogador);
    } else {
        alert("Número máximo de jogadores atingido (6 jogadores).");
    }
}

function cadastrarJogador() {
    var nomeJogador = document.getElementById("nome").value;
    if (nomeJogador.trim() === "") {
        AlertMsgNotNull("Por favor, insira o nome do jogador.");
        return;
    }
    var jogador = {
        nome: nomeJogador,
        pontuacao: 5
    };
    jogadores.push(jogador);
    localStorage.setItem("jogadores", JSON.stringify(jogadores));

    if (jogadores.length < 6) {
        limparCampo();
    } else {
        window.location.href = "pontuacao.html";
    }
    window.location.reload();
}

window.onload = function () {
    carregarJogadores();
}

function carregarJogadores() {
    var jogadoresLocalStorage = JSON.parse(localStorage.getItem("jogadores"));
    if (jogadoresLocalStorage !== null) {
        jogadores = jogadoresLocalStorage;
        exibirJogadores();
    }
}

function exibirJogadores() {
    var containerJogadores = document.getElementById("jogadores");
    containerJogadores.innerHTML = "";
    jogadores.forEach(function (jogador, index) {
        var divJogador = document.createElement("div");
        divJogador.classList.add("jogador");

        var nomeJogador = document.createElement("span");
        nomeJogador.style.fontSize = "25px";
        nomeJogador.innerText = jogador.nome;

        var pontuacaoJogador = document.createElement("span");
        pontuacaoJogador.style.fontSize = "25px";
        pontuacaoJogador.innerText = "vida: " + jogador.pontuacao;

        var btnRemoverVida = document.createElement("button");
        btnRemoverVida.style.fontSize = "25px";
        btnRemoverVida.innerText = "- 1 Vida";
        btnRemoverVida.onclick = function () {
            removerVida(index);
        };

        divJogador.appendChild(nomeJogador);
        divJogador.appendChild(pontuacaoJogador);
        divJogador.appendChild(btnRemoverVida);

        containerJogadores.appendChild(divJogador);
    });
}

function removerVida(index) {
    jogadores[index].pontuacao--;
    localStorage.setItem("jogadores", JSON.stringify(jogadores));
    exibirJogadores();

    var jogador = jogadores[index];
    if (jogador.pontuacao === 0) {

        AlertMsgClose(jogadores[index].nome + " Se fudeu!");

        jogadores.splice(index, 1);
        localStorage.setItem("jogadores", JSON.stringify(jogadores));
        exibirJogadores();

        if (jogadores.length === 1) {
            AlertMsgWin(
                jogadores[0].nome + " ganhou!",
                jogadores
            );
        }
    }
}

// Tornando a função disponível globalmente
window.cadastrarJogador = cadastrarJogador;
window.adicionarCampo = adicionarCampo;