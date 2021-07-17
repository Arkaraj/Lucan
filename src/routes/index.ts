import express from "express";
const router = express.Router();
import articleRouter from "./articles.routes";

router.get("/", (_, res) => {
  res.status(200).send("Routes: /articles");
});

router.use("/articles", articleRouter);

export default router;
