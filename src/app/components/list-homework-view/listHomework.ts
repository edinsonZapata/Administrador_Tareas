import { Component, Prop } from "vue-property-decorator";
import { VueWizard } from "@/vue-wizard";
import { store, storeTypes } from "@/app/store";
import $ from 'jquery';

@Component({
    name: 'listHomework',
})

export default class ListHomework extends VueWizard {
    public openModalCreateHomework: boolean = false;
    public openModalEditHomework: boolean = false;
    public openModalDeleteHomework: boolean = false;
    public tasks: any[] = []

    async mounted(): Promise<any> {
        await store.dispatch(storeTypes.tasks.actions.getAllTasks())
        .then((tasks: any) => {
            if(store.state.tasks){
                this.tasks = store.state.tasks?.tasks;
            }
        })
    }

    showModalWindowCreateHomework(){
        this.openModalCreateHomework = !this.openModalCreateHomework;
    }

    showModalWindowEditHomework(){
        this.openModalEditHomework = !this.openModalEditHomework;
    }

    showModalWindowDeleteHomework(){
        this.openModalDeleteHomework = !this.openModalDeleteHomework;
    }
}