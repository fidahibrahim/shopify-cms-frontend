import { apiClient } from "./apiClient";

export const getPricing = () => {
    return apiClient("/api/pricing");
};
