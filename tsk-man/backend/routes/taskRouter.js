import express from "express";
const router = express.Router();
import createToDo from "./../controllers/todo.js";

router.route("/").get((req, res) => {
  res.send("all tasks")
})

router.route("/").post(createToDo);

export default router;

