import { apiClient } from "./apiClient";

export const getBenefits = () => {
    return apiClient("/api/benefits");
};
