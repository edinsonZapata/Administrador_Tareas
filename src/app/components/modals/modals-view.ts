import { Component, Prop } from "vue-property-decorator";
import { VueWizard } from "@/vue-wizard";
import { store, storeTypes } from "@/app/store";
import listHomework from "../list-homework-view/listHomework";
import { ref } from 'vue'


@Component({
    name:'modals',
})

export default class modals extends VueWizard{

    
    @Prop() readonly elementId!: string;
    @Prop({default: true})readonly autoDisable!:boolean;
    @Prop() userId!: string;
    @Prop() readonly parentElementId!: string;
 
    public  openModalCreateHomework: boolean = false;
    public openModalEditHomework: boolean = false;

    disable() {
        if (this.autoDisable) {
            $('#' + this.elementId).modal('hide');
        } else {
            this.elementDisableEnable('#' + this.elementId, '#' +  this.parentElementId)
        }
    }

    showModalWindowCreateHomework(){
        this.$emit('openModalCreateHomework')
        this.openModalCreateHomework = !this.openModalCreateHomework;
    }

    showModalWindowEditHomework(){
        this.openModalEditHomework = !this.openModalEditHomework;
    }

    elementDisableEnable(elementId: string, enableId: any): void {
        let modal: any = $(elementId);
        modal.modal('hide');
        modal = $(enableId);
        modal.modal('show');
    }
}