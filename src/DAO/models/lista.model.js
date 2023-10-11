const mongoose = require("mongoose")
// const { format } = require("date-fns");

const respuestaSchema = new mongoose.Schema({
  fecha: {
    type: String,
    default: () => {
      const now = new Date();
      const day = now.getDate().toString().padStart(2, "0");
      const month = (now.getMonth() + 1).toString().padStart(2, "0");
      const year = now.getFullYear().toString();
      return `${day}/${month}/${year}`;
    },
  },
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

const contactoSchema = new mongoose.Schema({
  frecuencia: String,
})

const listaSchema = new mongoose.Schema({
  respuesta: respuestaSchema,
  recomendados: [productoSchema],
  suscripcion: String,
  producto: productoSchema,
  contacto: contactoSchema,
});

const ListaModel = mongoose.model("lista", listaSchema);

module.exports = ListaModel;