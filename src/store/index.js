import Vue from "vue"
import Vuex from "vuex"
import {
    loginRequest,
} from '@/requests';
import router from '@/router';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        loader: false,
        isConnected: false,
        loginMessage: "",
        currentUser: [],
    },
    getters: {
    },
    mutations: {
        // login
        async login(state, { email, password, }) {

            state.loader = true;
            //TODO: Voir si c'est la bonne façon de faire pour passer a true isConnected
            const response = await loginRequest(email, password);

            if (response)
                if (response.status === 200) {
                    state.isConnected = true
                    state.loader = false;
                    router.push('/profil');
                }
                else if (response.status === 404) state.loginMessage = response.data.message;
        },
    },
    actions: {
        login({ commit }, { email, password }) {
            commit("login", { email, password });
        },
    },
});

export default store;
