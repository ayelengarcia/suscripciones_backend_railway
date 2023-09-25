const mongoose = require("mongoose")

const ProductModel = mongoose.model(
  "productos",
  new mongoose.Schema({
    titulo: String,
    descripción: String,
    imagen: String,
    marca: String,
    EAN: String,
    tipo: [],
    incontinencia:[],
    genero: [],
    talle: []
  })
);

module.exports = ProductModel;