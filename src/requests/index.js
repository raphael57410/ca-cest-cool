import axios from "axios";

export const loginRequest = async (email, password) => {
    return await axios.post("http://localhost:3000/api/cacestcool/users/login", { body: { email, password } })
        .then((response) => {
            localStorage.setItem('TOKEN', response.data.token);
            localStorage.setItem('USER', JSON.stringify(response.data.user[0]));
            return response;
        })
        .catch((error) => {
            return error.response;
        });
}