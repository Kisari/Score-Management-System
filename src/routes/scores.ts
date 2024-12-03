import { Router, Request, Response } from 'express'
import {ScoreController} from '../controllers/ScoreController'

const ScoreRoute = Router();
 
ScoreRoute.get('/subject/range', ScoreController.getScoreByRange);
ScoreRoute.get('/subject/range/statistics', ScoreController.getScoreByRangeStatistics);
ScoreRoute.get('/:sbd', ScoreController.getScoreBySbd);

export default ScoreRoute;