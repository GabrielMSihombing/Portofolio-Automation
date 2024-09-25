import axiosInstance from "../libs/axiosInstance.js";

export const update_User_Schema = (id, payloadupdate) => {
    return axiosInstance.put(`/api/users/${id}`, payloadupdate);
  };
  