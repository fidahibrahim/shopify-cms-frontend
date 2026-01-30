import { apiClient } from "./apiClient";

export const getHero = () => {
    return apiClient("/api/hero");
};
