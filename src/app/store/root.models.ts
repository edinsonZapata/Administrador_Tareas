import { ExtendedTasksState } from './modules/tasks/tasks.models';
import { ExtendedUsersState } from './modules/user/user.models';

export interface RootState extends ExtendedTasksState { }
export interface RootState extends ExtendedUsersState { }