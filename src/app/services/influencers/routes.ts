import express, { Request, Response } from "express";
import * as controller from "./controller";

const router = express.Router();

export const index = async (req: Request, res: Response) => {
  try {
    const items = await await controller.findAll();

    res.status(200).send(items);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
};

router.get("/", index);

export default router;
