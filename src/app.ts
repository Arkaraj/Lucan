import express from "express";
import logger from "morgan";

const app = express();

// middleware
app.use(logger("dev"));

import index from "./routes/";

app.use("/api/v1", index);

app.use("/", (_, res) => {
  res.status(200).send("Lucan Working!!");
});

const port = process.env.PORT || 3004;

app.listen(port, () => {
  console.log(`Listening at port ${port} 🚀`);
});
