import { DataSource } from "typeorm"
import { Categoria } from "./entity/desafio/Categoria"
import { Produto } from "./entity/desafio/Produto"
import { Product } from "./entity/Product"
import { Profile } from "./entity/profile"
import { User } from "./entity/User"

export const myDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "123456",
    database: "postgres",
    // entities: [".src/entity/*.ts"],
    entities: [User, Product, Profile, Categoria, Produto],
    // entities: ["dist/**/*./entity/*.ts"],
    // entities: ["dist/**/*.entity.js"],
    logging: false,
    synchronize: true,
})

//https://typeorm.io/example-with-express