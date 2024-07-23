import { Router } from "express";
import { createProductController, getAllProductController, updateProductController } from "../controllers/productsController";

const productsRoutes = Router();

productsRoutes.get("/", getAllProductController);
productsRoutes.post("/", createProductController);
productsRoutes.put("/", updateProductController);

export default productsRoutes