import { DefineTypes, DefineMutations } from "@/app/store/store.helper";
import { RootState } from "@/app/store/root.models";
import { TasksState } from './user.models';
import { Tasks } from "@/app/models/interfaces/tasks";

export interface TasksMutations{
    setTasks: Tasks[]
}

export const tasksMutationsTypes: DefineTypes<TasksMutations> = {
    setTasks: payload => ({type: "setTasks", payload})
}

const mutations: DefineMutations<TasksMutations, TasksState, RootState> = {
    setTasks(state, {payload}){
        state.tasks = payload;
    },
}

export default mutations;