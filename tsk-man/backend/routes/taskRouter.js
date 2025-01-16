import express from "express";
const router = express.Router();
import { getAllToDos } from "./../controllers/todo.js";
import { createToDo } from "./../controllers/todo.js";

router.route("/").get(getAllToDos);

router.route("/").post(createToDo);

export default router;


