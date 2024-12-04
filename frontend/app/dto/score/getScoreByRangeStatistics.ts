export interface GetScoreByRangeStatisticsOutputDTO {
    status: number;
    data: {
        level1: string;
        level2: string;
        level3: string;
        level4: string;
    };
}

export interface GetScoreByRangeStatisticsInputDTO {
    subject: string;
}



// {
//     "status": 200,
//     "data": {
//       "level1": "310399",
//       "level2": "720576",
//       "level3": "416840",
//       "level4": "136764"
//     }
//   }