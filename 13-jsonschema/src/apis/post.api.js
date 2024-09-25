import axiosInstance from "../libs/axiosInstance.js";

export const createUser = (userData) => {
    return axiosInstance.post(`/api/users`, userData);
  };
  