export interface GetTopScoreByGroupOutputDTO {
    status: number;
    data: {
        scoreData: GroupAScoreDTO[];
    };
}

export interface GetTopScoreByGroupInputDTO {
    group: string;
}

export interface GroupAScoreDTO {
    sbd: string;
    toan: number;
    vat_li: number;
    hoa_hoc: number;
    totalScore: number;
}



// {
//     "status": 200,
//     "data": {
//       "scoreData": [
//         {
//           "sbd": "19013166",
//           "toan": 10,
//           "vat_li": 10,
//           "hoa_hoc": 10,
//           "totalScore": 30
//         },
//         {
//           "sbd": "01069990",
//           "toan": 10,
//           "vat_li": 10,
//           "hoa_hoc": 10,
//           "totalScore": 30
//         },
//         {
//           "sbd": "02025157",
//           "toan": 10,
//           "vat_li": 10,
//           "hoa_hoc": 10,
//           "totalScore": 30
//         },
//         {
//           "sbd": "12002377",
//           "toan": 10,
//           "vat_li": 10,
//           "hoa_hoc": 10,
//           "totalScore": 30
//         },
//         {
//           "sbd": "01074910",
//           "toan": 10,
//           "vat_li": 10,
//           "hoa_hoc": 10,
//           "totalScore": 30
//         },
//         {
//           "sbd": "02037983",
//           "toan": 10,
//           "vat_li": 10,
//           "hoa_hoc": 10,
//           "totalScore": 30
//         },
//         {
//           "sbd": "04009742",
//           "toan": 10,
//           "vat_li": 10,
//           "hoa_hoc": 10,
//           "totalScore": 30
//         },
//         {
//           "sbd": "01101271",
//           "toan": 10,
//           "vat_li": 10,
//           "hoa_hoc": 10,
//           "totalScore": 30
//         },
//         {
//           "sbd": "03012761",
//           "toan": 10,
//           "vat_li": 10,
//           "hoa_hoc": 10,
//           "totalScore": 30
//         },
//         {
//           "sbd": "19016615",
//           "toan": 10,
//           "vat_li": 10,
//           "hoa_hoc": 10,
//           "totalScore": 30
//         }
//       ]
//     }
//   }