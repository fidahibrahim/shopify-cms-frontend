import { apiClient } from "./apiClient";

export const getFooter = () => {
    return apiClient("/api/footer");
};
