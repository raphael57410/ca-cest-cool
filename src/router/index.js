import VueRouter from "vue-router";
import LoginPage from "../components/LoginPage"
import PageNotFound from "../components/PageNotFound"

const routes = [
    { path: "/", component: LoginPage },
    { path: "*", component: PageNotFound },
];

const router = new VueRouter({
    mode: "history",
    routes
});

export default router;
