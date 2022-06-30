class Conexao {
    static path: string = ''    // Static só se consegue acessar através da classe Conexao
    db: string = ''

    static getConexao(): string {
        return this.path
    }

    getConexao(): string {
        return Conexao.path
    }
}

let conexao: Conexao = new Conexao()
conexao.db = 'loja'
Conexao.path = 'C:/users/db.json'
console.log(Conexao.getConexao())
console.log(conexao.getConexao())