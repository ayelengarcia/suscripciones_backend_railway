const mongoose = require("mongoose")

const respuestaSchema = new mongoose.Schema({
  nombre: String,
  apellido: String,
  celular: String,
  email:{
    type: String,
    unique: false,
  },
  tipo: String,
  genero: String,
  incontinencia: String,
  talle: String,
});

const productoSchema = new mongoose.Schema({
  titulo: String,
  EAN: String,
});

const listaSchema = new mongoose.Schema({
  respuesta: respuestaSchema,
  producto: [productoSchema],
});

const ListaModel = mongoose.model("lista", listaSchema);

module.exports = ListaModel;