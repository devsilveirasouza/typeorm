import { Request, Response } from "express";
import { createProductService, getAllProductsService } from "../services/productsServices";

export const getAllProductController = async (req: Request, res: Response) => {
    const products = await getAllProductsService()
    res.json(products)
}

export const createProductController = async (req: Request, res: Response) => {
    const productObject = req.body
    const newProduct = await createProductService(productObject)
    res.json(newProduct)
}