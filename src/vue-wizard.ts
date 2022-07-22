import { Vue } from 'vue-property-decorator';
import { AxiosInstance } from 'axios';

export class VueWizard extends Vue {
    $http!: AxiosInstance;
    $base!: string;
    $baseOrchestator!: string;
    $notification!: any;
    $message!: any;
    $form!: any;
}