import FileManager from "./file.manager.js";

export default class ProductManager extends FileManager {
  constructor() {
    super("./bd/data.json");
  }

  create = async (data) => {
    const result = await this.set(data);
    return result;
  };

  list = async () => {
    const result = await this.get();
    return result;
  };

  getById = async (id) => {
    const result = await this.getById(id);
    return result;
  };
}
