import Vue from "vue";
import VueRouter from "vue-router";


const AppLogin = () => import("../components/login-view/LoginVue.vue");

const AppRegister = () => import("../components/register-view/RegisterVue.vue");

const AdminMain = () => import("../components/home-page/HomePage.vue");

const AdminList = () => import("../components/list-homework-view/ListHomework.vue");

const AdminCreate = () => import("../components/create-homework-view/CreateHomework.vue");


const AdminEdit = () => import("../components/edit-homework-view/EditHomework.vue");

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
    component: AdminList,
},
{
    path:"/createhomework",
    name:"admin",
    component: AdminCreate,
},
{
    path:"/edithomework",
    name:"admin",
    component: AdminEdit,
}
] 

const router = new VueRouter({mode: "history", routes});

export default router;