import Vue from "vue"
import Vuex from "vuex"
import {
    loginRequest,
    addPostRequest
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
            console.log('add Post' + titre, description);
            const response = await addPostRequest(titre, description);
            console.log(response);
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
    },
});

export default store;
