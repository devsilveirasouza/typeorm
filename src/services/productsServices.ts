import { ProductModelRepository } from "../config/data-source";
import { createProductDto } from "../dto/ProductsDto";
import { ProductsEntity } from "../entity/ProductsEntity";

export const getAllProductsService = async () => {
    const products = await ProductModelRepository.find();
    return products
};

export const createProductService = async (productObject: createProductDto): Promise<ProductsEntity> => {
    const { name, price, category } = productObject
    const newProduct = await ProductModelRepository.create({ name, price, category })
    const savedProduct = await ProductModelRepository.save(newProduct);
    return savedProduct;
};

export const updateProductService = async (id: number, productObject: createProductDto) => {
    const { name, price, category } = productObject;
    const productFound = await ProductModelRepository.findOneBy({ id: id });
    if (!productFound) throw new Error("Product not found")
    productFound.name = productObject.name;
    productFound.price = productObject.price;
    productFound.category = productObject.category;
    await ProductModelRepository.save(productFound);
    return productFound;
};