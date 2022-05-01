import VueRouter from "vue-router";
import LoginPage from "../components/loginPage/LoginPage"
import ProfilPage from "../components/profilPage/ProfilPage"
import postFormPage from "../components/postFormPage/PostFormPage"
import detailUserPage from "../components/detailUserPage/DetailUserPage"
import PageNotFound from "../components/PageNotFound"
import RegisterPage from "../components/registerPage/RegisterPage"
import store from '@/store'

const routes = [
    { path: "/", component: LoginPage, name: 'Login' },
    {
        path: "/profil", component: ProfilPage, meta: {
            requiresAuth: true
        }
    },
    { path: "/inscription", component: RegisterPage },
    { path: "/detail", component: detailUserPage },
    { path: "/formulaire", component: postFormPage },
    { path: "*", component: PageNotFound },
];

const router = new VueRouter({
    mode: "history",
    routes
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        if (!store.getters.isConnected) {
            next({ name: 'Login' })
        } else {
            next() // go to wherever I'm going
        }
    } else {
        next() // does not require auth, make sure to always call next()!
    }
})

export default router;
