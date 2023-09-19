const fs = require("fs");

class FileManager {
  constructor(filename = "./bd/bd.json") {
    this.filename = filename;
  }

  getNextId (list) {
    return list.length == 0 ? 1 : list[list.length - 1].id + 1;
  };

  async get() {
    return fs.promises
      .readFile(this.filename, "utf-8")
      .then((r) => JSON.parse(r))
      .catch((e) => {
        return [];
      });
  };

  async getById (id) {
    const data = await this.get();
    return data.find((d) => d.id == id);
  };

  async set (data) {
    const list = await this.get();
    data.id = this.getNextId(list);
    list.push(data);
    return fs.promises
      .writeFile(this.filename, JSON.stringify(list))
      .then((r) => data);
  };

  async update (data) {
    const list = await this.get();
    const idx = list.findIndex((a) => a.id == data.id);
    list[idx] = data;

    return fs.promises
      .writeFile(this.filename, JSON.stringify(list))
      .then((r) => data);
  };

  async delete (id) {
    const list = await this.get();
    const idx = list.findIndex((a) => a.id == id);
    list.splice(idx, 1);

    return fs.promises.writeFile(this.filename, JSON.stringify(list));
  };
}

module.exports = FileManager;
