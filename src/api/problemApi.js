import { apiClient } from "./apiClient";

export const getProblem = () => {
  return apiClient("/api/problem");
};
