import { apiClient } from "./apiClient";

export const getTestimonials = () => {
    return apiClient("/api/testimonials");
};
