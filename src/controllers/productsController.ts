import { Request, Response } from "express";
import { createProductService, getAllProductsService } from "../services/productsServices";

export const getAllProductController = async (req: Request, res: Response) => {
    const products = await getAllProductsService()
    res.json(products)
}

export const createProductController = async (req: Request, res: Response) => {
    const { name, price, category } = req.body
    const newProduct = await createProductService({ name, price, category })
    res.json(newProduct)
}