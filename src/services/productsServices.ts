import { ProductModelRepository } from "../config/data-source";
import { ProductsEntity } from "../entity/ProductsEntity";

export const getAllProductsService = async () => {
    const products = await ProductModelRepository.find();
    return products
}

interface createProductDto {
    name: string;
    price: number; 
    category: string;
}

export const createProductService = async (productObject: createProductDto): Promise<ProductsEntity> => {
    const { name, price, category } = productObject
    const newProduct = await ProductModelRepository.create({ name, price, category })
    const savedProduct = await ProductModelRepository.save(newProduct);
    return savedProduct;
}

