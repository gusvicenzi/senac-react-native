class Animal {
    raca: string = ''
    especie: string = ''
}

let animal: Animal = new Animal()
animal.raca = "Corgi"
animal.especie = "Cão"

class Mamifero extends Animal {
    numMamas: number = 0
}

let mamifero: Mamifero = new Mamifero()
mamifero.numMamas = 8
mamifero.raca = "Pitbull"
mamifero.especie = "Cão"

class Cachorro extends Mamifero {
    cor: string = ""
}

let cachorro = new Cachorro()
cachorro.cor = "Malhado"
cachorro.raca = "Dalmata"
cachorro.especie = "Cão"
cachorro.numMamas = 8