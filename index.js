const express = require("express");
const todoRouter = require("./src/routes/todo.router.js");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8080

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static("public"));

app.use("/todo", todoRouter);

app.listen(PORT, () => {
  console.log("Puerto 8080 escuchando");
});

