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

export const fetchAllPostRequest = async (storeDispatch) => {
    const TOKEN = localStorage.getItem('TOKEN');

    axios.get("http://localhost:3000/api/cacestcool/post/all", { headers: { Authorization: `Bearer ${TOKEN}` } })
        .then((response) => {
            storeDispatch("allPost", response.data.reverse());
        })
        .catch((error) => {
            console.log("Error fetch", error);
        });
}

export const addPostRequest = async (title, description) => {
    const currentUser = JSON.parse(localStorage.getItem('USER'));
    return await axios.post("http://localhost:3000/api/cacestcool/post/add", { body: { title, description, currentUser } })
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error.response;
        });
}