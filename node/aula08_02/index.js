const express = require('express')
const app = express()
const pg = require('pg')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

const conString = process.env.DATABASE_URL
const pool = new pg.Pool({ connectionString: conString })

app
  .route('/contatos')
  .get((req, res) => {
    pool.connect((err, client, release) => {
      if (err) {
        return res.send({
          message: 'Conexão não autorizada',
          erro: err.message
        })
      }
      client.query(`select * from contato`, (error, result) => {
        if (error) {
          return res.send({
            message: 'Erro ao selecionar contatos',
            erro: error.message
          })
        }
        return res.status(200).send(result.rows)
      })
      release()
    })
  })
  .post((req, res) => {
    pool.connect((err, client, release) => {
      let sql = `insert into contato(nome, fone, email) values($1, $2, $3)`
      let dados = [req.body.nome, req.body.fone, req.body.email]
      client.query(sql, dados, (error, result) => {
        return res.status(201).send({
          message: 'Contato criado com sucesso'
        })
      })
      release()
    })
  })

app
  .route('/contatos/:id')
  .get((req, res) => {
    res.send({
      message: 'Pagina de consulta de contato por id',
      idPesquisado: req.params.id
    })
  })
  .put((req, res) => {
    pool.connect((err, client, release) => {
      let sql = `update contato set nome=$1, fone=$2, email=$3 where id = $4`
      let dados = [req.body.nome, req.body.fone, req.body.email, req.params.id]
      client.query(sql, dados, (error, result) => {
        return res.status(200).send({
          message: 'Contato alterado com sucesso',
          idAlterado: req.params.id,
          contatoAlterado: dados
        })
      })
      release()
    })
  })
  .delete((req, res) => {
    pool.connect((err, client, release) => {
      let sql = `delete from contato where id=$1`
      client.query(sql, [req.params.id], (error, result) => {
        return res.status(200).send({
          message: 'Contato apagado com sucesso',
          idApagado: req.params.id
        })
      })
      release()
    })
  })

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Executando em http://localhost:${PORT}`)
})
