import { RootState } from "@/app/store/root.models";
import { DefineTypes, DefineActions } from "@/app/store/store.helper";
import { UsersState } from './user.models';
import { usersMutationsTypes } from "./user.mutations";
import { BASE_URL_MANAGER } from "@/config";
import Axios, { AxiosRequestConfig } from "axios";

export interface UsersActions{
    registry: {name: string, tipDocument: string, numDocument: string, email: string, confirmemail: string, password: string, confirmpass: string },
    login : {email: string; password: string},
    getAllUsers: undefined,
    //getInfoUsers: undefined,
    getOneUser: string    
}

export const usersActionsActionsTypes: DefineTypes<UsersActions> = {
    registry: payload => ({type: "registry", payload}),
    login: payload => ({type: "login", payload}),
    getAllUsers: payload => ({type: "getAllUsers"}),
    //getInfoUsers: payload => ({type: "getInfoUsers"}),
    getOneUser: payload => ({type: "getOneUser", payload}),
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


    async login({commit}, {payload}): Promise<void>{
        try {            
            const url = await Axios.post( `${BASE_URL_MANAGER}/user/login`)
            console.log(url.data);
            //const res = await Axios.post(url);

            if(url.data){
                commit(usersMutationsTypes.setUsers(url.data))
            }

        } catch (err) {
            return new Promise((resolve,reject) => reject(err));
        }
    },
    async getAllUsers({commit}){
        try{
            //const { projectId, bussinesStatus } = payload;
            const url = `${BASE_URL_MANAGER}/user/consultAllUsers`;

            const res = await Axios.get(url);

            if(res.data){
                commit(usersMutationsTypes.setUsers(res.data))
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
}

export default actions;