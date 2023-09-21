import FileManager from "./file.manager.js";

class ProductManager extends FileManager {
  constructor() {
    super("./bd/productos.json");
  }

  async list() {
    const result = await this.get();
    return result;
  }
}

export default ProductManager;

