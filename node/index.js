const express = require('express')
const pgp = require('pg')
const conString = 'postgres://postgres:1234@localhost/estacionamento'
const dados = require('./dados')
const app = express()
const port = 8080

// app.use(express.json())

// pg.connect(conString, function(err, client, done) {

//   if (err) {
//     return console.error('error fetching client from pool', err)
//   }
//   client.query('SELECT $1::int AS number', ['1'], function(err, result) {
//     done()
//     if (err) {
//       return console.error('error running query', err)
//     }
//     console.log(result.rows[0].number)
//   })

// })



app.route('/').get(
  (req, res) => {
    res.send("<h1>Hello world!<h1>")
  }
)

app.route('/cadastro/cliente').get(
  (req, res) => {
    res.send('Você está na página de cadastro de clientes.')
  }
)

app.route('/consultar').get(
  (req, res) => {
    res.send(dados)
    // db.one('select * from cliente')
    // .then(data => console.log('Clientes:', data.value))
    // .catch(e => console.log('Erro:', e))
  }
)

app.listen(port, () => {
  console.log(`Running at port ${port}`)
})