import express from "express";
const app = express();
/* import notFound from "./middleware/not-found.js"; */
import errorHandler from "./middleware/error-handler.js";
import taskRouter from "./routes/taskRouter.js";

app.use(express.static("./src"))
app.use(express.json());
/* app.use(notFound); */
app.use(errorHandler);
app.use("/api/v1/tasks", taskRouter);

const port = 7000;

console.log(`Hello from port ${port} in app.js`);

const start = async () => {
  try {
    app.get("/", (req, res) => {
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