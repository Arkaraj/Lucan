import express from "express";
const router = express.Router();

import { scrapper } from "../scrapper";

router.get("/", async (_req, res) => {
  const articles = await scrapper();

  res.status(200).json({
    articles,
  });
});

export default router;
