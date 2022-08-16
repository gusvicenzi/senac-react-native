import * as express from "express"
import { Request, Response } from "express"

import { User } from "../entity/User"
import { myDataSource } from "../app-data-source"

// establish database connection
myDataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })

const router = express.Router()

router.route('/')
    .get(async (req: Request, res: Response) => {
        const users = await myDataSource.getRepository(User).find()
        res.json(users)
    })
    .post(async (req: Request, res: Response) => {
        const user = req.body
        const result = await myDataSource.getRepository(User).save(user)
        res.send(result)
    })

router.route('/:id')
    .put(async (req: Request, res: Response) => {
        const user = await myDataSource.getRepository(User).findOneBy({
            id: +req.params.id
        })
        myDataSource.getRepository(User).merge(user, req.body)
        const results = await myDataSource.getRepository(User).save(user)
        return res.send(results)
    })
    .delete(async (req: Request, res: Response) => {
        const results = await myDataSource.getRepository(User).delete(req.params.id)
        return res.send(results)
    })

export default router