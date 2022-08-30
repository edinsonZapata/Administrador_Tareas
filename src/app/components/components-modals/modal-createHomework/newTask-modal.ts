import { Component, Prop } from "vue-property-decorator";
import { VueWizard } from "@/vue-wizard";
import { store, storeTypes } from "@/app/store";
import { ref } from 'vue'


@Component({
    name:'modalsnewTask',   
})

export default class modalsnewTask extends VueWizard{

    
    @Prop() readonly elementId!: string;
    @Prop({default: true})readonly autoDisable!:boolean;
    @Prop() userId!: string;
    @Prop() readonly parentElementId!: string;
 
    public  openModalCreateHomework: boolean = false;
    

    showModalWindowCreateHomework(){     
        console.log(this.openModalCreateHomework);

        this.openModalCreateHomework = !this.openModalCreateHomework;
    }

}