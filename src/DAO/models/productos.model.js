import mongoose from "mongoose";

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

export default ProductModel;