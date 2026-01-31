import { apiClient } from "./apiClient";

export const getFinalCTA = () => {
    return apiClient("/api/final-cta");
};
