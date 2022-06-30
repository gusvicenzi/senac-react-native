// Subtitui o T pelo tipo passado ao chamar a função

function getArray<T>(items: T[]): T[] {
    return new Array<T>().concat(items);
}

let myNumArr = getArray<number>([100, 200, 300]);
let myStrArr = getArray<string>(["Hello", "World"]);

myNumArr.push(400); // OK
myStrArr.push("Hello TypeScript"); // OK

console.log(myNumArr);
console.log(myStrArr);


// myNumArr.push("Hi"); // Compiler Error
// myStrArr.push(500); // Compiler Error

// Variáveis de multiplos tipos:
function displayType<T, U>(id: T, name: U): void {
    console.log(typeof (id) + ", " + typeof (name));
}

displayType<number, string>(1, "Steve"); // number, string

// Tipos genércios podem ser usados com tipos não genéricos
function displayType2<T>(id: T, name: string): void {
    console.log(typeof (id) + ", " + typeof (name));
}

displayType2<number>(1, "Steve"); // number, string  

// Quando usamos type vars para criar métodos genéricos, o TS nos obriga a usar apenas métodos gerais
// que estão disponíveis para qualquer tipo de variável

// Os tipos genéricos podem ser restringidos usando constraints, por exemplo:

class Person {
    firstName: string;
    lastName: string;

    constructor(fname: string, lname: string) {
        this.firstName = fname;
        this.lastName = lname;
    }
}

function display<T extends Person>(per: T): void {
    console.log(`${per.firstName} ${per.lastName}`);
}
var per = new Person("Bill", "Gates");
display(per); //Output: Bill Gates

//display("Bill Gates");//Compiler Error
// No exemplo acima a fnc display está especificada para receber apenas a classe Person ou 
// classes que extendam a classe Person.

// Exemplos professor:

function dados<T>(p1:T,p2:T):T[]{
    let vetor: T[] = []
    vetor.push(p1)
    vetor.push(p2)

    return vetor
}

let numeros = dados<number>(10,20)
numeros.push(30)
console.log(numeros)

let frutas = dados<string>('Laranja', 'Banana')
frutas.push('Morango')
console.log(frutas)

function base<T, U>(n1: T, n2: U):void{
    console.log(`${n1}, ${n2}`)
}

base<string, number>("José", 7)
base<string, boolean>("João", true)
base<string, boolean>("Pedro", false)

// Tipos genéricos podem ser usados em Interfaces da mesma maneira
// Lembrando que uma Interface pode ser usada como um tipo, portanto uma
// Interface genérica também pode:
interface KeyPair<T, U> {
    key: T;
    value: U;
}

let kv1: KeyPair<number, string> = { key:1, value:"Steve" }; // OK
let kv2: KeyPair<number, number> = { key:1, value:12345 }; // OK

// Interface pode ser usada também como um tipo de função, portanto uma
// Interface genérica também pode:
interface KeyValueProcessor<T, U>
{
    (key: T, val: U): void;
};

function processNumKeyPairs(key:number, value:number):void { 
    console.log('processNumKeyPairs: key = ' + key + ', value = ' + value)
}

function processStringKeyPairs(key: number, value:string):void { 
    console.log('processStringKeyPairs: key = '+ key + ', value = ' + value)
}
    
let numKVProcessor: KeyValueProcessor<number, number> = processNumKeyPairs;
numKVProcessor(1, 12345); //Output: processNumKeyPairs: key = 1, value = 12345 

let strKVProcessor: KeyValueProcessor<number, string> = processStringKeyPairs;
strKVProcessor(1, "Bill"); //Output: processStringKeyPairs: key = 1, value = Bill 

