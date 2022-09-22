import { RootState } from "@/app/store/root.models";
import { DefineTypes, DefineActions } from "@/app/store/store.helper";
import { TasksState } from './tasks.models';
import { tasksMutationsTypes } from "./tasks.mutations";
import { BASE_URL_MANAGER } from "@/config";
import Axios, { AxiosRequestConfig } from "axios";

export interface TasksActions{
    getAllTasks: undefined,
    getOneTask: string
}

export const tasksActionsActionsTypes: DefineTypes<TasksActions> = {
    getAllTasks: payload => ({type: "getAllTasks"}),
    getOneTask: payload => ({type: "getOneTask", payload})
}

const actions: DefineActions<TasksActions, TasksState, RootState> ={
    async getAllTasks({commit}){
        try{
            //const { projectId, bussinesStatus } = payload;
            const url = `${BASE_URL_MANAGER}/tasks/consultAllTasks`;

            const res = await Axios.get(url);

            if(res.data){
                commit(tasksMutationsTypes.setTasks(res.data))
            }

        }catch(err){
            return new Promise((resolve,reject) => reject(err));
        }

    },
    async getOneTask({commit, state}, {payload}){
        try{
            console.log("ejecutando");
        }catch(err){
            return new Promise((resolve,reject) => reject(err));
        }

    }
}

export default actions;