import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import Score from '../../models/score.model';
import ResponseData from '../../payload/ResponseData';
import { createError } from '../../middlewares/errorHandler';
import {QueryTypes} from 'sequelize';

// Valid subjects
const validSubjects = [
  'toan', 'ngu_van', 'hoa_hoc', 'sinh_hoc', 'lich_su', 'dia_li', 'gdcd', 'ma_ngoai_ngu', 'ngoai_ngu', 'vat_li'
];

interface GetScoreByRangeStatisticsOutputDTO{
  level1: number;
  level2: number;
  level3: number;
  level4: number;
}

export const getScoreByRangeStatistics = asyncHandler(async (req: Request, res: Response) => {
  const { subject } = req.body;

  // Validate the subject
  if (!validSubjects.includes(subject)) {
    createError('Invalid subject', 400);
  }

  // Use raw SQL to calculate the number of students in each level
  const queryResult = await Score.sequelize?.query(
    `SELECT
        SUM(CASE WHEN ${subject} BETWEEN 8 AND 10 THEN 1 ELSE 0 END) AS level1,
        SUM(CASE WHEN ${subject} BETWEEN 6 AND 8 THEN 1 ELSE 0 END) AS level2,
        SUM(CASE WHEN ${subject} BETWEEN 4 AND 6 THEN 1 ELSE 0 END) AS level3,
        SUM(CASE WHEN ${subject} BETWEEN 0 AND 4 THEN 1 ELSE 0 END) AS level4
     FROM scores`,
    {
      type: QueryTypes.SELECT,
    }
  );


  if (queryResult === undefined || queryResult.length === 0) {
    createError('No data found', 404);
  }

  // Format response
  const response: ResponseData<GetScoreByRangeStatisticsOutputDTO> = {
    status: res.statusCode,
    data: {
      level1: queryResult && Object.entries(queryResult[0])[0][1],
      level2: queryResult && Object.entries(queryResult[0])[1][1],
      level3: queryResult && Object.entries(queryResult[0])[2][1],
      level4: queryResult && Object.entries(queryResult[0])[3][1],
    },
  };

  // Return response
  res.json(response);
});
