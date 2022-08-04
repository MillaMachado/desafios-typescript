// Desafio 1
// Como podemos rodar isso em um arquivo .ts sem causar erros? 

// infere os tipos
let employee = {
    code: 10,
    name: "John"
}

// definindo os tipos
let employee2: {code: number, name: string} = {
    code: 10,
    name: "John"
}

// criando uma interface
interface Employee {
    code: number,
    name: string
}

// utilizando a interface
let employee3: Employee = {
    code: 10,
    name: "John"
}

// Desafio 2
// Como podemos melhorar o esse código usando TS? 

enum Profissao {
    Padeiro,
    Atriz
}

// criando uma interface
interface Pessoa {
    nome: string,
    idade: number,
    profissao: Profissao
}

// utilizando a interface
let pessoa1: Pessoa = {
    nome: 'Maria',
    idade: 29,
    profissao: Profissao.Atriz
}

let pessoa2: Pessoa = {
    nome: "roberto",
    idade: 19,
    profissao: Profissao.Padeiro
}

let pessoa3: Pessoa = {
    nome: "laura",
    idade: 32,
    profissao: Profissao.Atriz
};

let pessoa4: Pessoa = {
    nome: "carlos",
    idade: 19,
    profissao: Profissao.Padeiro
}

// Desafio 3
// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');

if(campoSaldo != null){
    campoSaldo.innerHTML = String(0);
}

function somarAoSaldo(soma: number) {
    if(campoSaldo != null){
        campoSaldo.innerHTML = String(Number(campoSaldo.innerHTML) + soma);
    }
}

function limparSaldo() {
    if(campoSaldo != null){
        campoSaldo.innerHTML = '';
    }
}

if(botaoAtualizar)
botaoAtualizar.addEventListener('click', function () {
    if(soma)
    somarAoSaldo(Number(soma.value));
});

if(botaoLimpar)
botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});

