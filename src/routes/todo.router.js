import { Router } from "express";
import Todo from "../DAO/todo.manager.js";
import Productos from "../DAO/productos.manager.js";

const router = Router();
const todo = new Todo();
const productos = new Productos();


// http://127.0.0.1:8080/todo/productos
router.get("/productos", (req, res) => {
  productos.list().then((r) => {
    res.json(r);
  });
});


// http://127.0.0.1:8080/todo
router.get("/", (req, res) => {
  todo.list().then((r) => {
    res.json(r);
  });
});

router.post("/", (req, res) => {
  todo.create(req.body).then((r) => {
    res.json(r);
  });
});

router.get("/:id", (req, res) => {
  todo.getById(req.params.id).then((r) => {
    res.json(r);
  });
});

router.put("/:id", (req, res) => {
  const todoBody = req.body;
  todoBody.id = parseInt(req.params.id);

  todo.update(todoBody).then((r) => {
    res.json(r);
  });
});

router.delete("/:id", (req, res) => {
  todo.delete(req.params.id).then((r) => {
    res.json(r);
  });
});

export default router;