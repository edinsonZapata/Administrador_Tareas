import { DefineTypes, DefineMutations } from "@/app/store/store.helper";
import { RootState } from "@/app/store/root.models";
import { UsersState, savedCredentials } from './user.models';
import { Users } from "@/app/models/interfaces/user";

export interface UsersMutations{
    setUsers: Users[];
    loadUsersInfo: undefined;
}

export const usersMutationsTypes: DefineTypes<UsersMutations> = {
    setUsers: payload => ({type: "setUsers", payload}),
    loadUsersInfo: () => ({type: "loadUsersInfo"})
}

const mutations: DefineMutations<UsersMutations, UsersState, RootState> = {
    setUsers(state, {payload}){
        state.users = payload;
    },
    loadUsersInfo(state, {payload}){
        state.users = JSON.parse(localStorage.getItem(savedCredentials) as any);
    }
}

export default mutations;