import express from "express";
import productsRoutes from "./src/routes/productsRouter";

const server = express();

server.use(express.json());

server.use("/products", productsRoutes)

export default server