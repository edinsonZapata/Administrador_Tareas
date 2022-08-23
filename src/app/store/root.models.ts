import { ExtendedTasksState } from './modules/tasks/tasks.models';
import { ExtendedRecordsState } from './modules/record/record.models';


export interface RootState extends ExtendedTasksState { }
export interface RootState extends ExtendedRecordsState { }
