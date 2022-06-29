interface ICRUD {
    retrieve(id?: number): string
    save(): boolean
    update(id: number): boolean
    delete(id: number): void
}

class Produto {
    descricao: string = ''
    preco: number = 0
}

class ProdutoFinal extends Produto implements ICRUD {
    retrieve(id?: number): string {
        return `Consultando por ${id}`
    }
    save(): boolean {
        throw new Error("Method not implemented.")
    }
    update(id: number): boolean {
        throw new Error("Method not implemented.")
    }
    delete(id: number): void {
        throw new Error("Method not implemented.")
    }
}

let p1 = new ProdutoFinal()
p1.descricao = 'Feijom'
console.log(p1.retrieve())

let p2 = new ProdutoFinal()
console.log(p2.retrieve(10))