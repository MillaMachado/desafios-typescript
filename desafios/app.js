"use strict";
// Desafio 1
// Como podemos rodar isso em um arquivo .ts sem causar erros? 
// infere os tipos
let employee = {
    code: 10,
    name: "John"
};
// definindo os tipos
let employee2 = {
    code: 10,
    name: "John"
};
// utilizando a interface
let employee3 = {
    code: 10,
    name: "John"
};
// Desafio 2
// Como podemos melhorar o esse código usando TS? 
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Padeiro"] = 0] = "Padeiro";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
})(Profissao || (Profissao = {}));
// utilizando a interface
let pessoa1 = {
    nome: 'Maria',
    idade: 29,
    profissao: Profissao.Atriz
};
let pessoa2 = {
    nome: "roberto",
    idade: 19,
    profissao: Profissao.Padeiro
};
let pessoa3 = {
    nome: "laura",
    idade: 32,
    profissao: Profissao.Atriz
};
let pessoa4 = {
    nome: "carlos",
    idade: 19,
    profissao: Profissao.Padeiro
};
// Desafio 3
// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?
let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');
if (campoSaldo != null) {
    campoSaldo.innerHTML = String(0);
}
function somarAoSaldo(soma) {
    if (campoSaldo != null) {
        campoSaldo.innerHTML = String(Number(campoSaldo.innerHTML) + soma);
    }
}
function limparSaldo() {
    if (campoSaldo != null) {
        campoSaldo.innerHTML = '';
    }
}
if (botaoAtualizar)
    botaoAtualizar.addEventListener('click', function () {
        if (soma)
            somarAoSaldo(Number(soma.value));
    });
if (botaoLimpar)
    botaoLimpar.addEventListener('click', function () {
        limparSaldo();
    });
