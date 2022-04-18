import axios from "axios";
import store from '@/store';


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

export const fetchAllPostRequest = async () => {
    const TOKEN = localStorage.getItem('TOKEN');
    store.state.loader = true;
    axios.get("http://localhost:3000/api/cacestcool/post/all", { headers: { Authorization: `Bearer ${TOKEN}` } })
        .then((response) => {
            store.state.allPost = response.data.reverse();
            // storeDispatch("allPost", response.data.reverse())
            store.state.loader = false;
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

export const deletePostRequest = (postId) => {
    const TOKEN = localStorage.getItem('TOKEN');

    axios.delete(`http://localhost:3000/api/cacestcool/post/delete/${postId}`, { headers: { Authorization: `Bearer ${TOKEN}` } })
        .then((response) => {
            console.log(response);
            return response.data;
        })
        .catch((error) => {
            console.log("Error fetch", error);
        });
}

export const addComentRequest = async (coment, currentUser, postId) => {
    return await axios.post("http://localhost:3000/api/cacestcool/coment/add", { body: { coment, currentUser, postId } })
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error.response;
        });
}