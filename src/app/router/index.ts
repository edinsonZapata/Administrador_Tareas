import Vue from "vue";
import VueRouter from "vue-router";


const AppLogin = () => import("../components/login-view/LoginVue.vue");

const AppRegister = () => import("../components/register-view/RegisterVue.vue");

const AdminMain = () => import("../components/home-page/HomePage.vue");

<<<<<<< Updated upstream
const Adminrecord = () => import("../components/record-page/recordPage.vue");
=======
const Adminrecord = () => import("../components/record-Page/recordPage.vue");
>>>>>>> Stashed changes

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
    path:"/record",
    name:"admin",
    component:Adminrecord
}
,{
    path:"/record",
    name:"admin",
    component:Adminrecord
}
] 


const router = new VueRouter({mode: "history", routes});

export default router;