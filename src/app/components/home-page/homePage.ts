import { Component, Prop } from "vue-property-decorator";
import { VueWizard } from "@/vue-wizard";
import { store, storeTypes } from "@/app/store";
import $ from 'jquery';
import { Registry, Users } from "@/app/models/interfaces";
import modaleditUsers from "@/app/components/components-modals/editUser-modal/editUsermodal.vue";

@Component({
    name: 'home-page',
    components: { modaleditUsers }
})

export default class HomePage extends VueWizard {

    @Prop() userId! : string;
    @Prop() readonly user! : Users;
    @Prop() readonly registrys! : Registry; 

    public openModalCloseSesion: boolean = false;   
    // public users: any[] = [];
    public registry: any[] = [];
    public tasks: any[] = [];
    public newPassword = '';
    public newName = '';
    public nameNav = '';

    // get user(): string{
    //     const fullname = this.registry.      
    //     return fullname
    // }

    infoUsur(user: any){
        console.log("Hola");
        const nameNav = user.registry
        console.log(nameNav);
        return `${nameNav}`
    }

    get infoLoginUser(): Users | null{
        return store.state.users!.firstLoginUser;
    }

    async editUse(_id : any){
        console.log(_id);
        // this.$root.$on("modalEdituser", data => {
        //     this.user.name = data
        // } )
    }

    async mounted(): Promise<any>{              

        await store.dispatch(storeTypes.registry.actions.getAllUsers())
        .then((registry: any) => {      
            if(store.state.registry){
                this.registry = store.state.registry?.registry;
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

    async editUserPassword (values: any){
        const userId = values.userId
        await store.dispatch(storeTypes.users.actions.updatePassword({id: userId, password: values.newPassword}))
        .then(() =>{
            this.$notification.success({
                placement: "bottomRight",
                message: "Datos modificados con exito",
                description: "La contraseña del usuario se modifico exitosamente"
            });
        });
    }

    showModalWindowCloseSesion(){
        this.openModalCloseSesion = !this.openModalCloseSesion;
    }

}

