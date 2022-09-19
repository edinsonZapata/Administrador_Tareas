import { Component, Prop } from "vue-property-decorator";
import { VueWizard } from "@/vue-wizard";
import { store, storeTypes } from "@/app/store";
import $ from 'jquery';
import { Users } from "@/app/models/interfaces";


@Component({
    name: 'home-page',
})


export default class modaleditUsers extends VueWizard {

    @Prop() userId! : string;
    @Prop() readonly user! : Users;

    public editUser: boolean = false;
    public users: any[] = [];
    public newPassword = '';
    public newName = '';

    showModalWindowEditUser(){        
        this.editUser = !this.editUser;
    }




    get submitUser(): string {
          const  newName = 
                this.$root.$emit("modalEdituser", this.newName)            
            return `${this.user.name}`;
    }


    async editUse(_id : any){

        
        console.log(_id);

        this.editUser = !this.editUser;
    }


    async editUserName( value: any){
        const userId = value.userId
        console.log(userId);
        await store.dispatch(storeTypes.users.actions.updateNameUser({id: userId, name: value.newName }))
        .then(() =>{
            this.$notification.success({
                placement: "bottomRight",
                message: "Datos modificados con exito",
                description: "El nombre del usuario se modifico exitosamente"
            });
        });
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


}
