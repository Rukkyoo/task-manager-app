import express from "express";
const router = express.Router();
import { getAllToDos } from "./../controllers/todo.js";
import { createToDo } from "./../controllers/todo.js";
import { getSingleToDo } from "./../controllers/todo.js";
import { editToDo } from "./../controllers/todo.js";
import { deleteToDo } from "./../controllers/todo.js";

router.route("/").get(getAllToDos).post(createToDo);

router.route("/:id").get(getSingleToDo).patch(editToDo).delete(deleteToDo);

export default router;


