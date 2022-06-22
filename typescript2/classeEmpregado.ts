export default class Empregado {
    nome: string
    valorHora: number
    totalHorasSemanal: number

    constructor(nome: string, valorHora: number, totalHorasSemanal: number) {
        this.nome = nome
        this.valorHora = valorHora
        this.totalHorasSemanal = totalHorasSemanal
    }

    calculaSalario(): number {
        return parseFloat((this.valorHora * this.totalHorasSemanal).toFixed(2))
    }

    imprimeDados(): void {
        console.log(`Nome: ${this.nome}`)
        console.log(`Valor/hora: R$${this.valorHora}`)
        console.log(`Horas semanais: ${this.totalHorasSemanal}`)   
        console.log(`Salário: R$${this.calculaSalario()}`)
    }
}