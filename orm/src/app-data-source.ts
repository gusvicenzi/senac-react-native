import { DataSource } from "typeorm"
import { Product } from "./entity/Product"
import { User } from "./entity/User"

export const myDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "123456",
    database: "postgres",
    // entities: [".src/entity/*.ts"],
    entities: [User, Product],
    // entities: ["dist/**/*./entity/*.ts"],
    // entities: ["dist/**/*.entity.js"],
    logging: false,
    synchronize: true,
})

//https://typeorm.io/example-with-express