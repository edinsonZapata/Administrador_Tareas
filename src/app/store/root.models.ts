import { ExtendedTasksState } from './modules/tasks/tasks.models';
import { ExtendedUsersState } from './modules/user/user.models';
import { ExtendedRegistryState } from './modules/user/user.models';
import { ExtendedRecordsState } from './modules/record/record.models';

export interface RootState extends ExtendedTasksState { }
export interface RootState extends ExtendedUsersState { }
export interface RootState extends ExtendedRegistryState { }
export interface RootState extends ExtendedRecordsState { }