import { Component, Prop } from "vue-property-decorator";
import { VueWizard } from "@/vue-wizard";
import { store, storeTypes } from "@/app/store";
import $ from 'jquery';


@Component({
    name: 'home-page',
})


export default class HomePage extends VueWizard {

    public openModalCloseSesion: boolean = false;
    public editUser: boolean = false;
    public users: any[] = [];

    async mounted(): Promise<any>{
        await store.dispatch(storeTypes.users.actions.getAllUsers())
        .then((users: any) =>{
            if(store.state.users){
                this.users = store.state.users?.users;
            }
        })
    }

    showModalWindowCloseSesion(){
        this.openModalCloseSesion = !this.openModalCloseSesion;
    }

    showModalWindowEditUser(){
        this.editUser = !this.editUser;
    }
}

