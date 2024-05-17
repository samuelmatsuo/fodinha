export default function onClickBack(jogadores){
    jogadores.pop();
    localStorage.setItem("jogadores", JSON.stringify(jogadores));
    setTimeout(function () {
        window.location.href = "index.html";
    }, 1000);
}