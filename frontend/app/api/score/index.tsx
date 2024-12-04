import { GetScoreBySbdOutputDTO } from "../../../app/dto/score/getScoreBySbd";
import { GetScoreByRangeInputDTO, GetScoreByRangeOutputDTO } from "../../../app/dto/score/getScoreByRange";
import { GetScoreByRangeStatisticsInputDTO, GetScoreByRangeStatisticsOutputDTO } from "../../../app/dto/score/getScoreByRangeStatistics";
import { GetTopScoreByGroupInputDTO, GetTopScoreByGroupOutputDTO } from "../../../app/dto/score/getTopScoreByGroup";
import axios from "axios";

export const getScoreBySbd = async (sbd: string): Promise<GetScoreBySbdOutputDTO> => {
    try {
        const response = await axios.get<GetScoreBySbdOutputDTO>(`${process.env.NEXT_PUBLIC_NEXTAUTH_BACKEND_API}/api/v1/score/${sbd}`);

        if (!response.status) {
            throw new Error("Get score by failed");
        }

        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getScoreByRange = async (query: GetScoreByRangeInputDTO): Promise<GetScoreByRangeOutputDTO> => {
    try {
        const response = await axios.post<GetScoreByRangeOutputDTO>(`${process.env.NEXT_PUBLIC_NEXTAUTH_BACKEND_API}/api/v1/score/subject/range`,
            query,
        );

        if (!response.status) {
            throw new Error("Get score by range failed");
        }

        return response.data;
    } catch (error) {
        throw error;
    }
}

export const getScoreByRangeStatistics = async (query: GetScoreByRangeStatisticsInputDTO): Promise<GetScoreByRangeStatisticsOutputDTO> => {
    try {
        const response = await axios.post<GetScoreByRangeStatisticsOutputDTO>(`${process.env.NEXT_PUBLIC_NEXTAUTH_BACKEND_API}/api/v1/score/subject/range/statistics`,
            query,
        );

        if (!response.status) {
            throw new Error("Get score by range statistics failed");
        }

        return response.data;
    } catch (error) {
        throw error;
    }
} 

export const getTopScoreByGroup = async (query: GetTopScoreByGroupInputDTO): Promise<GetTopScoreByGroupOutputDTO> => {
    try {
        const response = await axios.post<GetTopScoreByGroupOutputDTO>(`${process.env.NEXT_PUBLIC_NEXTAUTH_BACKEND_API}/api/v1/score/group/score/top`,
            query,
        );

        if (!response.status) {
            throw new Error("Get top score by group failed");
        }

        return response.data;
    } catch (error) {
        throw error;
    }
}
