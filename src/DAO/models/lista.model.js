const mongoose = require("mongoose");

const respuestaSchema = new mongoose.Schema({
  fecha: {
    type: String,
    default: () => {
      const now = new Date();
      const day = now.getDate().toString().padStart(2, "0");
      const month = (now.getMonth() + 1).toString().padStart(2, "0");
      const year = now.getFullYear().toString();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      return `${day}/${month}/${year} ${hours}:${minutes}`;
    },
  },
  nombre: String,
  apellido: String,
  celular: String,
  email: {
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
  descuento: Number,
});

const contactoSchema = new mongoose.Schema({
  dni: Number,
  calle: String,
  altura: Number,
  piso: String,
  localidad: String,
  CP: String,
  frecuencia: String,
});

const listaSchema = new mongoose.Schema({
  respuesta: respuestaSchema,
  suscripcion: String,
  producto: productoSchema,
  contacto: contactoSchema,
});

const ListaModel = mongoose.model("lista", listaSchema);

module.exports = ListaModel;
