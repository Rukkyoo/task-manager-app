import ToDo from "../models/task.js";
import asyncWrapper from "../middleware/async.js";
/* import { createCustomError } from '../errors/custom-error.js';
 */
export const createToDo = asyncWrapper(async (req, res) => {
  const todo = await ToDo.create(req.body);
  res.status(201).json({ todo });
});

export const getAllToDos = asyncWrapper(async (req, res) => {
  const todo = await ToDo.find({});
  res.status(200).json({ todo });
});

export const getSingleToDo = asyncWrapper(async (req, res) => {
  const { id: toDoID } = req.params;
  const todo = await ToDo.findOne({ _id: toDoID });
  if (!todo) {
    return res.status(404).json({ msg: `No todo item with id : ${toDoID}` });
  }
  res.status(200).json({ todo });
});

export const editToDo = asyncWrapper(async (req, res) => {
  const { id: toDoID } = req.params;
  const todo = await ToDo.findOneAndUpdate({ _id: toDoID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!todo) {
    return res.status(404).json({ msg: `No todo item with id : ${toDoID}` });
  }
  res.status(200).json({ todo });
});

export const deleteToDo = asyncWrapper(async (req, res) => {
  const { id: toDoID } = req.params;
  const todo = await ToDo.findOneAndDelete({ _id: toDoID });
  if (!todo) {
    return res.status(404).json({ msg: `No todo item with id : ${toDoID}` });
  }
  res.status(200).json({ todo });
});
