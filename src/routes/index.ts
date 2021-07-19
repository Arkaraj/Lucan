import express from "express";
const router = express.Router();
import gadgetRouter from "./gadgets.routes";

router.get("/", (_, res) => {
  res.status(200).send("Routes: /gadgets");
});

router.use("/gadgets", gadgetRouter);

export default router;
