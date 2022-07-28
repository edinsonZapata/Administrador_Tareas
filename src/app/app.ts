import { Component, Vue } from "vue-property-decorator";
import { VueWizard } from "@/vue-wizard";
import LoginView from "@/app/components/login-view/LoginVue.vue";
import RegisterView from "@/app/components/register-view/RegisterVue.vue"


@Component({
    name: 'app',
    components: {
        LoginView,
        RegisterView
    }
})
export default class App extends VueWizard {
}
