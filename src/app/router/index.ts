import Vue from "vue";
import VueRouter from "vue-router";


const AppLogin = () => import("../components/login-view/LoginVue.vue");

const AppRegister = () => import("../components/register-view/RegisterVue.vue");

const homePage = () => import("../components/home-page/HomePage.vue");

const settingPage = () => import("../components/Settings/settingPage.vue");

const listHomework = () => import("../components/list-homework-view/ListHomework.vue");

const record = () => import("../components/record-Page/recordPage.vue");

const modals = () => import("../components/modals/modals-view.vue");


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
    path:"/homePage",
    name:"admin",
    component:homePage
},
{
    path:"/listHomework",
    name:"admin",
    component: listHomework
},
{
    path: "/record",
    name: "admin",
    component: record
},
{
    path:"/setting",
    name:"setting",
    component:settingPage
},
{
    path:"/models",
    name:"models",
    component:modals
}
] 

const router = new VueRouter({mode: "history", routes});

export default router;