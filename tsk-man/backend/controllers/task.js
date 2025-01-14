import ToDo from '../models/task.js';
import asyncWrapper from '../middleware/async.js';
import { createCustomError } from '../errors/custom-error.js';

const createTask = asyncWrapper(async (req,res) => {
const todo = await ToDo.create(req.body);
res.status(201).json({ todo });
})

export default createTask;