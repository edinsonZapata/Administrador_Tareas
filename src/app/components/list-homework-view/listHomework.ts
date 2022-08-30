import { Component, Prop, Vue } from "vue-property-decorator";
import { VueWizard } from "@/vue-wizard";
import { store, storeTypes } from "@/app/store";
import modalsnewTask from "@/app/components/components-modals/modal-createHomework/newTaskmodal.vue";
import modalseditTask from "@/app/components/components-modals/editTask-modal/editTaskmodal.vue";
import $ from 'jquery';
const _ = require("lodash");

@Component({
    name: 'listHomework',
    components: {modalsnewTask, modalseditTask },
})

export default class ListHomework extends VueWizard {

    @Prop() readonly elementId!: string;
    @Prop() readonly bvEvent!: string;

    public openModalCreateHomework: boolean;
    public openModalEditHomework: boolean = false;
    public openModalDeleteHomework: boolean = false;
    public EventBus: Vue = new Vue();
    public tasks: any[] = []

    constructor(){
        super();
        this.openModalCreateHomework = true;
    }

    async mounted(): Promise<any> {
        await store.dispatch(storeTypes.tasks.actions.getAllTasks())
        .then((tasks: any) => {
            if(store.state.tasks){
                this.tasks = store.state.tasks?.tasks;
            }
        })
    }

    async showModal(){
        const modalCreateHomework =  this.openModalCreateHomework.valueOf();

        await this.$store.commit(`showModalWindowCreateHomework`)
       
        this.$root.$emit('bv::show::modal','modalCreateHomework', '#btnShowModalCreateHomework' )

            this.openModalCreateHomework = true
          
            console.log('Modal is about to be shown', this.openModalCreateHomework)
    }   

    showModalWindowEditHomework(){
        this.openModalEditHomework = !this.openModalEditHomework;
    }

    showModalWindowDeleteHomework(){
        this.openModalDeleteHomework = !this.openModalDeleteHomework;
    }
}