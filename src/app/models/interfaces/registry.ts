import { UserRole } from "../../enums";

export interface Registry {
    _id: string;
    login: boolean;    
    name: string;
    email: string;  
    confemail: string;  
    password: string;
    confPassword : string;
    username: string;
    role: UserRole;
    typeDocument: string;
    numberDocument: string;
    exp: any;
    firstLogin: boolean;
    lastLogin: Date;
}