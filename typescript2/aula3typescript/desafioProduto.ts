import Produto from "./Produto";

const p1 = new Produto("Arroz", 2.99, 50)
const p2 = new Produto("Feijão", 4.99, 88)

let produtos: Produto[] = [p1, p2]

produtos.forEach(p => {
    console.log(`Produto: ${p.descricao}`)
    console.log(`Quantidade no estoque: ${p.getEstoque()}`)
    console.log(`Preço com desconto é: R$${p.precoComDesconto(10)}`)
    console.log(`Preço com acrescimo é: R$${p.precoComAcrescimo(10)}`)
})