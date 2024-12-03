import { AxiosError } from 'axios';

export interface ErrorResponse {
    success: boolean;
    message: string;
    stack: string;
}

export const errorMessageHandler = (error: unknown, customMessage?: string): string => {
    let errorMessage = customMessage ?? 'An error occurred while processing your request';

    if (error instanceof AxiosError) {
        const axiosError = error as AxiosError<ErrorResponse>;
        errorMessage = axiosError.response?.data?.message ?? errorMessage;
    } else if (error instanceof Error) {
        // If the error is a general JavaScript error
        errorMessage = error.message ?? errorMessage;
    }

    return errorMessage;
};
