export enum UserRole {
    AGENT = "AGENT",
    ADMIN = "ADMIN",
    BASE = "BASE",
}


export interface User {
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