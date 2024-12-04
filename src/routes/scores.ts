import { Router, Request, Response } from 'express'
import {ScoreController} from '../controllers/ScoreController'

const ScoreRoute = Router();
 
ScoreRoute.post('/subject/range', ScoreController.getScoreByRange);
ScoreRoute.post('/subject/range/statistics', ScoreController.getScoreByRangeStatistics);
ScoreRoute.post('/group/score/top', ScoreController.getTopScoreByGroup);
ScoreRoute.get('/:sbd', ScoreController.getScoreBySbd);

export default ScoreRoute;