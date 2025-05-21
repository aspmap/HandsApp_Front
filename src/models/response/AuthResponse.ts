import {IUser} from "../IUser";

export interface AuthResponse {
    accessToken: string;
    basic: string;
    refreshToken: string;
    user: IUser;
}