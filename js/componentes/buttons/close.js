import onClickClose from "../onClick/onClickClose.js";

export default function Close(mensagem){
    var botaoFechar = document.createElement("button");
    botaoFechar.className = "button-msg";
    botaoFechar.innerText = "X";
    botaoFechar.style.fontSize = '10px';
    botaoFechar.onclick = function () {
        onClickClose(mensagem);
    };
    botaoFechar.style.marginTop = "10px";

    mensagem.appendChild(botaoFechar);
    document.body.appendChild(mensagem);
}