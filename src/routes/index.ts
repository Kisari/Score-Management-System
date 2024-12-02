import { Router } from 'express';
import ScoreRoute from './scores';

const mainRouter = Router();

mainRouter.use('/api/v1/score', ScoreRoute);

export default mainRouter;