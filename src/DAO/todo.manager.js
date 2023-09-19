const FileManager = require("./file.manager.js");

class ProductManager extends FileManager {
  constructor() {
    super("./bd/data.json");
  }

  async create(data) {
    const result = await this.set(data);
    return result;
  }

  async list() {
    const result = await this.get();
    return result;
  }

  async getById(id) {
    const result = await super.getById(id);
    return result;
  }
}

module.exports = ProductManager;
