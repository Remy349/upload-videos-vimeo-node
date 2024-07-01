import express from "express";
import morgan from "morgan";

const app = express();

const PORT = 3000;

app.use(morgan("dev"));

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
