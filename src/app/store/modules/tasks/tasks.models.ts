import { Tasks } from "@/app/models/interfaces/tasks";
export interface TasksState{
    tasks: Tasks[],
    totalPages: number,
    
}

export type ExtendedTasksState = { tasks?: TasksState };

export const initialTasksState: TasksState = {
    tasks: [],
    totalPages: 0
}