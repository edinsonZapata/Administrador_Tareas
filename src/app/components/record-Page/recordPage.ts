import { Component, Prop } from "vue-property-decorator";
import { VueWizard } from "@/vue-wizard";
import { store, storeTypes } from "@/app/store";
import $ from 'jquery';

@Component({
    name: 'record-page',
})

export default class RecordPage extends VueWizard {
    public openModalRefreshRecord: boolean = false;
    public openModalCloseSesion: boolean = false;
    showModalWindowCloseSesion(){
        this.openModalCloseSesion = !this.openModalCloseSesion;
    }

    showModalWindowRefreshRecord(){
        console.log("prueba")
        this.openModalRefreshRecord = !this.openModalRefreshRecord;
    }
   
    public records: any[] = []

    async mounted(): Promise<any> {
        await store.dispatch(storeTypes.record.actions.getAllRecords())
        .then((records: any) => {
            if(store.state.record){
                this.records = store.state.record?.records;
            }
        })
    }
}