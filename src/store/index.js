import Vue from "vue"
import Vuex from "vuex"
import {
    loginRequest,
    addPostRequest,
    deletePostRequest
} from '@/requests';
import router from '@/router';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        allPost: [],
        loader: false,
        isConnected: localStorage.getItem('isConnected') ? localStorage.getItem('isConnected') : false,
        loginMessage: "",
        currentUser: localStorage.getItem('USER') ? JSON.parse(localStorage.getItem('USER')) : [],
    },
    getters: {
    },
    mutations: {
        // all Post
        initData(state, post) {
            state.allPost = post;
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
                router.push('/profil');
            }
            console.log(response);
        },
        // delete post
        deletePost(state, postId) {
            state.allPost.splice(state.allPost.findIndex(post => post._id === postId), 1);
            deletePostRequest(postId);
        },
    },
    actions: {
        allPost({ commit }, initialTodos) {
            commit("initData", initialTodos ? initialTodos : []);
        },

        login({ commit }, { email, password }) {
            commit("login", { email, password });
        },

        addPost({ commit }, { titre, description }) {
            commit("addPost", { titre, description });
        },
        deletePost({ commit }, postId) {
            commit("deletePost", postId);
        },
    },
});

export default store;
