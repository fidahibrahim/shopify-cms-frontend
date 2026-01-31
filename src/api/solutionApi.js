import { apiClient } from "./apiClient";

export const getSolution = () => {
  return apiClient("/api/solution");
};
