"use strict";
// instalar typescript
// npm install typescript
// "compilar" código de ts para js
// npx tsc .\index.ts
//
// npx tsc --init
// editar tsconfig "outDir": "./scripts" (js's "compilados" vão para a pasta scripts)
// agora pode usar apena <npx tsc> para "compilar/transpilar"
// Tipos primitivos
let nome;
nome = "Gustavo";
let idade;
idade = 24;
let hasGun;
hasGun = false;
console.log(nome);
// Array
let numArray;
let strArray;
// pode usar a sintaxe Array<number>
// Any
let obj = { x: 0 };
// Funções:
// Anotação do tipo do parâmetro da funcção
function greet(name) {
    console.log(`Hello ${name}!!`);
}
greet(nome);
// Anotação do tipo do return da funcção
function getFavoriteNumber() {
    return 12;
}
function ola(nome) {
    console.log(`Boa noite ${nome}`);
}
// Funções anônimas
// No type annotations here, but TypeScript can spot the bug
const names = ["Alice", "Bob", "Eve"];
// tipo contextual para função
// names.forEach(function (s) {
//     console.log(s.toUppercase());
//     Property 'toUppercase' does not exist on type 'string'.Did you mean 'toUpperCase' ?
// });
// Contextual typing also applies to arrow functions
// names.forEach((s) => {
//     console.log(s.toUppercase());
//     Property 'toUppercase' does not exist on type 'string'.Did you mean 'toUpperCase' ?
// });
// Tipagem de Objetos
// The parameter's type annotation is an object type
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });
// Propriedades opcionais
function printName(obj) {
    // Error - might crash if 'obj.last' wasn't provided!
    // console.log(obj.last.toUpperCase());
    var _a;
    if (obj.last !== undefined) {
        // OK
        console.log(obj.last.toUpperCase());
    }
    // A safe alternative using modern JavaScript syntax, but prints "undefined":
    console.log((_a = obj.last) === null || _a === void 0 ? void 0 : _a.toUpperCase());
}
// Both OK
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });
// União de tipos
function printId1(id) {
    console.log("Your ID is: " + id);
}
printId1(101); //ok
printId1("202"); // ok
let fruitsAndNumbers = ["banana", 1];
// Error:
// printId({ myID: 22342 });
// Trabalhando com união de tipos
// function printId(id: number | string) {
//     console.log(id.toUpperCase());
//     Property 'toUpperCase' does not exist on type 'string | number'.
//     Property 'toUpperCase' does not exist on type 'number'.
// }
function printId(id) {
    if (typeof id === "string") {
        // In this branch, id is of type 'string'
        console.log(id.toUpperCase());
    }
    else {
        // Here, id is of type 'number'
        console.log(id);
    }
}
// Array.isArray()
function welcomePeople(x) {
    if (Array.isArray(x)) {
        // Here: 'x' is 'string[]'
        console.log("Hello, " + x.join(" and "));
    }
    else {
        // Here: 'x' is 'string'
        console.log("Welcome lone traveler " + x);
    }
}
// Exactly the same as the earlier example
function printCoord2(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord2({ x: 100, y: 100 });
// Tipo Tuple
let boletim = ["Gustavo", 10];
let varios = ["Gustavo", 12, "aprovado", true];
let notas = [];
notas.push(boletim);
notas.push(["Ana", 10]);
console.log(`${notas[0][0]}, sua nota é ${notas[0][1]}`);
// Tipo enum
var Epessoa;
(function (Epessoa) {
    Epessoa[Epessoa["Fisica"] = 1] = "Fisica";
    Epessoa[Epessoa["juridica"] = 2] = "juridica";
})(Epessoa || (Epessoa = {}));
let cliente;
cliente = Epessoa.Fisica;
console.log(cliente);
let senac;
senac = Epessoa.juridica;
console.log(senac);
function somar(n1, n2) {
    return n1 + n2;
}
var x = somar(10, 20);
console.log(x);
