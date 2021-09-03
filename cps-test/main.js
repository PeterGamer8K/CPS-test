"use strict"

const starterButton = document.querySelector(".starter-button");
const canvasContainer = document.querySelector("#canvas-container");
const clock = document.querySelector(".clock");
const cpsDiv = document.querySelector("#cpsDiv");
let cpsResult  = document.querySelector("#cps-result");
let canCalculateCPS = false;
const timeToCalculateCPSInput = document.querySelector(".timeToCalculateCPS");
let timeToCalculateCPS;
let cps = 0;

var ss = 0;

var tempo = 999;//Quantos milésimos valem 1 segundo?

var cron;

//Inicia o temporizador
function start() {
    cpsDiv.textContent = "Clicks: 0"
    timeToCalculateCPS = parseInt(timeToCalculateCPSInput.value);
    var tempoParaCalcularCPS = tempo * timeToCalculateCPS + 300;
    cpsResult.textContent = 0;
    cps = 0;
    canCalculateCPS = true;
    cron = setInterval(() => { timer(); }, tempo);

    setTimeout (function() {
        clearInterval(cron);
        ss = 0;
        clock.textContent = '00';
        canCalculateCPS = false;
        cpsResult.textContent = "O seu CPS foi de: " + (cps / timeToCalculateCPS).toFixed(1);
    
    }, tempoParaCalcularCPS);
}

//Para o temporizador mas não limpa as variáveis

    

//Faz a contagem do tempo e exibição
function timer() {
    ss++; //Incrementa +1 na variável ss

    if (ss == 59) { //Verifica se deu 59 segundos
        ss = 0; //Volta os segundos para 0
    }

    //Cria uma variável com o valor tratado HH:MM:SS
    var format = (ss < 10 ? '0' + ss : ss);
    
    //Insere o valor tratado no elemento counter
    clock.textContent = format;

    //Retorna o valor tratado
    return format;
}

function startCalculationCPS(){

    if (canCalculateCPS) {
        cps++;
        cpsDiv.textContent = "Clicks: " + cps;
    } 
}