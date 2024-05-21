export default function onClickBack(jogadores: any[]): void {
    jogadores.pop();
    localStorage.setItem("jogadores", JSON.stringify(jogadores));
    setTimeout(() => {
        window.location.href = "index.html";
    }, 1000);
}
