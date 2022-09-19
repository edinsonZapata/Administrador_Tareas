import { Component, Prop } from "vue-property-decorator";
import { VueWizard } from "@/vue-wizard";
import { store, storeTypes } from "@/app/store";
import $ from 'jquery';
import axios from "axios";
import { BASE_URL_MANAGER } from "@/config";
import { StatusTask } from "@/app/enums";
@Component({
    name: 'record-page',
})

export default class RecordPage extends VueWizard {
    public openModalRefreshRecord: boolean = false;
    public openModalCloseSesion: boolean = false;
    public tasks: any [] = [];


    showModalWindowCloseSesion(){
        this.openModalCloseSesion = !this.openModalCloseSesion;
    }

    showModalWindowRefreshRecord(){
        console.log("prueba")
        this.openModalRefreshRecord = !this.openModalRefreshRecord;
    }
   
    public records: any[] = []

    async mounted(): Promise<any> {
        const status = "RESOLVED"

        await store.dispatch(storeTypes.records.actions.getAllRecords(status))
        .then((records: any) => {
            if(store.state.records){
                this.records = store.state.records?.records;
            }
        })
    }
}