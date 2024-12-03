import { GetScoreBySbdOutputDTO } from "@/app/dto/score/getScoreBySbd";
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
