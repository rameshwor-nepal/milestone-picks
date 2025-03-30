import { toast } from "react-toastify";

export class ToastError {
    static serialize(error: any) {
        console.log("Full error object:", JSON.stringify(error, null, 2));

        const errorData = error?.data || error?.error || error;

        if (errorData) {
            try {
                if (typeof errorData === "object" && !Array.isArray(errorData)) {
                    Object.keys(errorData).forEach((key) => {
                        const messages = errorData[key];
                        if (Array.isArray(messages)) {
                            messages.forEach((message: string) => {
                                toast.error(`${key}: ${message}`);
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
                console.log("Exception caught:", err);
                toast.error("Unknown error occurred.");
            }
        } else {
            toast.error("No error details available.");
        }
    }
}