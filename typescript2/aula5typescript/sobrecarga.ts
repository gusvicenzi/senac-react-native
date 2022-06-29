function add(a:string, b:string): string

function add(a:number, b:number): number

function add(a:boolean, b:boolean): boolean

function add(a: any, b: any): any{
    return a + b;
}

console.log(add('Maria', ' da Silva'));
console.log(add(10, 20));
console.log(add(false, true));
console.log(add(false, false));
