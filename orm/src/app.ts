import * as express from "express"
// import { myDataSource } from "./app-data-source"
import userRoutes from './routes/users'
import productRoutes from './routes/products'

// // establish database connection
// myDataSource
//     .initialize()
//     .then(() => {
//         console.log("Data Source has been initialized!")
//     })
//     .catch((err) => {
//         console.error("Error during Data Source initialization:", err)
//     })

// create and setup express app
const app = express()
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// use routes
app.use('/user', userRoutes)
app.use('/product', productRoutes)


const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Executando em http://localhost:${PORT}`)
})