import { Module } from "vuex";
import { RootState } from "@/app/store/root.models";
import mutations, { tasksMutationsTypes } from "./tasks.mutations";
import actions, { tasksActionsActionsTypes } from "./tasks.actions";
import { initialTasksState, TasksState } from './tasks.models';

export const tasks: Module<TasksState, RootState> = {
    namespaced: false,
    state: initialTasksState,
    mutations: mutations,
    actions: actions
};

export const tasksTypes = {
    mutations: tasksMutationsTypes,
    actions: tasksActionsActionsTypes,
};
