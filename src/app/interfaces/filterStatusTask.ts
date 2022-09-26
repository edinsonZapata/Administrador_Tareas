import { StatusTask } from "@/app/enums/status-task";


export interface StatusTaskInfo{
    type: StatusTask,
    values: string[]
}