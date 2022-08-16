import { StatusTask } from "../../enums";
import {User} from "./user";

export interface Tasks{
    theme: string,
    description: string,
    priority: string,
    status: StatusTask,
    assessment: string,
    estimatedTime: Date,
    managers: User[]
}