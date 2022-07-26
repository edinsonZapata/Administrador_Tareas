import { Component } from "vue-property-decorator";
import { VueWizard } from "@/vue-wizard";
import LoginView from "@/app/components/login-view/LoginVue.vue"

@Component({
    name: 'app',
    components: {
        LoginView
    }
})
export default class App extends VueWizard {

}