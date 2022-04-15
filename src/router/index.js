import VueRouter from "vue-router";
import LoginPage from "../components/loginPage/LoginPage"
import ProfilPage from "../components/profilPage/ProfilPage"
import PageNotFound from "../components/PageNotFound"

const routes = [
    { path: "/", component: LoginPage },
    { path: "/profil", component: ProfilPage },
    { path: "*", component: PageNotFound },
];

const router = new VueRouter({
    mode: "history",
    routes
});

export default router;
