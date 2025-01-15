import express from "express";
const app = express();
/* import notFound from "./middleware/not-found.js"; */
import errorHandler from "./middleware/error-handler.js";
import taskRouter from "./routes/taskRouter.js";
import connectDB from "./db/connect.js";
import dotenv from "dotenv";
import process from 'node:process';
dotenv.config();
app.use(express.static("./src"));
app.use(express.json());
/* app.use(notFound); */
app.use(errorHandler);
app.use("/api/v1/tasks", taskRouter);

const port = 7000;


const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    /*  app.get("/", (req, res) => {
      res.send("welcome to my task manager app");
    }); */
    console.log("connected to db");
    app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();

