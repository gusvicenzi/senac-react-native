class Product {
    id: number
    descricao: string
    preco: number

    constructor(id: number, descricao: string, preco: number){
        this.id = id
        this.descricao = descricao
        this.preco = preco
    }
}

let prod1 = new Product(1, 'Feijão', 7.89)
let prod2 = new Product(2, 'Bacon', 2.65)

class ItemVenda {
    id: number
    produto: Product
    qtd: number

    constructor(id: number, produto: Product, qtd: number){
        this.id = id
        this.produto = produto
        this.qtd = qtd
    }
}

let it1 = new ItemVenda(1, prod1, 10)
let it2 = new ItemVenda(2, prod2, 4)

console.log(it1)
console.log(it2)

// Desafio:

class Venda {
    id: number
    itens: ItemVenda[]

    constructor(id: number, itens: ItemVenda[]){
        this.id = id
        this.itens = itens
    }
}

let venda = new Venda(1, [it1, it2])
console.log(venda)
console.log(JSON.stringify(venda))
console.log(venda.itens[0].produto)
