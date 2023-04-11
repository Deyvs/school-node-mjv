import { Product } from "../model/products.model";

class ProductRepository {
  getAll() {
    return Product.find();
  }

  getById(id: string) {
    return Product.findById(id);
  }

  create(product: typeof Product) {
    return Product.create(product);
  }

  delete(id: string) {
    return Product.findByIdAndDelete(id);
  }

  update(id: string, product: Partial<typeof Product>) {
    return Product.findByIdAndUpdate(id, product);
  }
}

export default new ProductRepository();
