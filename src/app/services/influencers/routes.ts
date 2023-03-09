import express, { Request, Response } from 'express';
import * as controller from './controller';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const items = await controller.findAll();

    res.status(200).send(items);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});

export default router;
