import express from "express";

const app = express();

const port = process.env.PORT || 3004;

app.listen(port, () => {
  console.log(`Listening at port ${port} 🚀`);
});
