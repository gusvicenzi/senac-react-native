import * as express from "express"
import { Request, Response } from "express"

const app = express()
app.use(express.json())

app.route('/user')
    .get((req: Request, res: Response) => {
        res.send({
            message: 'Ola'
        })
    })
    .post((req: Request, res: Response) => {
        // let user = {
        //     nome: req.body.nome,
        //     email: req.body.email,
        //     idade: req.body.idade
        // }
        res.json(req.body)
    })

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Executando em http://localhost:${PORT}`)
})