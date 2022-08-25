import { Component, Prop, Vue } from "vue-property-decorator";
import { VueWizard } from "@/vue-wizard";
import { store, storeTypes } from "@/app/store";
import { ref } from 'vue'
import modals from "../modals/modals-view.vue";
import $ from 'jquery';

const _ = require("lodash");

@Component({
    name: 'listHomework',
    components: { modals},
    methods: {showModalWindowCreateHomework(openModalCreateHomework){
        console.log('Prueba');
    }}
})



export default class ListHomework extends VueWizard {

    @Prop() readonly elementId!: string;

    public openModalCreateHomework: boolean = false;
    public openModalEditHomework: boolean = false;
    public openModalDeleteHomework: boolean = false;
    public EventBus: Vue = new Vue();
    public tasks: any[] = []
    public modalVisible = false
    async mounted(): Promise<any> {
        await store.dispatch(storeTypes.tasks.actions.getAllTasks())
        .then((tasks: any) => {
            if(store.state.tasks){
                this.tasks = store.state.tasks?.tasks;
            }
        })
    }

    showModalWindowCreateHomework(){
        console.log('object');
        this.openModalCreateHomework = true
        this.$emit('openModalCreateHomework')

    }

    showModalWindowEditHomework(){
        this.openModalEditHomework = !this.openModalEditHomework;
    }

    showModalWindowDeleteHomework(){
        this.openModalDeleteHomework = !this.openModalDeleteHomework;
    }


}
