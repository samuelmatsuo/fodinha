import Close from "../buttons/close.js";

export default function AlertMsgClose(msg){
    var mensagem = document.createElement("div");
    mensagem.className = "div-msg";
    mensagem.innerText = msg;
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

    // Adicionando o botão de fechar utilizando a função Close do arquivo buttons/close.js
    Close(mensagem);

    document.body.appendChild(mensagem);
}
