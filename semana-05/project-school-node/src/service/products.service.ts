import { Product } from "../model/products.model";
import ProductRepository from "../repositories/product.repository";

class ProductService {
  getAll() {
    return ProductRepository.getAll();
  }

  getById(id: string) {
    return ProductRepository.getById(id);
  }

  createProduct(product: typeof Product) {
    return ProductRepository.create(product);
  }

  deleteProduct(id: string) {
    return ProductRepository.delete(id);
  }

  updateProduct(id: string, productUpdate: Partial<typeof Product>) {
    return ProductRepository.update(id, productUpdate);
  }
}

export default new ProductService();
