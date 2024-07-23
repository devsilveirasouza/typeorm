import { Router } from "express";
import { createProductController, deleteProductController, getAllProductController, updateProductController } from "../controllers/productsController";

const productsRoutes = Router();

productsRoutes.get("/",     getAllProductController);
productsRoutes.post("/",    createProductController);
productsRoutes.put("/",     updateProductController);
productsRoutes.delete("/",  deleteProductController);

export default productsRoutes