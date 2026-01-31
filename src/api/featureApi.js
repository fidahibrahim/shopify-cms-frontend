import { apiClient } from "./apiClient";

export const getFeatures = () => {
    return apiClient("/api/features");
};
