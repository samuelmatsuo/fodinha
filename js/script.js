
var jogadores = [];

function adicionarCampo() {
    if (jogadores.length < 6) {
        var containerJogadores = document.getElementById("jogadores");

        // Criar uma nova div para cada jogador
        var divNovoJogador = document.createElement("div");
        divNovoJogador.style.display = "inline-block"; // Exibir lado a lado

        var label = document.createElement("label");
        label.for = "nome";
        label.style.fontSize = "25px";
        label.style.display = "block"; // Definindo como bloco
        label.innerText = "Nome do Jogador:";
        divNovoJogador.appendChild(label);

        var input = document.createElement("input");
        input.type = "text";
        input.id = "nome";
        input.required = true;
        input.style.margin = "auto"; // Centralizando horizontalmente
        input.style.display = "block"; // Definindo como bloco
        input.style.fontSize = "25px"; // Definindo o tamanho da fonte
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
        alert("Por favor, insira o nome do jogador.");
        return; // Sai da função se o nome estiver vazio
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
    window.location.reload()
}

function limparCampo() {
    document.getElementById("nome").value = "";
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
    debugger
    if (jogador.pontuacao === 0) {
        
        seFude();

        jogadores.splice(index, 1);
        localStorage.setItem("jogadores", JSON.stringify(jogadores));
        exibirJogadores();

        // Verifica se há apenas um jogador restante
        if (jogadores.length === 1) {
            ganhou();
        }
    }
}

function seFude() {
    var mensagem = document.createElement("div");
    mensagem.className = "div-msg";
    mensagem.innerText = jogadores[0].nome + " Se fudeu!";
    mensagem.style.fontSize = "20px";
    mensagem.style.position = "fixed";
    mensagem.style.top = "50%";
    mensagem.style.left = "50%";
    mensagem.style.transform = "translate(-50%, -50%)";
    mensagem.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
    mensagem.style.padding = "10px";
    mensagem.style.borderRadius = "10px";
    mensagem.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.3)";
    mensagem.style.animation = "bounce 1s infinite alternate";

    var botaoFechar = document.createElement("button");
    botaoFechar.className = "button-msg";
    botaoFechar.innerText = "X";
    botaoFechar.style.fontSize = '10px';
    botaoFechar.onclick = function () {
        // Remove o último jogador restante
       document.body.removeChild(mensagem);
    };
    botaoFechar.style.marginTop = "10px";

    mensagem.appendChild(botaoFechar);
    document.body.appendChild(mensagem);
}

function ganhou(){
    var mensagem = document.createElement("div");
    mensagem.className = "div-msg";
    mensagem.innerText = jogadores[0].nome + " ganhou!";
    mensagem.style.fontSize = "30px";
    mensagem.style.position = "fixed";
    mensagem.style.top = "50%";
    mensagem.style.left = "50%";
    mensagem.style.transform = "translate(-50%, -50%)";
    mensagem.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
    mensagem.style.padding = "10px";
    mensagem.style.borderRadius = "10px";
    mensagem.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.3)";
    mensagem.style.animation = "bounce 1s infinite alternate";

    var botaoInicio = document.createElement("button");
    botaoInicio.className = "button-msg";
    botaoInicio.innerText = "Voltar ao Início";
    botaoInicio.onclick = function () {
        // Remove o último jogador restante
        jogadores.pop();
        localStorage.setItem("jogadores", JSON.stringify(jogadores));
        // Redireciona para a página inicial após 1 segundo
        setTimeout(function () {
            window.location.href = "index.html";
        }, 1000);
    };
    botaoInicio.style.marginTop = "20px";

    mensagem.appendChild(botaoInicio);
    document.body.appendChild(mensagem);
}

if ('wakeLock' in navigator) {
    // Adiciona um ouvinte de evento para quando o documento estiver visível
    document.addEventListener('visibilitychange', function () {
        // Verifica se o documento está visível
        if (document.visibilityState === 'visible') {
            // Tenta adquirir o bloqueio de tela
            navigator.wakeLock.request('screen')
                .then(function () {
                    console.log('Bloqueio de tela adquirido com sucesso!');
                })
                .catch(function (err) {
                    console.error('Erro ao adquirir o bloqueio de tela:', err);
                });
        } else {
            // Libera o bloqueio de tela quando o documento não está visível
            navigator.wakeLock.release()
                .then(function () {
                    console.log('Bloqueio de tela liberado com sucesso!');
                })
                .catch(function (err) {
                    console.error('Erro ao liberar o bloqueio de tela:', err);
                });
        }
    });
} else {
    console.warn('O navegador não suporta a API Screen Wake Lock.');
}