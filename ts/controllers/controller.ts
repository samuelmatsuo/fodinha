import AlertMsgClose from "../scripts/alert/AlertMsgClose";
import AlertMsgWin from "../scripts/alert/AlertMsgWin";
import limparCampo from "./limparCampo";

interface Jogador {
    nome: string;
    pontuacao: number;
}

let jogadores: Jogador[] = [];

function adicionarCampo() {
    debugger
    if (jogadores.length < 6) {
        const containerJogadores = document.getElementById("jogadores");

        const divNovoJogador = document.createElement("div");
        divNovoJogador.style.display = "inline-block";

        const label = document.createElement("label");
        label.htmlFor = "nome"; // Corrigido para htmlFor
        label.style.fontSize = "25px";
        label.style.display = "block";
        label.innerText = "Nome do Jogador:";
        divNovoJogador.appendChild(label);

        const input = document.createElement("input");
        input.type = "text";
        input.id = "nome";
        input.required = true;
        input.style.margin = "auto";
        input.style.display = "block";
        input.style.fontSize = "25px";
        divNovoJogador.appendChild(input);

        const button = document.createElement("button");
        button.innerText = "Cadastrar";
        button.onclick = function () {
            cadastrarJogador();
        };
        divNovoJogador.appendChild(button);

        containerJogadores!.appendChild(divNovoJogador);
    } else {
        alert("Número máximo de jogadores atingido (6 jogadores).");
    }
}

function cadastrarJogador() {
    const nomeJogador = (document.getElementById("nome") as HTMLInputElement).value;
    if (nomeJogador.trim() === "") {
        AlertMsgClose("Por favor, insira o nome do jogador.", false);
        return;
    }
    const jogador: Jogador = {
        nome: nomeJogador,
        pontuacao: 5
    };
    jogadores.push(jogador);
    localStorage.setItem("jogadores", JSON.stringify(jogadores));

    if (jogadores.length < 6) {
        limparCampo();
    } else {
        window.location.href = "views/pontuacao.html";
    }
    window.location.reload();
}

window.onload = function () {
    carregarJogadores();
};

function carregarJogadores() {
    const jogadoresLocalStorage = localStorage.getItem("jogadores");
    if (jogadoresLocalStorage !== null) {
        const jogadoresParsed = JSON.parse(jogadoresLocalStorage);
        if (Array.isArray(jogadoresParsed)) {
            jogadores = jogadoresParsed;
            exibirJogadores();
        } else {
            console.error("O valor armazenado para 'jogadores' não é uma matriz válida.");
        }
    }
}

function exibirJogadores() {
    const containerJogadores = document.getElementById("jogadores");
    containerJogadores!.innerHTML = "";
    jogadores.forEach(function (jogador, index) {
        const divJogador = document.createElement("div");
        divJogador.classList.add("jogador");

        const nomeJogador = document.createElement("span");
        nomeJogador.style.fontSize = "25px";
        nomeJogador.innerText = jogador.nome;

        const pontuacaoJogador = document.createElement("span");
        pontuacaoJogador.style.fontSize = "25px";
        pontuacaoJogador.innerText = "vida: " + jogador.pontuacao;

        const btnRemoverVida = document.createElement("button");
        btnRemoverVida.style.fontSize = "25px";
        btnRemoverVida.innerText = "- 1 Vida";
        btnRemoverVida.onclick = function () {
            removerVida(index);
        };

        divJogador.appendChild(nomeJogador);
        divJogador.appendChild(pontuacaoJogador);
        divJogador.appendChild(btnRemoverVida);

        containerJogadores!.appendChild(divJogador);
    });
}

function removerVida(index: number) {
    jogadores[index].pontuacao--;
    localStorage.setItem("jogadores", JSON.stringify(jogadores));
    exibirJogadores();

    const jogador = jogadores[index];
    if (jogador.pontuacao === 0) {
        AlertMsgClose(jogadores[index].nome + " Se fudeu!", true);

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
(window as any).cadastrarJogador = cadastrarJogador;
(window as any).adicionarCampo = adicionarCampo;
