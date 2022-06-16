// id venda
// array produtos
// descricao
// preco total

// Carrinho de compras

interface produto {
    idProduto: number
    marca: string
    categoria: string
    descricao: string
    preco: number
}

let p1: produto = {
    idProduto: 0,
    marca: "Asus",
    categoria: "Placa de vídeo",
    descricao: "RTX 3090",
    preco: 12500.00
}

let p2: produto = {
    idProduto: 1,
    marca: "AMD",
    categoria: "Processador",
    descricao: "Ryzen 7 5800x",
    preco: 3890.00
}

let produtos: produto[] = [p1, p2]

function valorTotal(carrinho: produto[]): number {
    let total: number = 0
    total = carrinho.reduce((acumulador, produto) => {
        return acumulador += produto.preco
    }, 0)

    return total
}

console.log(produtos);
console.log(valorTotal(produtos));


