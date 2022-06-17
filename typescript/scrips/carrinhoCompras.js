"use strict";
// id venda
// array produtos
// descricao
// preco total
let p1 = {
    idProduto: 0,
    quantidade: 2,
    marca: "Asus",
    categoria: "Placa de vídeo",
    descricao: "RTX 3090",
    preco: 12500.00,
    obsevacoes: "Embalar muito bem"
};
let p2 = {
    idProduto: 1,
    quantidade: 1,
    marca: "AMD",
    categoria: "Processador",
    descricao: "Ryzen 7 5800x",
    preco: 3890.00
};
let shop = { produtos: [p1, p2] };
let p3 = {
    idProduto: 2,
    quantidade: 1,
    marca: "ASUS",
    categoria: "Placa mãe",
    descricao: "X570 M",
    preco: 2990.90
};
shop.produtos.push(p3);
function valorTotal(carrinho) {
    let produtos = carrinho.produtos;
    let total = 0;
    total = produtos.reduce((acumulador, produto) => {
        return acumulador += produto.quantidade * produto.preco;
    }, 0);
    // console.log(this);
    return total;
}
console.log(shop);
console.log(`O valor todal da compra é: R$${valorTotal(shop).toFixed(2)}`);
