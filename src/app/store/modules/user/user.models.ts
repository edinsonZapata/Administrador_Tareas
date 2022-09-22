import { Users } from "@/app/models/interfaces/user";
export interface UsersState{
    users: Users[],
    totalPages: number,
    loading: boolean,
    login: {
        email: string,
        password: string
    }
}

export type ExtendedUsersState = { users?: UsersState };
export const savedCredentials ="credentials:wizard";

export const initialUsersState: UsersState = {
    users: [],
    totalPages: 0,
    loading: false,
    login: {
        email: '',
        password: ''
    },
}