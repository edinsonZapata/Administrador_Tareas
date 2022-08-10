import { Component, Prop } from "vue-property-decorator";
import { VueWizard } from "@/vue-wizard";
import $ from 'jquery';

@Component({
    name: 'listHomework',
})

export default class ListHomework extends VueWizard {

    public openModalCreateHomework: boolean = false;

    showModalWindowCreateHomework(){
        this.openModalCreateHomework = !this.openModalCreateHomework;
    }

    public openModalEditHomework: boolean = false;

    showModalWindowEditHomework(){
        this.openModalEditHomework = !this.openModalEditHomework;
    }

    public openModalDeleteHomework: boolean = false;

    showModalWindowDeleteHomework(){
        this.openModalDeleteHomework = !this.openModalDeleteHomework;
    }
}