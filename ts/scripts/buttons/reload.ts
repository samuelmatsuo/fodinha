import onClickBack from "../onClick/onClickBack";

export default function reload(mensagem: HTMLElement, jogadores: any[]): void {
    const botaoInicio = document.createElement("button");
    botaoInicio.className = "button-msg";
    botaoInicio.innerText = "Voltar ao Início";
    botaoInicio.onclick = function () {
        onClickBack(jogadores);
    };
    botaoInicio.style.marginTop = "20px";

    mensagem.appendChild(botaoInicio);
    document.body.appendChild(mensagem);
}
