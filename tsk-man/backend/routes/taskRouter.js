import express from "express";
const router = express.Router();
import createTask from "../controllers/task";

/* router.route("/").get((req, res) => {
  res.send("all tasks")
}) */

router.route("/").post(createTask);

export default router;
