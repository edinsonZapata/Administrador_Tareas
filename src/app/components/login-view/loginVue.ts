import { Component, Prop } from "vue-property-decorator";
import { VueWizard } from "@/vue-wizard";
import RegisterView from "@/app/components/register-view/RegisterVue.vue"
import {store, storeTypes} from "@/app/store"
import $ from 'jquery'

const  _ = require('lodash');

@Component({
    name: 'login-view',
})

export default class LoginView extends VueWizard {
    @Prop() public readonly saludo!: string;

    public nombreVariable: string;
    public email = "";
    public password = "";
    public isDisable = false;
    public isNoTopic = false;
    public isInvalid = false;
    public showPassword = false;

    constructor(){
        super();
        this.nombreVariable = "holaaa";
    }

    async mounted() {

        store.commit(storeTypes.users.mutations.loadUsersInfo());
        const userInfo = _.cloneDeep(store.state.users?.users);        
        this.email = userInfo && userInfo.username ? userInfo.username : '';
        this.password = userInfo && userInfo.password ? atob(userInfo.password): '';

        console.log(this.email, this.password);

        //this.remember = agentInfo && agentInfo.remember ? agentInfo.remember: false;
    }

    async loginSubmit(){
        console.log(this.email, this.password);
        store.dispatch(storeTypes.users.actions.login({email: this.email, password: this.password}))
        .catch(()=>{
            this.password = "";
            this.isInvalid = true
        });
    }

    /**
     * @description este componente se usa para actualizar la vista
     */
    actualizarVista() {
        console.log("actualizar vista");
    }

    get isLoading(): boolean {
        return store.state.users!.loading
    }

    onInvalidCredentialsChange(): void {
        if (this.isInvalid) {
            this.resetValidations();
        }
    }

    resetValidations() {
        this.isDisable = false;
        this.isNoTopic = false;
        this.isInvalid = false;
    }

    toggleShowPassword(){
        this.showPassword = !this.showPassword;
    }
}
