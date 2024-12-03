import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import { createError } from '../../middlewares/errorHandler';
import { Op } from 'sequelize';
import ResponseData from '../../payload/ResponseData';
import Score from '../../models/score.model';

interface GetScoreByRangeOutputDTO {
  scoreData: Score[];
totalItems: number;
currentPage: number;
totalPages: number;
pageSize: number;
}

export const getScoreByRange = asyncHandler(async (req: Request, res: Response) => {
  const {subject, from, to, page, pageSize} = req.body;

  // Validate input
  if (!from || !to) {
    throw createError('Invalid request: `from` and `to` are required', 400);
  }
  if (isNaN(page) || page < 1 || isNaN(pageSize) || pageSize < 1) {
    throw createError('Invalid request: `page` and `pageSize` must be positive numbers', 400);
  }

  // Fetch score data by its subject name range with pagination
  const scoreData = await Score.findAndCountAll({
    where: {
      [subject]: {
        [Op.between]: [parseFloat(from), parseFloat(to)],
      },
    },
    limit: parseInt(pageSize),
    offset: (parseInt(page) - 1) * parseInt(pageSize),
  });
  

  if (!scoreData) {
    throw createError('Scores not found', 404);
  }

  // Calculate pagination details
  const totalItems = scoreData.count;
  const totalPages = Math.ceil(totalItems / parseInt(pageSize));


  
  const response: ResponseData<GetScoreByRangeOutputDTO> = {
    status: res.statusCode,
    data: {
      scoreData: scoreData.rows,
      totalItems,
      currentPage: parseInt(page),
      totalPages,
      pageSize: parseInt(pageSize),
    },
  };

  // Return response
  res.status(200).json(response);
});
