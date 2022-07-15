require('dotenv')
const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())
const port = 8080

const pg = require('pg')
// const conString = "postgres://user:password@host/database"
// const conString = "postgres://postgres:senhafacilnum@localhost/estacionamento"
const conString = process.env.DB_CONECTION_KEY
const pool = new pg.Pool({ connectionString: conString })

app.route('/conectar').get(
    (req, res) => {
        pool.connect((err, client, release) => {
            if (err) {
                return res.status(401).send({ message: 'erro de conexão', error: err.message })
            }
            release()
            return res.status(200).send(
                {
                    message: 'conectado com sucesso'
                }
            )
        })
    }
)

app.route('/clientes').get(
    (req, res) => {
        pool.connect((err, client, release) => {
            if (err) {
                return res.status(401).send({ message: 'erro de conexão', error: err.message })
            }
            client.query('SELECT * FROM cliente', (error, result) => {
                release()
                if (error) {
                    return res.status(500).send({
                        message: 'ocorreu erro na consulta ao banco de dados',
                        error: error.message
                    })
                }
                return res.status(200).send(result.rows)
            })
        })
    }
).post((req, res) => {
    pool.connect((err, client, release) => {
        if (err) {
            return res.status(401).send({ message: 'erro de conexão', error: err.message })
        }
        client.query('INSERT INTO cliente(nome) VALUES($1::text) ', [req.body.nome], (error, result) => {
            release()
            if (error) {
                return res.status(500).send({
                    message: 'ocorreu erro ao gravar no banco de dados',
                    error: error.message
                })
            }
            return res.status(200).send(`Cliente ${req.body.nome} adicionado com sucesso`)
        })
    })
})

app.route('/clientes/:id').get((req, res) => {
    pool.connect((err, client, release) => {
        if (err) {
            return res.status(401).send({ message: 'erro de conexão', error: err.message })
        }
        client.query('SELECT * FROM cliente WHERE id = $1::integer', [req.params.id], (error, result) => {
            release()
            if (error) {
                return res.status(500).send({
                    message: 'ocorreu erro na consulta ao banco de dados',
                    error: error.message
                })
            }
            if (result.rows[0]) return res.status(200).send(result.rows[0])
            else return res.status(404).send(
                {
                    status: 404,
                    message: 'Cliente não encontrado'
                }
            )
        })
    })
})

app.route('/carros').get((req, res) => {
    pool.connect((err, client, release) => {
        if (err) {
            return res.status(401).send({ message: 'erro de conexão', error: err.message })
        }
        client.query(`select * from carro`, (error, result) => {
            release()
            if (error) {
                return res.status(500).send({
                    message: 'ocorreu erro na consulta ao banco de dados',
                    error: error.message
                })
            }
            return res.status(200).send(result.rows)
        })
    })
})

app.route('/carros/:idCarro').get((req, res) => {
    pool.connect((err, client, release) => {
        if (err) {
            return res.status(401).send({ message: 'erro de conexão', error: err.message })
        }
        client.query(`select * from carro where id = ${req.params.idCarro}`, (error, result) => {
            release()
            if (error) {
                return res.status(500).send({
                    message: 'ocorreu erro na consulta ao banco de dados',
                    error: error.message
                })
            }
            if (result.rows[0]) return res.status(200).send(result.rows[0])
            else return res.status(404).send(
                {
                    status: 404,
                    message: 'Carro não encontrado'
                }
            )
        })
    })
})

app.route('/clientes/carros/:idCliente').get((req, res) => {
    pool.connect((err, client, release) => {
        if (err) {
            return res.status(401).send({ message: 'erro de conexão', error: err.message })
        }
        client.query(`select cl.nome as cliente, ca.placa, ca.marca
        from carro_cliente cc, carro ca, cliente cl
        where cc.carro_id = ca.id
        and cc.cliente_id = cl.id
        and cl.id = ${req.params.idCliente}`, (error, result) => {
            release()
            if (error) {
                return res.status(500).send({
                    message: 'ocorreu erro na consulta ao banco de dados',
                    error: error.message
                })
            }
            if (result.rows[0]) return res.status(200).send(result.rows)
            else return res.status(404).send(
                {
                    status: 404,
                    message: 'Cliente não encontrado'
                }
            )
        })
    })
})

app.listen(port, () => {
    console.log(`Running at port ${port}`)
})