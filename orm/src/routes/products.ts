import * as express from "express"
import { Request, Response } from "express"

import { myDataSource } from "../app-data-source"
import { Product } from "../entity/Product"

const router = express.Router()

router.route('/')
    .get(async (req: Request, res: Response) => {
        const products = await myDataSource.getRepository(Product).find()
        res.json(products)
    })
    .post(async (req: Request, res: Response) => {
        const product = req.body
        const result = await myDataSource.getRepository(Product).save(product)
        res.send(result)
    })

router.route('/:id')
    .put(async (req: Request, res: Response) => {
        const product = await myDataSource.getRepository(Product).findOneBy({
            id: +req.params.id
        })
        myDataSource.getRepository(Product).merge(product, req.body)
        const results = await myDataSource.getRepository(Product).save(product)
        return res.send(results)
    })
    .delete(async (req: Request, res: Response) => {
        const results = await myDataSource.getRepository(Product).delete(req.params.id)
        return res.send(results)
    })

export default router