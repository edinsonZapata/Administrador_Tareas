import { Component, Prop } from "vue-property-decorator";
import { VueWizard } from "@/vue-wizard";
import { store, storeTypes } from "@/app/store";
import { ref } from 'vue'


@Component({
    name:'modalseditTask',   
})

export default class modalseditTask extends VueWizard{

    public openModalEditHomework: boolean = false;

    showModalWindowEditHomework(){
        this.openModalEditHomework = !this.openModalEditHomework;
    }

} 