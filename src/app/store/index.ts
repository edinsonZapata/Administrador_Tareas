import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState } from "./root.models";
import {tasks, tasksTypes} from './modules/tasks';

Vue.use(Vuex);

const rootStore: StoreOptions<RootState> = {
    strict: true,
    modules: {
        tasks
    },
};

export const rootTypes = {};

export const storeTypes = {
    root: rootTypes,
    tasks: tasksTypes
};

export * from "./root.models";
export const store = new Vuex.Store<RootState>(rootStore);