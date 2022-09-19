import { DefineTypes, DefineMutations } from "@/app/store/store.helper";
import { RootState } from "@/app/store/root.models";
import { UsersState, savedCredentials } from './user.models';
import { Users } from "@/app/models/interfaces/user";

export interface UsersMutations{
    setUsers: UsersState["user"];
    serRegistry: UsersState["registry"];
    setToken: UsersState["token"];
    setUserLoading: UsersState["loading"];
    setLoading: boolean;
    loadUsersInfo: undefined;
    setFirstLoginUser: Users | null;
    clearExpirationTimeout: undefined;
    setExpirationTimeout: number;
    saveUserInfo: { email: string; password: string, remember: boolean},
    deleteAgentInfo: undefined;
}

export const usersMutationsTypes: DefineTypes<UsersMutations> = {
    setUsers: payload => ({type: "setUsers", payload}),
    serRegistry: payload => ({type: "serRegistry", payload}),
    setToken: payload => ({type: "setToken", payload}),
    setUserLoading: payload => ({ type: "setUserLoading", payload}),
    loadUsersInfo: () => ({type: "loadUsersInfo"}),
    setLoading: payload => ({ type: "setLoading", payload }),
    setFirstLoginUser: payload => ({type: "setFirstLoginUser", payload}),
    clearExpirationTimeout: payload => ({ type:"clearExpirationTimeout", payload }),
    setExpirationTimeout: payload => ({ type:"setExpirationTimeout", payload }),
    saveUserInfo: payload => ({ type: "saveUserInfo", payload }),
    deleteAgentInfo: () => ({type:"deleteAgentInfo"}),
}

const mutations: DefineMutations<UsersMutations, UsersState, RootState> = {
    setUsers(state, {payload}){
        state.user = payload;
    },
    serRegistry(state, {payload}) {
        state.registry = payload;
    },
    setToken(state, {payload}){
        state.token = payload;
    },
    setUserLoading(state, {payload}){
        state.loading = payload;
    },
    setLoading(state, { payload }) {
        state.loading = payload;
    },
    setFirstLoginUser(state, {payload: user}){
        state.firstLoginUser = user
    },
    clearExpirationTimeout(state) {
        if (state.expirationTimeout) {
            clearTimeout(state.expirationTimeout)
            state.expirationTimeout = null;
        }
    },
    setExpirationTimeout(state, { payload }) {
        state.expirationTimeout = payload;
    },

    saveUserInfo( state, {payload}){
        const infoToSave: any = payload;
        infoToSave.password = btoa(infoToSave.password);
        localStorage.setItem(savedCredentials, JSON.stringify(infoToSave));
    },

    loadUsersInfo(state, {payload}){
        state.login = JSON.parse(localStorage.getItem(savedCredentials) as any);
    },

    deleteAgentInfo(state, {payload}){
        localStorage.removeItem(savedCredentials);
        state.login = {
            email: '',
            password: '',        
            remember: false,
        }
    },
}

export default mutations;