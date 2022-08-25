import { StatusTask } from "../../enums";
import {Users} from "./user";

export interface Tasks{
    theme: string,
    description: string,
    priority: string,
    status: StatusTask,
    assessment: string,
    estimatedTime: Date,
    managers: Users[]
}