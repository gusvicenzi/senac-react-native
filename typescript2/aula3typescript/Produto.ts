class Produto {
    descricao: string
    valorUnitario: number
    qtdEstoque: number

    constructor(descricao: string, valorUnitario: number, qtdEstoque: number){
        this.descricao = descricao
        this.valorUnitario = valorUnitario
        this.qtdEstoque = qtdEstoque
    }

    getEstoque = ():number => {
        return this.qtdEstoque
    }

    precoComDesconto = (taxa: number):number => {
        let precoFinal = parseFloat((this.valorUnitario*(1-taxa/100)).toFixed(2))
        return precoFinal
    }

    precoComAcrescimo = (taxa: number):number => {
        let precoFinal = parseFloat((this.valorUnitario*(1+taxa/100)).toFixed(2))
        return precoFinal
    }
}

export default Produto