export interface GetScoreByRangeInputDTO {
    subject: string;
    from: number;
    to: number;
    page: number;
    pageSize: number;
}

export interface GetScoreByRangeOutputDTO {
    status: number;
    data: {
        scoreData: ScoreData[];
        totalItems: number;
        currentPage: number;
        totalPages: number;
        pageSize: number;
    };
}

export interface ScoreData {
    sbd: string;
    toan: number;
    nguVan: number;
    ngoaiNgu: number;
    vatLi: number;
    hoaHoc: number;
    sinhHoc: number;
    lichSu: number;
    diaLi: number;
    gdcd: number;
    maNgoaiNgu: string;
    createdAt: string;
    updatedAt: string;
}



    // {
    //     "status": 200,
    //     "data": {
    //       "scoreData": [
    //         {
    //           "sbd": "01000001",
    //           "toan": 8,
    //           "nguVan": 7,
    //           "ngoaiNgu": 8,
    //           "vatLi": 6,
    //           "hoaHoc": 5,
    //           "sinhHoc": 5,
    //           "lichSu": null,
    //           "diaLi": null,
    //           "gdcd": null,
    //           "maNgoaiNgu": "N1",
    //           "createdAt": "2024-12-03T08:21:02.000Z",
    //           "updatedAt": "2024-12-03T08:21:02.000Z"
    //         }
    //       ],
    //       "totalItems": 310399,
    //       "currentPage": 1,
    //       "totalPages": 310399,
    //       "pageSize": 1
    //     }
    //   }