// Interfaces
interface IAnimal {
    raca: string
    especie: string
    barulho(x: string): void
}

interface IMamifero {
    qtdMamas: number
    getQtdLeite(): number
}

// Implementação das interfaces
class Bicho implements IAnimal, IMamifero {
    raca: string = 'Piatã'
    especie: string = 'Suína'
    qtdMamas: number = 10
    barulho(x: string): void {
        console.log(`Barulho de ${x}`)
    }
    getQtdLeite(): number {
        return 10
    }
    display(){
        console.log(`Raça: ${this.raca}`)
        console.log(`Espécie: ${this.especie}`)
        console.log(`Nº de mamas: ${this.qtdMamas}`)
    }
}

let bicho = new Bicho()
bicho.barulho('Pocotó pocotó')
console.log(`${bicho.getQtdLeite()}L de leite`)
bicho.display()