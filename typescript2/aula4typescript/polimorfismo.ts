class Veiculo {
    placa: string
    marca: string
    modelo: string

    constructor(placa: string, marca: string, modelo: string){
        this.placa = placa
        this.marca = marca
        this.modelo = modelo
    }

    display():void {
        console.log(`Placa: ${this.placa}`)
        console.log(`Marca: ${this.marca}`)
        console.log(`Modelo: ${this.modelo}`)
    }
}

let carro = new Veiculo("ABC-1234", "Honda", "Civic")
carro.display()

class Moto extends Veiculo {
    cilindradas: number = 0

    display():void {
        super.display()
        console.log(`Cilindradas: ${this.cilindradas}`)
    }
}

let moto = new Moto("CBA-4321", "Honda", "CG")
moto.cilindradas = 125
moto.display()