import { Module } from "vuex";
import { RootState } from "@/app/store/root.models";
import mutations, { recordMutationsTypes } from "./record.mutations";
import actions, { recordActionsActionsTypes } from "./record.actions";
import { initialRecordsState, RecordsState } from './record.models';

export const records: Module<RecordsState, RootState> = {
    namespaced: false,
    state: initialRecordsState,
    mutations: mutations,
    actions: actions
};

export const recordsTypes = {
    mutations: recordMutationsTypes,
    actions: recordActionsActionsTypes,
};
