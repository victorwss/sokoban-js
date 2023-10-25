"use strict";

const tamanhoCelula = 30;

function acharCanvas() {
    return document.querySelector("canvas");
}

function acharContexto() {
    return acharCanvas().getContext("2d");
}

function desenharParede(linha, coluna) {
    const [py, px] = [linha * tamanhoCelula, coluna * tamanhoCelula];
    const ctx = acharContexto();
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.fillRect(px, py, px + tamanhoCelula, py + tamanhoCelula);
}

function desenharFundo(linha, coluna) {
    const [py, px] = [linha * tamanhoCelula, coluna * tamanhoCelula];
    const ctx = acharContexto();
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.fillRect(px, py, px + tamanhoCelula, py + tamanhoCelula);
}

function desenharChao(linha, coluna) {
    const [py, px] = [linha * tamanhoCelula, coluna * tamanhoCelula];
    const ctx = acharContexto();
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.fillRect(px, py, px + tamanhoCelula, py + tamanhoCelula);
}

function desenharCaixa(linha, coluna) {
    const [py, px] = [linha * tamanhoCelula, coluna * tamanhoCelula];
    const ctx = acharContexto();
    ctx.fillStyle = "green";
    ctx.beginPath();
    ctx.fillRect(px, py, px + tamanhoCelula, py + tamanhoCelula);
}

function desenharDeposito(linha, coluna) {
    const [py, px] = [linha * tamanhoCelula, coluna * tamanhoCelula];
    const ctx = acharContexto();
    ctx.fillStyle = "cyan";
    ctx.beginPath();
    ctx.fillRect(px, py, px + tamanhoCelula, py + tamanhoCelula);
}

function desenharCaixaNoDeposito(linha, coluna) {
    const [py, px] = [linha * tamanhoCelula, coluna * tamanhoCelula];
    const ctx = acharContexto();
    ctx.fillStyle = "yellow";
    ctx.beginPath();
    ctx.fillRect(px, py, px + tamanhoCelula, py + tamanhoCelula);
}

function desenharJogador(linha, coluna) {
    const [py, px] = [linha * tamanhoCelula, coluna * tamanhoCelula];
    const ctx = acharContexto();
    ctx.fillStyle = "blue";
    ctx.beginPath();
    ctx.fillRect(px, py, px + tamanhoCelula, py + tamanhoCelula);
}

function desenharJogadorNoDeposito(linha, coluna) {
    const [py, px] = [linha * tamanhoCelula, coluna * tamanhoCelula];
    const ctx = acharContexto();
    ctx.fillStyle = "rgb(0,128,255)";
    ctx.beginPath();
    ctx.fillRect(px, py, px + tamanhoCelula, py + tamanhoCelula);
}