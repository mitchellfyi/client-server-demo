import express, { Request, Response } from 'express';
import cors from 'cors';
import influencersRouter from './services/influencers/routes';

const app = express();

app.use(cors());

app.use('/api/v1/influencers', influencersRouter);

export default app;
