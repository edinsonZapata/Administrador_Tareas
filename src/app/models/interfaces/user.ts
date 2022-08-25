import { UserRole } from "../../enums";

export interface Users {
    _id: string;
    password?: string;
    username?: string;
    role?: UserRole;
    name?: {
        firstName: string;
        lastName: string;
    };
    firstLogin?: boolean;
    lastLogin?: Date;
    agentStatus?: string;
}