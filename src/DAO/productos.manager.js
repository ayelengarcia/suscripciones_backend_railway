import FileManager from "./file.manager.js";

export default class ProductManager extends FileManager {
  constructor() {
    super("./bd/productos.json");
  }

  list = async () => {
    const result = await this.get();
    return result;
  };
}
