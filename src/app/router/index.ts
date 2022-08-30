import Vue from "vue";
import VueRouter from "vue-router";


const AppLogin = () => import("../components/login-view/LoginVue.vue");

const AppRegister = () => import("../components/register-view/RegisterVue.vue");

const homePage = () => import("../components/home-page/HomePage.vue");

const settingPage = () => import("../components/Settings/settingPage.vue");

const listHomework = () => import("../components/list-homework-view/ListHomework.vue");

const record = () => import("../components/record-Page/recordPage.vue");


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
    name:"homePage",
    component:homePage
},
{
    path:"/listHomework",
    name:"listHomework",
    component: listHomework
},
{
    path: "/record",
    name: "record",
    component: record
},
{
    path:"/setting",
    name:"setting",
    component:settingPage
}
] 

const router = new VueRouter({mode: "history", routes});

export default router;