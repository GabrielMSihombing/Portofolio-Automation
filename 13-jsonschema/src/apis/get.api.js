import axiosInstance from "../libs/axiosInstance.js";

export function get_single_user(id){
    return axiosInstance.get(`/api/users/${id}`)
}

export function get_all_user(){
    return axiosInstance.get(`/api/users/`)
}

