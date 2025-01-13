import express from "express";
const app = express();

const port = 3000;

console.log(`Hello from port ${port} in app.js`);

const start = async () => {
  try {
    app.get("/hello", (req, res) => {
      res.send("welcome to my task manager app");
    });

    app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();