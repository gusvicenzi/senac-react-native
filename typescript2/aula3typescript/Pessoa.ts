class Pessoa {
    id: number
    nome: string
    fone: string
    email: string
    peso?: number
    altura?: number

    constructor(nome: string, fone: string, email: string, peso?:number, altura?:number) {
        this.nome = nome
        this.fone = fone
        this.email = email
        this.peso = peso
        this.altura = altura

        this.id = Math.random()
    }

    salvar = ():void => {
        console.log("salvou");
    }

    validaDados = ():boolean => {
        if (this.nome.trim() && this.fone.trim() && this.email.trim()){
            return true
        } else {
            return false
        }
    }

    imprimir = ():void => {
        console.log(`id: ${this.id} \n nome: ${this.nome} \n fone: ${this.fone} \n email: ${this.email}`);        
    }

    imc = ():number|boolean => {
        return this.peso && this.altura ? parseFloat((this.peso/(this.altura**2)).toFixed(2)) : false
    }
}

export default Pessoa