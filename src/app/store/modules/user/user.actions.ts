import { RootState } from "@/app/store/root.models";
import { DefineTypes, DefineActions } from "@/app/store/store.helper";
import { UsersState, AutoTokenName } from './user.models';
import { usersMutationsTypes } from "./user.mutations";
import { parseJwt } from "./user.helper";
import { BASE_URL_MANAGER } from "@/config";
import Axios, { AxiosRequestConfig } from "axios";
import { Registry, Users } from "@/app/models/interfaces";
import { rootTypes, storeTypes } from "../..";
import { config } from "vue/types/umd";

export interface UsersActions{
    registry: Registry;
    login : {email: string; password: string, remember: boolean};
    reLogin: { managementToken: string};
    getAllUsers: undefined;
    setToken: string;
    initExpirationChecker: number;
    //getInfoUsers: undefined,
    getOneUser: string;
    updateNameUser : {id: string, name: Users};
    updatePassword : {id: string, password: Users};
    loadFirstLoginUser: Users;
    loadUser: UsersState["user"]["_id"];
    setAxiosUserHeader: string;
    loadUserInfo: string
}

export const usersActionsTypes: DefineTypes<UsersActions> = {
    registry: payload => ({ type: "registry", payload }),
    login: payload => ({ type: "login", payload }),
    reLogin: payload => ({ type: "reLogin", payload }),
    getAllUsers: payload => ({ type: "getAllUsers" }),
    setToken: payload => ({ type: "setToken", payload }),
    initExpirationChecker: payload => ({ type: "initExpirationChecker", payload }),
    //getInfoUsers: payload => ({type: "getInfoUsers"}),
    getOneUser: payload => ({ type: "getOneUser", payload }),
    updatePassword:  payload => ({ type: "updatePassword", payload }),
    updateNameUser: payload => ({ type: "updateNameUser", payload }),
    loadFirstLoginUser: payload => ({ type: "loadFirstLoginUser", payload }),
    loadUser: payload => ({ type: "loadUser", payload }),
    setAxiosUserHeader: payload => ({ type: "setAxiosUserHeader", payload }),
    loadUserInfo: payload => ({ type: "loadUserInfo", payload }),
}

const actions: DefineActions<UsersActions, UsersState, RootState> ={


    async registry({commit}): Promise<void>{
        try {
        const url = await Axios.post(`${BASE_URL_MANAGER}/user`)
       
        if(url.data){
            commit(usersMutationsTypes.setUsers(url.data))
        }
        
        } catch (err) {
            return new Promise((resolve, reject) => reject(err));
        }
    },

    async login({commit, dispatch}, {payload}): Promise<void>{
        try {            
            const { remember } = payload
            const url = await Axios.post( `${BASE_URL_MANAGER}/user/login`, payload)             
 
            if(url){
                const { token } = url.data;

                if(token){
                    console.log(url);            
                    localStorage.token = url.data.token;
                    localStorage.login = url.config.data;
                    // localStorage.infoUser = data.headers
                    remember ? commit(usersMutationsTypes.saveUserInfo(payload)) : commit(usersMutationsTypes.deleteAgentInfo());

                  
                    await dispatch(usersActionsTypes.loadUserInfo(token))
                }

            }

        } catch (err) {
            return new Promise((resolve,reject) => reject(err));
        }
    },
    async reLogin({ commit, dispatch }, {payload}): Promise<void>{
        try {
            const { managementToken } = payload;

            commit(usersMutationsTypes.setUserLoading(true));

        } catch (err) {
            commit(usersMutationsTypes.setUserLoading(false))
        }
    },

    async getAllUsers({commit}){
        try{
            //const { projectId, bussinesStatus } = payload;
            const url = `${BASE_URL_MANAGER}/user/consultAllUsers`;
            
            const res = await Axios.get(url);      
            if(res.data){
                commit(usersMutationsTypes.serRegistry(res.data))
            }

        }catch(err){
            return new Promise((resolve,reject) => reject(err));
        }

    },
    async getOneUser({commit, state}, {payload}){
        try{
            console.log("ejecutando");
        }catch(err){
            return new Promise((resolve,reject) => reject(err));
        }

    },

    async updateNameUser({commit}, {payload}){
        try {
            const {id, name} = payload;
            const url = `${BASE_URL_MANAGER}/user/${id}`

            await Axios.put(url, {name})

        } catch (err) {
            return new Promise((resolve,reject) => reject(err));
        }
    },

    async updatePassword({commit}, {payload}){
        try {
            const {id, password} = payload
            const url =  `${BASE_URL_MANAGER}/user/${id}`
            await Axios.put(url, {password})


        } catch (err) {
            return new Promise((resolve,reject) => reject(err));
        }
    },

    async loadUserInfo({ dispatch }, { payload: token }) {
        await dispatch(usersActionsTypes.setToken(token));
        const decode: Users = parseJwt(token);
        await dispatch(usersActionsTypes.loadFirstLoginUser(decode));
        await dispatch(usersActionsTypes.setAxiosUserHeader(token))
        if (Object.keys(decode).length) {
            await dispatch(storeTypes.users.actions.initExpirationChecker(decode.exp));
        }
        await dispatch(usersActionsTypes.loadUser(decode._id));
    },

    async loadUser({ commit, dispatch }, { payload }) {
        commit(usersMutationsTypes.setLoading(true));
        try {
            const response = await Axios(`${BASE_URL_MANAGER}/user/${payload}`);
            if (!response || !response.data.user) throw new Error("No user on response");
            const { user }: { user: Users } = response.data;
            commit(usersMutationsTypes.setUsers({ ...user, login: true, }));            
            await dispatch(usersActionsTypes.getAllUsers());
        } catch (error) {            
            return Promise.reject(error);
        }
        commit(usersMutationsTypes.setLoading(false))
    },

    setToken({ commit }, { payload }) {
        if (payload && payload.length > 0) {
            localStorage.setItem(AutoTokenName, payload);
            commit(usersActionsTypes.setToken(payload));
        } else {
            localStorage.removeItem(AutoTokenName);
            commit(usersActionsTypes.setToken(payload));
        }
    },

    setAxiosUserHeader({ commit }, { payload }) {
        if (payload && payload.length > 0) {
            Axios.defaults.headers.common["Authorization"] = payload;
        } else {
            if (Axios.defaults.headers.common["Authorization"]) {
                delete Axios.defaults.headers.common["Authorization"];
            }
        }
    },

    initExpirationChecker({ dispatch, state, commit }, { payload }) {
        if (state.expirationTimeout) {
            commit(usersMutationsTypes.clearExpirationTimeout())
        }
        const expiresIn = payload * 1000 - Date.now();
        commit(usersMutationsTypes.setExpirationTimeout(
            (setTimeout(
                async () => {
                    if (state.token) {
                        await dispatch(usersActionsTypes.reLogin({ managementToken: state.token }))                            
                    } else {
                        console.log(AutoTokenName);

                    }
                },
                expiresIn - 200
            ) as any)
        ))
    },

    async loadFirstLoginUser({ commit }, { payload }) {
        const firstLoginUser = (payload.firstLogin ? payload : null) || (() => {
            try {
                return localStorage.getItem("firstLoginUser")
                    ? JSON.parse(localStorage.getItem("firstLoginUser")!)
                    : null
            } catch (error) {
                return null
            }
        })()
        if (firstLoginUser && firstLoginUser.role === "ADMIN") {
            localStorage.setItem("firstLoginUser", JSON.stringify(firstLoginUser))
            commit(usersMutationsTypes.setFirstLoginUser(firstLoginUser))
        }
    },

}

export default actions;