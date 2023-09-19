const express = require("express");
const todoRouter = require("./src/routes/todo.router.js");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static("public"));

app.use("/todo", todoRouter);

app.listen(8080, () => {
  console.log("Puerto 8080 escuchando");
});

