import { apiClient } from "./apiClient";

export const getFaqs = () => {
    return apiClient("/api/faqs");
};
