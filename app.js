import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import studentRoutes from "./routes/studentRoutes.js";
import courseRoutes from "./routes/courseRouters.js";
import enrollmentRoutes from "./routes/enrollmentRoutes.js";
import reportRoutes from "./routes/reportRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res, next) => {
  res.send("Hello world");
});

app.use("/students", studentRoutes);
app.use("/courses", courseRoutes);
app.use("/enrollments", enrollmentRoutes);
app.use("/reports", reportRoutes);

mongoose
  .connect(process.env.DB_URL)
  .then((result) =>
    app.listen(9000, () => {
      console.log("Server stated on port 9000");
    })
  )
  .catch((error) => {
    console.log(error);
  });
