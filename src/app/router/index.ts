import Vue from "vue";
import VueRouter from "vue-router";


const AppLogin = () => import("../components/login-view/LoginVue.vue");

const AppRegister = () => import("../components/register-view/RegisterVue.vue");

const AdminMain = () => import("../components/home-page/HomePage.vue");

const settingPage = () => import("../components/Settings/settingPage.vue");

const AdminList = () => import("../components/list-homework-view/ListHomework.vue");

const Modals = () => import("../components/modals-vue/ModalsHomework.vue");

Vue.use(VueRouter);

const routes = [
{
    path:"/login",
    name:"login",
    component: AppLogin
},
{
    path:"/",
    name:"index",
    redirect:{name:"login"}

},
{
    path:"/register",
    name:"register",
    component:AppRegister
},
{
    path:"/app",
    name:"admin",
    component:AdminMain
},
{
    path:"/listhomework",
    name:"list",
    component: AdminList
},
{
    path:"/setting",
    name:"setting",
    component:settingPage
},
{
    path:"/modals",
    name:"modals",
    component:Modals 
}
] 

const router = new VueRouter({mode: "history", routes});

export default router;