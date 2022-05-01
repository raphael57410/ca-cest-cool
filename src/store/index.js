import Vue from "vue"
import Vuex from "vuex"
import {
    loginRequest,
    addPostRequest,
    deletePostRequest,
    addComentRequest,
    updateUserRequest,
    changePasswordRequest,
    addUserRequest,
} from '@/requests';
import router from '@/router';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        allPost: [],
        loader: false,
        isConnected: localStorage.getItem('isConnected') ? localStorage.getItem('isConnected') : false,
        loginMessage: "",
        message: "",
        currentUser: [],
        showDetailUser: false,
    },
    getters: {
        isConnected(state) {
            return state.isConnected;
        },

        allPost(state) {
            return state.allPost;
        },
        currentUser(state) {
            return state.currentUser;
        },
        showDetailUser(state) {
            return state.showDetailUser;
        }
    },
    mutations: {
        // all Post
        initData(state, post) {
            state.allPost = post;
        },
        // init currentUser
        initCurrentUser(state) {
            state.currentUser = JSON.parse(localStorage.getItem('USER'));
        },
        // login
        async login(state, { email, password, }) {

            state.loader = true;
            //TODO: Voir si c'est la bonne façon de faire pour passer a true isConnected
            const response = await loginRequest(email, password);

            if (response)
                if (response.status === 200) {
                    state.isConnected = true
                    state.loader = false;
                    state.currentUser = response.data.user;
                    localStorage.setItem('isConnected', state.isConnected)
                    router.push('/profil');
                }
                else if (response.status === 404) state.loginMessage = response.data.message;
        },
        // add Post
        async addPost(state, { titre, description }) {

            state.loader = true;
            const response = await addPostRequest(titre, description);
            if (response.status === 201) {
                state.loader = false;
            }
        },
        // delete post
        deletePost(state, postId) {
            state.allPost.splice(state.allPost.findIndex(post => post._id === postId), 1);
            deletePostRequest(postId);
        },

        // add Coment
        async addComent(state, { coment, postId }) {
            const currentUser = state.currentUser;
            const response = await addComentRequest(coment, currentUser, postId);
            currentUser.posts.map(test => {
                console.log(test[0], postId);
                if (test[0]._id === postId) console.log('je push le commentaire!');

            }
            )
            console.log(response);
        },

        // update User
        async updateUser(state, event) {
            const userUpdated = await updateUserRequest(event, state.currentUser._id);
            console.log(userUpdated.data.userUpdate);
            state.currentUser = userUpdated.data.userUpdate
        },

        // change password
        async changePassWord(state, { user, oldPassword, newPassword, comfirmPassword }) {
            console.log(state);
            const response = await changePasswordRequest(user, oldPassword, newPassword, comfirmPassword);
            console.log(response);
            if (response.status === 200) state.message = response.data
            if (response.status === 404) state.message = response.data

            setTimeout(() => {
                state.message = '';
            }, 2000);
        },
        // add User
        async addUser(state, newUser, lastname,
            firstname,
            email,
            password,
            profilPicture,
            bio,) {
            const user = await addUserRequest(newUser, lastname,
                firstname,
                email,
                password,
                profilPicture,
                bio);
            console.log(user);
        },
    },
    actions: {
        // ### LOGIN ###
        login({ commit }, { email, password }) {
            commit("login", { email, password });
        },
        // ### END LOGIN ###

        // ### USER ###
        addUser({ commit }, newUser, lastname,
            firstname,
            email,
            password,
            profilPicture,
            bio,) {
            console.log(newUser);
            commit("addUser", newUser, lastname,
                firstname,
                email,
                password,
                profilPicture,
                bio);
        },

        updateUser({ commit }, event) {
            commit("updateUser", event);
            commit('initCurrentUser');
        },
        changePassWord({ commit }, { user, oldPassword, newPassword, comfirmPassword }) {
            commit("changePassWord", { user, oldPassword, newPassword, comfirmPassword });
        },
        // ### END USER ###

        // ### POST ###
        allPost({ commit }, initialTodos) {
            commit("initData", initialTodos ? initialTodos : []);
        },

        addPost({ commit }, { titre, description }) {
            commit("addPost", { titre, description });
        },

        deletePost({ commit }, postId) {
            commit("deletePost", postId);
        },
        // ### END POST ###

        // ### COMENT ###
        addComent({ commit }, { coment, postId }) {
            commit("addComent", { coment, postId });
        },
        // ### END COMENT ###

        initCurrentUser({ commit }) {
            commit("initCurrentUser");
        },
    },
});

export default store;
