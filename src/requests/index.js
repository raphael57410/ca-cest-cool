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
            store.state.allPostNumber = response.data.length;

            // storeDispatch("allPost", response.data.reverse())
            store.state.loader = false;
        })
        .catch((error) => {
            console.log("Error fetch", error);
        });
}

export const addPostRequest = async (event) => {

    const currentUser = localStorage.getItem('USER')
    const formData = new FormData(event.target);
    formData.append('user', currentUser);
    return await axios.post("http://localhost:3000/api/cacestcool/post/add", formData)
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

export const updateUserRequest = async (event, userId) => {
    const form = event.target;
    const formData = new FormData(form);
    return await axios.put(`http://localhost:3000/api/cacestcool/users/update/${userId}`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
        .then((response) => {
            console.log(response.data);
            localStorage.setItem('USER', JSON.stringify(response.data.userUpdated));
            return response;
        })
        .catch((error) => {
            return error.response;
        });
}

export const changePasswordRequest = async (user, oldPassword, newPassword, comfirmPassword) => {
    return await axios.patch("http://localhost:3000/api/cacestcool/users/password", { body: { user, oldPassword, newPassword, comfirmPassword } })
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error.response;
        });
}

export const addUserRequest = async (e) => {
    const form = e.target;
    const formData = new FormData(form);
    return await axios.post("http://localhost:3000/api/cacestcool/users/add", formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error.response;
        });
}

export const likePostRequest = async (postId, userId) => {
    return await axios.post(`http://localhost:3000/api/cacestcool/post/like/${postId}`, { userId })
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error.response;
        });
}