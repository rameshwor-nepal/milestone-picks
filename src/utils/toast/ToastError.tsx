import { toast } from "react-toastify";

type PossibleError = {
    data?: unknown;
    error?: unknown;
};

export class ToastError {
    static serialize(error: unknown) {

        const errorObj = error as PossibleError;

        const errorData =
            errorObj?.data ||
            errorObj?.error ||
            error;

        if (errorData) {
            try {
                if (typeof errorData === "object" && !Array.isArray(errorData) && errorData !== null) {
                    Object.keys(errorData).forEach((key) => {
                        const messages = (errorData as Record<string, unknown>)[key];
                        if (Array.isArray(messages)) {
                            messages.forEach((message) => {
                                if (typeof message === "string") {
                                    toast.error(`${key}: ${message}`);
                                } else {
                                    toast.error(`${key}: An error occurred`);
                                }
                            });
                        } else if (typeof messages === "string") {
                            toast.error(`${key}: ${messages}`);
                        } else {
                            toast.error(`${key}: An error occurred`);
                        }
                    });
                } else if (typeof errorData === "string") {
                    toast.error(errorData);
                } else {
                    toast.error("An error occurred while processing the request.");
                }
            } catch (err) {
                console.log(err)
                toast.error("Unknown error occurred.");
            }
        } else {
            toast.error("No error details available.");
        }
    }
}
