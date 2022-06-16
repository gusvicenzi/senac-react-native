// id venda
// array produtos
// descricao
// preco total

// Carrinho de compras

interface produto {
    idProduto: number
    marca: string
    quantidade: number
    categoria: string
    descricao: string
    preco: number
    obsevacoes?: string
}

let p1: produto = {
    idProduto: 0,
    quantidade: 2,
    marca: "Asus",
    categoria: "Placa de vídeo",
    descricao: "RTX 3090",
    preco: 12500.00,
    obsevacoes: "Embalar muito bem"
}

let p2: produto = {
    idProduto: 1,
    quantidade: 1,
    marca: "AMD",
    categoria: "Processador",
    descricao: "Ryzen 7 5800x",
    preco: 3890.00
}

let carrinho: produto[] = [p1, p2]

let p3: produto = {
    idProduto: 2,
    quantidade: 1,
    marca: "ASUS",
    categoria: "Placa mãe",
    descricao: "X570 M",
    preco: 2990.90
}

carrinho.push(p3)

function valorTotal(carrinho: produto[]): number {
    let total: number = 0
    total = carrinho.reduce((acumulador, produto) => {
        return acumulador += produto.quantidade * produto.preco
    }, 0)

    return total
}

console.log(carrinho);
console.log(`O valor todal da compra é: R$${valorTotal(carrinho).toFixed(2)}`);


