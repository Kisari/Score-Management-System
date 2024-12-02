import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import { createError } from '../../middlewares/errorHandler';
import { sequelizeConnection } from '../../config/database';
import ResponseData from '../../payload/ResponseData';
import Score from '../../models/score.model';

interface getScoreBySbdOutputDTO {
  scoreData: Score;
}


export const getScoreBySbd = asyncHandler(async (req: Request, res: Response) => {
  const { sbd } = req.params;

  // Validate sbd
  if (!sbd || isNaN(Number(sbd))) {
    throw createError('Valid sbd is required', 400);
  }

  // Fetch score data by primary key
  const scoreData = await Score.findByPk(sbd);

  if (!scoreData) {
    throw createError('Score not found', 404);
  }

  // Format response
  const response: ResponseData<getScoreBySbdOutputDTO> = {
    status: res.statusCode,
    data: {
      scoreData: scoreData,
    },
  };

  // Return response
  res.json(response);
});
