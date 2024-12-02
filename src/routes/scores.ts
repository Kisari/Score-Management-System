import { Router, Request, Response } from 'express'

const ScoreRoute = Router();

ScoreRoute.get('/', (req: Request, res: Response) => {
  res.send("Hello World!!!");
});

export default ScoreRoute;