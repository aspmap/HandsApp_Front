import $api from "../http";
import {AxiosResponse} from 'axios';
import {AuthResponse} from "../models/response/AuthResponse";

export default class AuthService {
    static async login(username: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        console.log('response3 ' )
        return $api.post<AuthResponse>('/token', 'username=' + username + '&password=' + password);
    }

    static async registration(username: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/registration', {username, password})
    }

    static async logout(): Promise<void> {
        return $api.get('/logout')
    }

}