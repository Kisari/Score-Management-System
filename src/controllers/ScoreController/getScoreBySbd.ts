import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import { createError } from '../../middlewares/errorHandler';
import ResponseData from '../../payload/ResponseData';
import Score from '../../models/score.model';

interface GetScoreBySbdOutputDTO {
  scoreData: {
    sbd: string;
    toan?: number;
    nguVan?: number;
    ngoaiNgu?: number;
    vatLi?: number;
    hoaHoc?: number;
    sinhHoc?: number;
    lichSu?: number;
    diaLi?: number;
    gdcd?: number;
    maNgoaiNgu?: string;
  };
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

  //clean up the data
  const cleanScoreData = {
    sbd: scoreData.sbd,
    toan: scoreData.toan,
    nguVan: scoreData.nguVan,
    ngoaiNgu: scoreData.ngoaiNgu,
    vatLi: scoreData.vatLi,
    hoaHoc: scoreData.hoaHoc,
    sinhHoc: scoreData.sinhHoc,
    lichSu: scoreData.lichSu,
    diaLi: scoreData.diaLi,
    gdcd: scoreData.gdcd,
    maNgoaiNgu: scoreData.maNgoaiNgu,
  };

  // Format response
  const response: ResponseData<GetScoreBySbdOutputDTO> = {
    status: res.statusCode,
    data: {
      scoreData: cleanScoreData,
    },
  };

  // Return response
  res.json(response);
});
