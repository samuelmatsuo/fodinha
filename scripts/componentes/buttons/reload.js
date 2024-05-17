import onClickBack from "../onClick/onClickBack.js";

export default function reload(mensagem, jogadores){
    
    var botaoInicio = document.createElement("button");
    botaoInicio.className = "button-msg";
    botaoInicio.innerText = "Voltar ao Início";
    botaoInicio.onclick = function () {
       onClickBack(jogadores);
    };
    botaoInicio.style.marginTop = "20px";

    mensagem.appendChild(botaoInicio);
    document.body.appendChild(mensagem);
}