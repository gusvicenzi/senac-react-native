import Pessoa from "./Pessoa";

const gus = new Pessoa("Gustavo", "(00)99999-9999", "gustavo@gmail.com", 65, 1.7)
const mar = new Pessoa("Maria", "(00)88888-8888", "maria@gmail.com", 55, 1.62)

gus.salvar()
console.log(gus.validaDados());
gus.imprimir()
console.log(gus.imc());

let pessoas: Pessoa[] = []

pessoas.push(gus)
pessoas.push(mar)

const jos = new Pessoa("Jose", "(00)77777-7777", "jose@gmail.com")
pessoas.push(jos)


// pessoas.forEach(pessoa => pessoa.imprimir())
pessoas.forEach(pessoa => {pessoa.imc() ? console.log(`O imc de ${pessoa.nome} é ${pessoa.imc()}`) : false})

