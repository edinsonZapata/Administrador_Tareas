import { Component, Prop } from "vue-property-decorator";
import { VueWizard } from "@/vue-wizard";
import {store, storeTypes} from "@/app/store"
import $ from 'jquery'
import { Users } from "@/app/models/interfaces/user";


const  _ = require('lodash');

@Component({
    name: 'register-view'
})


export default class RegisterView extends VueWizard {

    @Prop() public readonly saludo!: string;

    // public Users: any [] []
    

    // async mounted() : Promise<any>{
    //     store.dispatch(storeTypes.users.actions.registry( ))
    //     .then((users: any) =>{
    //         if(store.state.users){
    //             this.users = store.state.users?.users;
    //         }
    //     })
    // }


}



