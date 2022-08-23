import Vue from "vue";
import VueRouter from "vue-router";


const AppLogin = () => import("../components/login-view/LoginVue.vue");

const AppRegister = () => import("../components/register-view/RegisterVue.vue");

const AdminMain = () => import("../components/home-page/HomePage.vue");

const settingPage = () => import("../components/Settings/settingPage.vue");

const AdminList = () => import("../components/list-homework-view/ListHomework.vue");

const Adminrecord = () => import("../components/record-Page/RecordPage.vue");

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
    name:"admin",
    component: AdminList
},
{
    path:"/setting",
    name:"setting",
    component:settingPage
},
{
    path:"/records",
    name:"record",
    component:Adminrecord
}
] 

const router = new VueRouter({mode: "history", routes});

export default router;