import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState } from "./root.models";
import {tasks, tasksTypes} from './modules/tasks';
import {records, recordsTypes} from './modules/record';

Vue.use(Vuex);

const rootStore: StoreOptions<RootState> = {
    strict: true,
    modules: {
        tasks,
        records
    },
};

export const rootTypes = {};

export const storeTypes = {
    root: rootTypes,
    tasks: tasksTypes,
    record: recordsTypes,
};

export * from "./root.models";
export const store = new Vuex.Store<RootState>(rootStore);