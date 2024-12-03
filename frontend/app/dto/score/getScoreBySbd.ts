export interface GetScoreBySbdOutputDTO {
    status: number;
    data: Data;
}

export interface Data {
    scoreData: ScoreData;
}

export interface ScoreData {
    sbd: string;
    toan: number;
    nguVan: number;
    ngoaiNgu: number;
    vatLi: number;
    hoaHoc: number;
    sinhHoc: number;
    lichSu: null;
    diaLi: null;
    gdcd: null;
    maNgoaiNgu: string;
}