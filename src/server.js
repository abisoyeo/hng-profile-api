import "dotenv/config";
import express from "express";
import createError from "http-errors";
import userRouter from "./routes/userRoutes.js";
import errorHandler from "./utils/errorHandler.js";
import limiter from "./utils/rateLimit.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(limiter);
app.use("/me", userRouter);

app.use("/*", (req, res, next) => {
  next(createError(404, `Cannot ${req.method} ${req.originalUrl}`));
});

app.use(errorHandler);

app.listen(PORT, () => {
  try {
    console.log(`Server running on port ${PORT}`);
  } catch (error) {
    console.error("Error startinng server:", error);
  }
});
