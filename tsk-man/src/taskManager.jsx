import React, { useState } from "react";
import axiosInstance from "./axiosInstance";

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editingTask, setEditingTask] = useState(null);

  const handleAddTask = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/tasks", { name: newTask });
      setTasks([...tasks, response.data.todo]);
      setNewTask("");
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };
  /*     if (newTask.trim() !== "") {
      setTasks([...tasks, { name: newTask, completed: false }]);
      setNewTask("");
    } */

  const handleEditTask = (index, newName) => {
    axiosInstance.patch(`/tasks/${tasks[index]._id}`, { name: newName })
      .then(response => {
        console.log('Task updated:', response.data);
        const updatedTasks = [...tasks];
        updatedTasks[index].name = newName;
        setTasks(updatedTasks);
        setEditingTask(null);
      })
      .catch(error => {
        console.error(error);
      })
/*     if (newName.trim() !== "") {
      const updatedTasks = [...tasks];
      updatedTasks[index].name = newName;
      setTasks(updatedTasks);
      setEditingTask(null);
    } */
  };

const handleDeleteTask = (index) => {
  axiosInstance.delete(`/tasks/${tasks[index]._id}`)
    .then(response => {
      console.log('Task deleted:', response.data);
      const updatedTasks = [...tasks];
      updatedTasks.splice(index, 1);
      setTasks(updatedTasks);
    })
    .catch(error => {
      console.error(error);
    });
};
  const handleToggleCompleted = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <div className="container mx-auto p-4 pt-6">
      <h1 className="text-3xl font-bold mb-4">Task Manager</h1>
      <form className="mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="w-full p-2 pl-10 text-sm text-gray-700 border-black bg-slate-200"
          placeholder="Task name"
        />
        <button
          onClick={handleAddTask}
          className="bg-blue-500 mt-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Task
        </button>
      </form>
      <ul className="list-none p-0 m-0">
        {tasks.map((task, index) => (
          <li key={index} className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleCompleted(index)}
              className="mr-2"
            />
            {editingTask === index ? (
              <div className="flex flex-row items-center">
                <input
                  type="text"
                  value={task.name}
                  onChange={(e) => {
                    setTasks((prevTasks) => {
                      const updatedTasks = [...prevTasks];
                      updatedTasks[index].name = e.target.value;
                      return updatedTasks;
                    });
                  }}
                  className="w-full p-2 pl-10 text-sm text-gray-700 border-black bg-slate-200"
                />
                <button
                  onClick={() => {
                    handleEditTask(index, task.name);
                  }}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
                >
                  Save
                </button>
              </div>
            ) : (
              <span
                className={task.completed ? "text-gray-500" : "text-gray-900"}
              >
                {task.name}
              </span>
            )}
            <button
              onClick={() => setEditingTask(index)}
              className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded ml-2"
            >
              Edit
            </button>
            <button
              onClick={() => handleDeleteTask(index)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;
