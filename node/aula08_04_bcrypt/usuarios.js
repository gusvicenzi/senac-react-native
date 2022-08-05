const express = require('express')
const pg = require('pg')
const bcrypt = require('bcrypt')
const app = express()

// Conexão DB postgresql
const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL })

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.route('/usuarios')
    .get((req, res) => {
        pool.connect((err, client, release) => {
            if (err) {
                return res.status(401).send({
                    message: 'Conexão não autorizada'
                })
            }
            const sql = `select * from usuarios`
            client.query(sql, (erro, result) => {
                if (erro) {
                    return res.send({
                        message: 'Não foi possível obter os usuários',
                        erro: erro.message
                    })
                }
                return res.status(200).send(result.rows)
            })
            release()
        })
    })
    .post((req, res) => {
        pool.connect((err, client, release) => {
            if (err) {
                return res.status(401).send({
                    message: 'Conexão não autorizada'
                })
            }
            bcrypt.hash(req.body.senha, 10, (error, hash) => {
                const sql = `insert into usuarios(nome, email, senha, perfil)
                values ($1, $2 ,$3 ,$4)`
                const dados = [req.body.nome, req.body.email.toLowerCase(), hash, req.body.perfil.toUpperCase()]

                client.query(sql, dados, (erro, result) => {
                    if (erro) {
                        return res.send({
                            message: 'Não foi possível cadastrar o usuário',
                            erro: erro.message
                        })
                    }
                    if (result) {
                        res.status(201).send({
                            message: 'Usuário cadastrado com sucesso!'
                        })
                    }
                })
                release()
            })
        })
    })

app.route('/usuarios/login')
    .post((req, res) => {
        pool.connect((err, client, release) => {
            const sql = `select * from usuarios where email = $1`
            const dados = [req.body.email.toLowerCase()]
            client.query(sql, dados, (erro, result) => {
                if (result.rowCount > 0) {
                    bcrypt.compare(req.body.senha, result.rows[0].senha, (error, resultado) => {
                        if (resultado) {
                            return res.send({ token: 'Usuário conectado'})
                        } else {
                            return res.status(403).send({
                                message: "Senha incorreta"
                            })
                        }
                    })
                } else {
                    res.send({
                        message: 'Usuário não encontrado'
                    })
                }
            })
        })
    })

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Servidor executando em http://localhost:${PORT}`)
})