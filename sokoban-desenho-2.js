"use strict";

const imagem = new Image();
let ok = false;
imagem.onload = () => ok = true;
imagem.src = "sokoban.png";

const tamanhoCelula = 30;

function acharCanvas() {
    return document.querySelector("canvas");
}

function acharContexto() {
    return acharCanvas().getContext("2d");
}

function desenharParte(linhaDestino, colunaDestino, linhaSprite, colunaSprite) {
    const [py, px] = [linhaDestino * tamanhoCelula, colunaDestino * tamanhoCelula];
    const [oy, ox] = [linhaSprite  * tamanhoCelula, colunaSprite  * tamanhoCelula];
    const ctx = acharContexto();
    ctx.drawImage(
        imagem,
        ox, oy,
        tamanhoCelula, tamanhoCelula,
        px, py,
        tamanhoCelula, tamanhoCelula
    );
}

function desenharParede(linha, coluna) {
    if (!ok) return;
    desenharParte(linha, coluna, 0, 0);
}

function desenharFundo(linha, coluna) {
    if (!ok) return;
    desenharParte(linha, coluna, 0, 2);
}

function desenharChao(linha, coluna) {
    if (!ok) return;
    desenharParte(linha, coluna, 0, 1);
}

function desenharCaixa(linha, coluna) {
    if (!ok) return;
    desenharParte(linha, coluna, 1, 3);
}

function desenharDeposito(linha, coluna) {
    if (!ok) return;
    desenharParte(linha, coluna, 1, 1);
}

function desenharCaixaNoDeposito(linha, coluna) {
    if (!ok) return;
    desenharParte(linha, coluna, 0, 3);
}

function desenharJogador(linha, coluna) {
    if (!ok) return;
    desenharParte(linha, coluna, 1, 2);
}

function desenharJogadorNoDeposito(linha, coluna) {
    if (!ok) return;
    desenharParte(linha, coluna, 1, 0);
}