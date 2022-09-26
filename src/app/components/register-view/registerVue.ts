import { Component, Prop } from "vue-property-decorator";
import { VueWizard } from "@/vue-wizard";
import {RootState, store, storeTypes} from "@/app/store";
import $, { parseJSON } from 'jquery';
import { Users, Registry } from "@/app/models/interfaces";
import { BASE_URL_MANAGER } from "@/config";
import Axios, { AxiosRequestConfig } from "axios";
import {first} from "rxjs/operators";
import Swal from "sweetalert2";
import { UserRole } from "@/app/enums";


const  _ = require('lodash');

@Component({
    name: 'register-view',
})


export default class RegisterView extends VueWizard {

    @Prop() public readonly saludo!: string;
    @Prop({default: 'None'}) readonly sourceReference!: string;

    public users: Registry;
    //public registry: Registry;
    public showPassword = false;
    public showConfirmationPassword = false;
    public loading: boolean;
    
    constructor(){
        super();
        this.users = _.cloneDeep(this.$store.state.users);
        //this.registry = _.cloneDeep(this.$store.state.registry);
        this.loading = false
    }

    isTypeDocument(): boolean {        
        return this.users.typeDocument.toString().length > 0
    }

    isPassword(): boolean{
        return this.users.password.toString().length > 0
    }

    get typeDocuments(){
        return{
            CC: "CC",
            CE: "CE",
            PA: "PA",
            TI: "TI",
            NIT: "NIT"
        }
    }

    equalPasswords() {
        const { password, confPassword } = this.users
        return !this.isPassword
            || confPassword.toString().length <= 0
            || password.toString() === confPassword.toString()
    }

     isValidPassword() {
        const passwordNumberEvaluation = new RegExp('\\d+')
        const passwordTextEvaluation = new RegExp('[a-zA-Z]+')
        // return this.isPassword
        //     ? passwordNumberEvaluation.test(this.users.password.toString()) &&
        //      passwordTextEvaluation.test(this.users.password.toString())
        // : true;
    }

    async register({state}:{commit: any, state: RootState},  _id: string){
        try {

            this.users.name = this.users.username.trim(),
            this.users.typeDocument = this.users.typeDocument.trim(),
            this.users.numberDocument = this.users.numberDocument.trim(),
            this.users.email = this.users.email.trim(),
            this.users.password = this.users.password.trim(),
            this.users.confPassword = this.users.confPassword.trim()
            const registryComplete = {data: {_id, ...state.users}}
            const usersData = await Axios.post(`${BASE_URL_MANAGER}/user`, registryComplete)
                                 
            if(!usersData){
                return Promise.reject('Error al completar el registro')
            }

        } catch (err) {
            return new Promise((resolve, reject) => reject(err));
        }
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

    async userRegistry() {
        await Swal.fire({
            title: '¿Se realizara el registro?',
            html: `<span>
                    Nombre: <b>${this.users.name}</b>
                   </span>
                   <br/>
                   <span>
                    Correo electrónico: <b>${this.users.email}</b>
                   </span>`,
            icon: 'success',
            heightAuto: false,
            reverseButtons: true,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirmar Registro',
            cancelButtonText: 'Cancelar'
        }).then((result): any => {    
            this.loading = true
            if (result.isConfirmed) {  
                    
                this.users.role =  UserRole.ADMIN
                this.users.password = this.users.confPassword          
                storeTypes.users.actions.registry(this.users)
                Axios.post(`${BASE_URL_MANAGER}/user`, this.users)

                return this.$router.push('./login')                                
            }
        }).finally(() => this.loading = false)
    }

    loadingComplet(){
        this.$router.push('./login')
    }

    toggleShowPassword(){        
        this.showPassword = !this.showPassword;
    }

    toggleShowConfirmationPassword(){
        this.showConfirmationPassword = !this.showConfirmationPassword;
    }
}

