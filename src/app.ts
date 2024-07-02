import "dotenv/config";

import express from "express";
import morgan from "morgan";

import videoRouter from "./routes/videos";

const app = express();

const PORT = 3000;

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/videos", videoRouter);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
