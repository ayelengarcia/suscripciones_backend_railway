import express from "express";
import todoRouter from "./src/routes/todo.router.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static("public"));

app.use("/todo", todoRouter);

app.listen("3000", console.log("Puerto 3000 escuchando"));
