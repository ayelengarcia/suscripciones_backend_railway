import express from "express";
import todoRouter from "./src/routes/todo.router.js";
import cors from "cors";

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

