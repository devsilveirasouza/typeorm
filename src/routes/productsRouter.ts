import { Router } from "express";
import { createProductController, getAllProductController } from "../controllers/productsController";

const productsRoutes = Router();

productsRoutes.get("/", getAllProductController);
productsRoutes.post("/", createProductController);

export default productsRoutes