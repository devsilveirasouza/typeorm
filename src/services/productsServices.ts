import { ProductModelRepository } from "../config/data-source";

export const getAllProductsService = async () => {
    const products = await ProductModelRepository.find();
    return products
}

export const createProductService = async (productObject: any) => {
    const { name, price, category } = productObject
    const newProduct = await ProductModelRepository.create({ name, price, category })
    await ProductModelRepository.save(newProduct);
    return newProduct
}