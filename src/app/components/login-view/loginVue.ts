import { Component, Prop } from "vue-property-decorator";
import { VueWizard } from "@/vue-wizard";
import RegisterView from "@/app/components/register-view/RegisterVue.vue"
import {store, storeTypes} from "@/app/store"
import $, { error } from 'jquery'
import  Axios  from "axios";
import { BASE_URL_MANAGER } from "@/config";
import { Users } from "@/app/models/interfaces";
import Swal from "sweetalert2";
import { users } from "@/app/store/modules/user";

const  _ = require('lodash');

@Component({
    name: 'login-view'
})

export default class LoginView extends VueWizard {
    @Prop() public readonly saludo!: string;

    public nombreVariable: string;
    public email = "";
    public password = "";
    public isDisable = false;
    public isInvalid = false;
    public showPassword = false;
    public remember = false;

    constructor(){
        super();
        this.nombreVariable = "holaaa";
    }

    async mounted() {

        store.commit(storeTypes.users.mutations.loadUsersInfo());
        const userInfo = _.cloneDeep(store.state.registry?.registry);        
        this.email = userInfo && userInfo.username ? userInfo.username : '';
        this.password = userInfo && userInfo.password ? atob(userInfo.password): '';
        this.remember = userInfo && userInfo.remember ? userInfo.remember: false;
        console.log(this.email, this.password);
    }

    fireResultAlert(title: string, icon: "success" | "error" | "warning" | "info" | "question" | undefined, html: string) {
        return Swal.fire({
            title,
            heightAuto: false,
            icon,
            html,
            showCloseButton: true,
            showCancelButton: false,
            focusConfirm: false
        });
    }

    userSubmit(): void {
        store.dispatch(storeTypes.users.actions.login({ email: this.email, password: this.password, remember: this.remember}))     
            .then( response =>{
                console.log(response);            
                this.$router.push('homePage');
            })
            .catch(async(error) => {
                this.password = "";
                this.isInvalid = true;                
            });
    }

    async loginSubmit(){

        const userInfo = {
            email: this.email,
            password: this.password
        } 
        console.log(userInfo);
        await Axios.post(`${BASE_URL_MANAGER}/user/login`, userInfo)
        .then(response  =>{
            
            console.log(response);
        })
        .catch(async (error)=>{
            await this.fireResultAlert(
                "¡Error al iniciar sesion!",
                "error",
                error && error.response && error.response.data && error.response.data.error
                    ? `No se ha podido iniciar sesion, razón: <b>${error.response.data.error}</b>`
                    : `Error al iniciar sesion intente nuevamente`
            )
        });
    }

    
    home(){
        this.$router.push('/homePage');
    }


    get isLoading(): boolean {
        return store.state.users!.loading  
    }

    onInvalidCredentialsChange():void {
        if (this.isInvalid) {
            this.resetValidations();
        }
    }

    resetValidations() {
        this.isDisable = false;     
        this.isInvalid = false;
    }

    toggleShowPassword(){
        this.showPassword = !this.showPassword;
    }
}
