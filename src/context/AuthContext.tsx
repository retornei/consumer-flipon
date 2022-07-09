import React, { createContext, useEffect, useState } from "react";
import { setCookie, parseCookies } from "nookies";
import Router from "next/router";

import { userSignIn, userSignUp } from "../services/api/methods";
import { api } from "../services/api";


interface SignInProps {
    username: string;
    password: string;
}

interface AuthProviderProps {
    token: string;
    isLogged: boolean;
    signIn: (data: SignInProps) => Promise<void>;
    signUp: (data: SignInProps) => Promise<void>;
}

export const AuthContext = createContext({} as AuthProviderProps)

const AuthProvider: React.FC = ({ children }) => {
    const [token, setToken] = useState<string | undefined>()
    const isLogged = !!token;

    useEffect(() => {
        const { '@retornei-app.token': token } = parseCookies();

        if (token) {
            setToken(token);
        }

    }, [])

    const signIn = async ({ username, password }: SignInProps) => {
        try {
            const { token, type } = await userSignIn({ username, password });

            setCookie(undefined, '@retornei-app.token', `${type} ${token}`);
            setToken(`${type} ${token}`);

            api.defaults.headers["Authorization"] = `${type} ${token}`;

            Router.push("/pedido");
        } catch (err) {
            throw new Error(err)
        }
    }

    const signUp = async ({ username, password }: SignInProps) => {
        try {
            await userSignUp({ username, password });

            Router.push("/sign-in");
        } catch (err) {
            throw Error(err)
        }
    }

    return (
        <AuthContext.Provider value={{ token, signIn, signUp, isLogged }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider