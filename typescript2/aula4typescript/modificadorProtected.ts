class Pessoa {
    nome: string = ''
    protected identificador: number = 0
    private idade: number = 0

    setIdentificador(id: number):void{
        this.identificador = id
    }

    setIdade(idade:number):void{
        this.idade = idade
    }
}

let pessoa = new Pessoa()

pessoa.nome = 'Jose'
pessoa.setIdentificador(12)
console.log(pessoa);

class Aluno extends Pessoa {
    media: number = 0
    
    // setIdade2(idade:number){
    //     this.setIdade(idade)
    // }
}

let aluno = new Aluno()
aluno.media = 10
aluno.nome = "Jubileu"
aluno.setIdade(15)
aluno.setIdentificador(125)

console.log(aluno);
