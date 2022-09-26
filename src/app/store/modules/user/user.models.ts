import { Registry } from "@/app/models/interfaces/registry";
import { Users } from "@/app/models/interfaces/user";
//export const UserToken = "token";
export const AutoTokenName = "token"
export interface UsersState{
    user: Users,
    registry: Registry[],
    firstLoginUser: Users | null,
    token: string,
    totalPages: number,
    loading: boolean,
    expirationTimeout: number | null,
    login: {
        email: string,
        password: string,
        remember: boolean
    }    
}

export type ExtendedUsersState = { users?: UsersState };

export type ExtendedRegistryState = { registry?: UsersState};

export const savedCredentials ="credentials:wizard";

export const initialUsersState: UsersState = {
    token: localStorage.getItem(AutoTokenName)|| "",  
    registry: [],
    user: { _id: "", login: false},    
    firstLoginUser: null,
    totalPages: 0,
    loading: false,
    expirationTimeout: null,
    login: {
        email: '',
        password: '',
        remember: false
    },
}