import { apiClient } from "./apiClient";

export const getHowItWorks = () => {
    return apiClient("/api/how-it-works");
};
