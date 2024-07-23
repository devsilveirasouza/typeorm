import { Request, Response } from "express";
import { createProductService, deleteProductService, getAllProductsService, updateProductService } from "../services/productsServices";

export const getAllProductController = async (req: Request, res: Response) => {
    const products = await getAllProductsService()
    res.json(products)
};

export const createProductController = async (req: Request, res: Response) => {
    const { name, price, category } = req.body
    const newProduct = await createProductService({ name, price, category })
    res.json(newProduct)
};

export const updateProductController = async (req: Request, res: Response) => {
    // const { id } = req.params
    const { name, price, category, id } = req.body
    const updatedProduct = await updateProductService(+id, { name, price, category })
    res.json(updatedProduct)
};

export const deleteProductController = async ( req: Request, res: Response) => {
    const { id } = req.body
    const deletedProduct = await deleteProductService(id)
    res.json(deletedProduct)
}