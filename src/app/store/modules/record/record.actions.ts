import { RootState } from "@/app/store/root.models";
import { DefineTypes, DefineActions } from "@/app/store/store.helper";
import { RecordsState } from './record.models';
import { recordMutationsTypes } from "./record.mutations";
import { BASE_URL_MANAGER } from "@/config";
import Axios, { AxiosRequestConfig } from "axios";
import { StatusTask } from "@/app/enums";
import { StatusTaskInfo } from "@/app/interfaces/filterStatusTask";

export interface RecordsActions{
    getAllRecords: string,
    getOneRecords: string
}

export const recordActionsActionsTypes: DefineTypes<RecordsActions> = {
    getAllRecords: payload => ({type: "getAllRecords", payload}),
    getOneRecords: payload => ({type: "getOneRecords", payload})
}

const actions: DefineActions<RecordsActions, RecordsState, RootState> ={
    async getAllRecords({commit}, {payload}){
        try{           
            const statusRecord = "RESOLVED"
          
            const url = `${BASE_URL_MANAGER}/tasks/consultAllRecord/${statusRecord}`;
           
            const res = await Axios.get(url);           
            console.log(res);
            if(res.data){
                commit(recordMutationsTypes.setRecords(res.data))
            }

        }catch(err){
            return new Promise((resolve,reject) => reject(err));
        }
    },
    async getOneRecords({commit, state}, {payload}){
        try{
            console.log("ejecutando");
        }catch(err){
            return new Promise((resolve,reject) => reject(err));
        }

    }
}

export default actions;