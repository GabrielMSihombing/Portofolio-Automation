import axiosInstance from "../libs/axiosInstance.js";

export const delete_User_Schema = (id) => {
    return axiosInstance.delete(`/api/users/${id}`);
  };
  