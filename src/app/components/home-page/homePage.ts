import { Component, Prop } from "vue-property-decorator";
import { VueWizard } from "@/vue-wizard";
import $ from 'jquery';

@Component({
    name: 'home-page',
})


export default class HomePage extends VueWizard {

    public openModalCloseSesion: boolean = false;
    public editUser: boolean = false;

    showModalWindow(){
        this.openModalCloseSesion = !this.openModalCloseSesion;
    }

}