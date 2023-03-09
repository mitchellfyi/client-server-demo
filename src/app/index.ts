import express, { Request, Response } from 'express';

const app = express();

app.use('/', (req: Request, resp: Response) => {
  console.log('Hello from Express!');
});

export default app;
