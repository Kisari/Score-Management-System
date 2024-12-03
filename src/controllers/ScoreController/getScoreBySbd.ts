import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import { createError } from '../../middlewares/errorHandler';
import ResponseData from '../../payload/ResponseData';
import Score from '../../models/score.model';

interface GetScoreBySbdOutputDTO {
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
  const response: ResponseData<GetScoreBySbdOutputDTO> = {
    status: res.statusCode,
    data: {
      scoreData: scoreData,
    },
  };

  // Return response
  res.json(response);
});
