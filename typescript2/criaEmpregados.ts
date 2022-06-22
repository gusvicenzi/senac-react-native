import Empregado from "./classeEmpregado";

const emp1 = new Empregado("José", 7.89, 40)
const emp2 = new Empregado("Gustavo", 55, 40)

console.log(emp1)
console.log(emp1.calculaSalario())
emp1.imprimeDados()

console.log(emp2)
console.log(emp2.calculaSalario())
emp2.imprimeDados()