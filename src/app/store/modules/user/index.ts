import { Module } from "vuex";
import { RootState } from "@/app/store/root.models";
import mutations, { usersMutationsTypes } from "./user.mutations";
import actions, {usersActionsTypes}  from "./user.actions";
import { initialUsersState, UsersState } from './user.models';

export const users: Module<UsersState, RootState> = {
    namespaced: false,
    state: initialUsersState,
    mutations: mutations,
    actions: actions
};

export const registry: Module<UsersState, RootState> = {
    namespaced: false,
    state: initialUsersState,
    mutations: mutations,
    actions: actions
};


export const usersTypes = {
    mutations: usersMutationsTypes,
    actions: usersActionsTypes,
};
