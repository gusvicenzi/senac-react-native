
abstract class Computador {
    memoria: number = 4
    abstract getCapacidadeProcessamento(): number

    display():void{
        console.log(this.memoria)        
    }
}

class Notebook extends Computador {
    getCapacidadeProcessamento(): number {
        return 500
    }

}

class Tablet extends Computador {
    getCapacidadeProcessamento(): number {
        return 200
    }

}

// cp1 do tipo Computador usa o contrutor de Notebook pois Computador é abstract
let cp1: Computador = new Notebook()
console.log(cp1.getCapacidadeProcessamento())

let cp2: Computador = new Tablet()
console.log(cp2.getCapacidadeProcessamento())
