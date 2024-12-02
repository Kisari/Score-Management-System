import { Router, Request, Response } from 'express'
import {ScoreController} from '../controllers/ScoreController'

const ScoreRoute = Router();

ScoreRoute.get('/:sbd', ScoreController.getScoreBySbd); 

export default ScoreRoute;