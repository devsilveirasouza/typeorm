import "reflect-metadata"
import { DataSource } from "typeorm"
import { ProductsEntity } from "../entity/ProductsEntity"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "user_crud",
    password: "1234",
    database: "crud_node",
    synchronize: true,
    logging: false,
    entities: [ProductsEntity],
    migrations: [],
    subscribers: [],
    dropSchema: false,
})

export const ProductModelRepository = AppDataSource.getRepository(ProductsEntity)