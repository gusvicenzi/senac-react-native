class Reino{
    reino: string = ''
    constructor(reino:string){
        this.reino = reino
    }
}

class Classe extends Reino{
    classe: string = ''
    constructor(reino:string, classe: string){
        super(reino)
        this.classe = classe
    }
}

class Ordem extends Classe{
    ordem: string = ''
    constructor(reino:string, classe: string, ordem: string){
        super(reino, classe)
        this.ordem = ordem
    }
}

class Especie extends Ordem{
    especie: string = ''
    constructor(reino:string, classe: string, ordem: string, especie: string){
        super(reino, classe, ordem)
        this.especie = especie
    }
}

let cachoro: Especie
cachoro = new Especie('Animalia', 'Mammalia (Mamífero)', 'Carnívoro', 'C. Lupos (Cachorro)')
console.log(cachoro);