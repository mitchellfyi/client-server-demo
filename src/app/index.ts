import express, { Request, Response } from 'express';
import influencersRouter from './services/influencers/routes';

const app = express();

app.use('/api/v1/influencers', influencersRouter);

export default app;
