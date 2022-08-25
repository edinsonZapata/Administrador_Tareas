import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState } from "./root.models";
import {tasks, tasksTypes} from './modules/tasks';
import {users, usersTypes} from './modules/user';

Vue.use(Vuex);

const rootStore: StoreOptions<RootState> = {
    strict: true,
    modules: {
        tasks,
        users
    },
};

export const rootTypes = {};

export const storeTypes = {
    root: rootTypes,
    tasks: tasksTypes,
    users: usersTypes,
};

export * from "./root.models";
export const store = new Vuex.Store<RootState>(rootStore);
