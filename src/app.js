import express from "express";
import todoRouter from "./routes/todo.router.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static("public"));

app.use("/todo", todoRouter);

app.listen("https://encuesta-servidor-fco.netlify.app/", console.log("Server escuchando"));
