import Pessoa from "../aula3typescript/Pessoa"

class Person {
    name: string = ""

    constructor(name: string){
        this.name = name
    }
}

class Employee2 extends Person {
    matricula: string = ""

    constructor(name: string, matricula:string){
        super(name)
        this.matricula = matricula
    }
}

let emp2: Employee2 = new Employee2('Jose', '123')

// emp2.matricula = '123'
// emp2.name = "Jose"

console.log(emp2);
