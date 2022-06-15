// instalar typescript
// npm install typescript
// "compilar" código de ts para js
// npx tsc .\index.ts
//
// npx tsc --init
// editar tsconfig "outDir": "./scripts" (js's "compilados" vão para a pasta scripts)
// agora pode usar apena <npx tsc> para "compilar/transpilar"

// Tipos primitivos
let nome: string
nome = "Gustavo"
let idade: number
idade = 24
let hasGun: boolean
hasGun = false
console.log(nome);
// Array
let numArray: number[]
let strArray: string[]
// pode usar a sintaxe Array<number>

// Any
let obj: any = { x: 0 }

// Funções:
// Anotação do tipo do parâmetro da funcção


function greet(name: string) {
    console.log(`Hello ${name}!!`);
}
greet(nome);

// Anotação do tipo do return da funcção
function getFavoriteNumber(): number {
    return 12
}

function ola(nome: string): void {
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
function printCoord(pt: { x: number; y: number }) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });

// Propriedades opcionais
function printName(obj: { first: string; last?: string }) {
    // Error - might crash if 'obj.last' wasn't provided!
    // console.log(obj.last.toUpperCase());

    if (obj.last !== undefined) {
        // OK
        console.log(obj.last.toUpperCase());
    }

    // A safe alternative using modern JavaScript syntax, but prints "undefined":
    console.log(obj.last?.toUpperCase());
}

// Both OK
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });

// União de tipos

function printId1(id: number | string) {
    console.log("Your ID is: " + id);
}

printId1(101);       //ok
printId1("202");     // ok

let fruitsAndNumbers: (number | string)[] = ["banana", 1]
// Error:
// printId({ myID: 22342 });


// Trabalhando com união de tipos

// function printId(id: number | string) {
//     console.log(id.toUpperCase());
//     Property 'toUpperCase' does not exist on type 'string | number'.
//     Property 'toUpperCase' does not exist on type 'number'.
// }

function printId(id: number | string) {
    if (typeof id === "string") {
        // In this branch, id is of type 'string'
        console.log(id.toUpperCase());
    } else {
        // Here, id is of type 'number'
        console.log(id);
    }
}

// Array.isArray()
function welcomePeople(x: string[] | string) {
    if (Array.isArray(x)) {
        // Here: 'x' is 'string[]'
        console.log("Hello, " + x.join(" and "));
    } else {
        // Here: 'x' is 'string'
        console.log("Welcome lone traveler " + x);
    }
}

// Type aliases / Tipos personalizados
type Point = {
    x: number;
    y: number;
};

// Exactly the same as the earlier example
function printCoord2(pt: Point) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}

printCoord2({ x: 100, y: 100 });

// You can actually use a type alias to give a name to any type at all, not just an object type.
// For example, a type alias can name a union type:
type ID = number | string;

// Tipo Tuple

let boletim: [string, number] = ["Gustavo", 10]

let varios: [string, number, string, boolean] = ["Gustavo", 12, "aprovado", true]

let notas: ([string, number])[] = []
notas.push(boletim)
notas.push(["Ana", 10])
console.log(`${notas[0][0]}, sua nota é ${notas[0][1]}`);

// Tipo enum

enum Epessoa {
    Fisica = 1,
    juridica
}

let cliente: Epessoa
cliente = Epessoa.Fisica

console.log(cliente);

let senac: Epessoa
senac = Epessoa.juridica
console.log(senac);

function somar(n1: number, n2: number): number {
    return n1+n2
}

var x: number = somar(10, 20)
console.log(x);
