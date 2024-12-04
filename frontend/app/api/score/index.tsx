import { GetScoreBySbdOutputDTO } from "@/app/dto/score/getScoreBySbd";
import { GetScoreByRangeInputDTO, GetScoreByRangeOutputDTO } from "@/app/dto/score/getScoreByRange";
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
