import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import { Op } from 'sequelize';
import Score from '../../models/score.model';
import ResponseData from '../../payload/ResponseData';
import { createError } from '../../middlewares/errorHandler';

// Define score levels
const scoreLevels = {
  level1: { min: 8, max: 10 },
  level2: { min: 6, max: 8 },
  level3: { min: 4, max: 6 },
  level4: { min: 0, max: 4 },
};

// Valid subjects
const validSubjects = [
  'toan', 'ngu_van', 'hoa_hoc', 'sinh_hoc', 'lich_su', 'dia_li', 'gdcd', 'ma_ngoai_ngu'
];

type Level = keyof typeof scoreLevels;

interface getScoreByRangeStatisticsOutputDTO {
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

  // Initialize studentBySubjectandRange for the selected subject
  const studentBySubjectandRange: { [key: string]: number } = {
    level1: 0,
    level2: 0,
    level3: 0,
    level4: 0,
  };

  // Query the number of students per level for the selected subject
  for (const level of Object.keys(scoreLevels) as Level[]) {
    const { min, max } = scoreLevels[level];
    const count = await Score.count({
      where: {
        [subject]: {
          [Op.between]: [min, max],
        },
      },
    });
    studentBySubjectandRange[level] = count;
  }

  // Format response
  const response: ResponseData<getScoreByRangeStatisticsOutputDTO> = {
    status: res.statusCode,
    data: {
      level1: studentBySubjectandRange.level1,
      level2: studentBySubjectandRange.level2,
      level3: studentBySubjectandRange.level3,
      level4: studentBySubjectandRange.level4,
    },
  };

  // Return response
  res.json(response);
});
