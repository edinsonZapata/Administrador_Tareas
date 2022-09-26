import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState } from "./root.models";
import { tasks, tasksTypes } from './modules/tasks';
import { users, registry, usersTypes } from './modules/user';
import { records, recordsTypes } from "./modules/record";

Vue.use(Vuex);

const rootStore: StoreOptions<RootState> = {
    strict: true,
    modules: {
        tasks,
        users,
        registry,
        records
    },
};

export const rootTypes = {};

export const storeTypes = {
    root: rootTypes,
    tasks: tasksTypes,
    users: usersTypes,
    registry: usersTypes,
    records: recordsTypes
};

export * from "./root.models";
export const store = new Vuex.Store<RootState>(rootStore);
