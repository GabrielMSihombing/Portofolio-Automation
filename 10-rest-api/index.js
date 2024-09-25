import axios from "axios";

const getSingleUsers = async() => {
      
    try {
       const response = await axios.get(`https://reqres.in/api/users/2`);
       console.log(response.data.data);
    } catch (error) {
       console.log(error);
    }
};



const payloadUser = {
    "name": "Gabriel",
    "job": "Chef"
};
const addNewUsers = async(user) => {
    try {
      const response = await axios.post(`https://reqres.in/api/users`,user); 
      console.log(response);
    } catch (error) {
        console.log(error);
    }
};



const payloadUpdate = {
    "name" : "Kentung"
}
const updateUsersById = async (id, payload) =>{
    try {
        const response = await axios.put(`https://reqres.in/api/users/${id}`,payload);
        console.log(response);
    } catch (error) {
        console.log(error);
    }

};


const deleteUserById = async (id) => {
    try {
        const response = await axios.delete(`https://reqres.in/api/users/${id}`);
        console.log(response);
    } catch (error) {
        console.log(error);
    }
};

getSingleUsers();
addNewUsers(payloadUser);
updateUsersById(2, payloadUpdate);
deleteUserById(2);