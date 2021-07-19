import express, { Request, Response } from "express";
const router = express.Router();

import { scrapper } from "../scrapper";

router.get("/", async (req: Request, res: Response) => {
  const topic = JSON.stringify(req.query.topic);
  const articles = await scrapper(topic);

  res.status(200).json({
    articles,
  });
});

export default router;
