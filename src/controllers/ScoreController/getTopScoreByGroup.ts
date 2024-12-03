// getTopScoreByGroup.ts
import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import { createError } from '../../middlewares/errorHandler';
import { QueryTypes } from 'sequelize';
import ResponseData from '../../payload/ResponseData';
import Score from '../../models/score.model';

interface GetTopScoreByGroupOutputDTO {
  scoreData: object[];
}

const validGroups = ['A'];

const subjectsInGroup = {
  A: ['toan', 'vat_li', 'hoa_hoc'],
};

export const getTopScoreByGroup = asyncHandler(async (req: Request, res: Response) => {
  const { group } = req.body;

  // Validate input
  if (!group || !validGroups.includes(group)) {
    throw createError('Invalid group', 400);
  }

  const querySubjects = subjectsInGroup[group as keyof typeof subjectsInGroup];

  // Build the SELECT part based on the subjects in the group
  const selectColumns = querySubjects.join(', ');
  const whereConditions = querySubjects
    .map((subject) => `${subject} IS NOT NULL`)
    .join(' AND ');

  // Fetch top score data by its group name
  const scoreData = await Score.sequelize?.query(
    `SELECT sbd, ${selectColumns}, (${querySubjects.join(' + ')}) AS totalScore
     FROM scores
     WHERE ${whereConditions}
     ORDER BY totalScore DESC
     LIMIT 10;`,
    {
      type: QueryTypes.SELECT,
    }
  );

  if (!scoreData) {
    throw createError('Scores not found', 404);
  }

  const response: ResponseData<GetTopScoreByGroupOutputDTO> = {
    status: res.statusCode,
    data: {
      scoreData,
    },
  };

  // Return response
  res.json(response);
});
