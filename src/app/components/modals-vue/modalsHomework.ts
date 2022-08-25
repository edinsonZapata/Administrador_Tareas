import { Component, Prop } from "vue-property-decorator";
import { VueWizard } from "@/vue-wizard";
import { store, storeTypes } from "@/app/store";
import { ref } from 'vue';
import { tasks } from "@/app/store/modules/tasks";
import $ from 'jquery';


    defineProps({
        modelValue: String
      })                                                                                                                                                                                                                                                                                

    @Component({
        name: 'modals',
    })

export default class modals extends VueWizard {
    public openModalCreateHomework: boolean = false;
    public openModalEditHomework: boolean = false;
    public openModalDeleteHomework: boolean = false;
    public tasks: any[] = []

    

    async mounted(): Promise<any> {
        await store.dispatch(storeTypes.tasks.actions.postOneTask())
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