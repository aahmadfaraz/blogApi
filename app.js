import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user-routes";
import blogRouter from "./routes/blog-routes";

const app = express();

app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/blog", blogRouter);

// TODO: move user,pass & db to .env
mongoose
  .connect(
    "mongodb+srv://admin:hOqBPxcX83Q6ZzVH@cluster0.yxacwnd.mongodb.net/Blog?retryWrites=true&w=majority"
  )
  .then(() => app.listen(5000))
  .then(() => console.log("Conntected to Database.."))
  .catch((err) => console.log(err));
