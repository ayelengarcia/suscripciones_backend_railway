import { Router } from "express";
import ProductModel from "../DAO/models/productos.model.js";
import ListaModel from "../DAO/models/lista.model.js";

const router = Router();

//API PRODUCTOS // http://127.0.0.1:8080/todo/productos
//MONGO
router.get("/productos", async (req, res) => {
  try {
    const productos = await ProductModel.find();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener productos" });
  }
});

router.post("/productos", async (req, res) => {
  try {
    const nuevoProducto = new ProductModel(req.body);
    const productoGuardado = await nuevoProducto.save();
    res.json(productoGuardado);
  } catch (error) {
    res.status(500).json({ error: "Error al crear un producto" });
  }
});


//API LISTA //http://127.0.0.1:8080/todo
//MONGO
router.get("/", async (req, res) => {
  try {
    const lista = await ListaModel.find();
    res.json(lista);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener la lista" });
  }
});

router.post("/", async (req, res) => {
  try {
    const nuevaLista = new ListaModel(req.body);
    const listaGuardada = await nuevaLista.save();
    res.json(listaGuardada);
  } catch (error) {
    res.status(500).json({ error: "Error al crear una lista" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const lista = await ListaModel.findById(id);
    if (!lista) {
      return res.status(404).json({ error: "Elemento no encontrado" });
    }
    res.json(lista);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el elemento" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const lista = await ListaModel.findByIdAndUpdate(id, updatedData, { new: true });
    if (!lista) {
      return res.status(404).json({ error: "Elemento no encontrado" });
    }
    res.json(lista);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el elemento" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const lista = await ListaModel.findByIdAndRemove(id);
    if (!lista) {
      return res.status(404).json({ error: "Elemento no encontrado" });
    }
    res.json({ message: "Elemento eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el elemento" });
  }
});

export default router;
