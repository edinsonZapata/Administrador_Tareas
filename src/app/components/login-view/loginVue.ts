import { Component, Prop } from "vue-property-decorator";
import { VueWizard } from "@/vue-wizard";
import $ from 'jquery'

@Component({
    name: 'login-view',
})

export default class LoginView extends VueWizard {
    @Prop() public readonly saludo!: string;

    public nombreVariable: string;

    constructor(){
        super();
        this.nombreVariable = "holaaa";
    }

    mounted(): void {
        console.log("montando componente")
    }

    /**
     * @description este componente se usa para actualizar la vista
     */
    actualizarVista() {
        console.log("actualizar vista");
    }
}
