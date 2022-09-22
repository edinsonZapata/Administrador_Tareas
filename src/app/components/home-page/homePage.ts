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
    public tasks: any[] = []

    async mounted(): Promise<any>{
        await store.dispatch(storeTypes.users.actions.getAllUsers())
        .then((users: any) => {
            if(store.state.users){
                this.users = store.state.users?.users;
            }
        })
    }

    async ultNotification(): Promise<any> {
        await store.dispatch(storeTypes.tasks.actions.getAllTasks())
        .then((tasks: any) => {
            if(store.state.tasks){
                this.tasks = store.state.tasks?.tasks;
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

