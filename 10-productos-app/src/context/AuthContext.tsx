import React, { createContext, useReducer } from "react";
import { LoginResponse, Usuario, LoginData } from '../interfaces/appInterfaces';
import { authReducer, AuthState } from "./AuthReducer";
import cafeApi from '../api/cafeApi';

type AuthContextProps = {
    errorMessage: string;
    token: string | null;
    user: Usuario | null;
    status: 'checking' | 'authenticated' | 'not-authenticated';
    signUp: () => void;
    signIn: (loginData: LoginData) => void;
    logOut: () => void;
    removeError: () => void;

}
const authInicialState: AuthState = {
    status: 'checking',
    token: null,
    user: null,
    errorMessage: ''

}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: any) => {

    const [state, dispatch] = useReducer(authReducer, authInicialState);

    const signIn = async ({ correo, password }: LoginData) => {

        try {

            const resp = await cafeApi.post<LoginResponse>('/auth/login', { correo, password });
            dispatch({
                type: 'signUp',
                payload: {
                    token: resp.data.token,
                    user: resp.data.usuario
                }
            });
        } catch (err) {
            if (err instanceof Error) {
                // ✅ TypeScript knows err is Error
                console.log(err.message);
                dispatch({
                    type: "addError",
                    payload: err.message || 'Informacion incorrecta'
                })
            } else {
                console.log('Unexpected error', err);


            }
        };
        const signUp = () => { }
        const logOut = () => { }
        const removeError = () => { }

        return (
            <AuthContext.Provider value={{
                ...state,
                signUp,
                signIn,
                logOut,
                removeError,


            }}>
                {children}
            </AuthContext.Provider>
        )
    }
}