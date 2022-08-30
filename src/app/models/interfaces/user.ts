import { UserRole } from "../../enums";

export interface Users {
    _id: string;
    name: string;
    email: string;
    confemail: string
    password: string;
    confPassword : string;
    username: string;
    role: UserRole;
    typeDocument: string;
    numberDocument: string;
    firstLogin: boolean;
    lastLogin: Date;
    agentStatus: string;
}