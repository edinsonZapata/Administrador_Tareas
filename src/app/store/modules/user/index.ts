import { Module } from "vuex";
import { RootState } from "@/app/store/root.models";
import mutations, { tasksMutationsTypes } from "./user.mutations";
import actions, { tasksActionsActionsTypes } from "./user.actions";
import { initialTasksState, TasksState } from './user.models';

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
