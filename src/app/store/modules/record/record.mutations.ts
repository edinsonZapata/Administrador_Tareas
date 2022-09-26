import { DefineTypes, DefineMutations } from "@/app/store/store.helper";
import { RootState } from "@/app/store/root.models";
import { RecordsState } from './record.models';
import { Records } from "@/app/models/interfaces/record";

export interface recordsMutations{
    setRecords: Records[]
}

export const recordMutationsTypes: DefineTypes<recordsMutations> = {
    setRecords: payload => ({type: "setRecords", payload})
}

const mutations: DefineMutations<recordsMutations, RecordsState, RootState> = {
    setRecords(state, {payload}){
        state.records = payload;
    },
}

export default mutations;