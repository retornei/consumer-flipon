import axios from "axios";
import { api } from "..";

interface UserSignInProps {
    username: string;
    password: string;
}

interface LoginResponse {
    token: string;
    type: string;
}

export const userSignIn = async ({ username, password }: UserSignInProps) => {
    try {
        const result = await api.post("/authuser/auth/login", { username, password, "front": "flipon-client" });
        const { token, type } = result.data as LoginResponse;

        return { token, type };
    } catch (err) {
        if (err.response) {
            throw new Error(err.response.data.userMessage);
        } else {
            throw new Error(err.message);
        }
    }
}

export const userSignUp = async ({ username, password }: UserSignInProps) => {
    try {
        const result = await api.post("/authuser/auth", { username, password });

        return result.data;
    } catch (err) {
        if (err.response) {
            throw new Error(err.response.data.userMessage);
        } else {
            throw new Error(err.message);
        }
    }
}

export const newUser = async (usuario) => {
    try {
        const result = await api.post("/consumidor/consumidores/novo-cadastro", usuario);

        return result.data;
    } catch (err) {
        if (err.response) {
            throw new Error(err.response.data.userMessage);
        } else {
            throw new Error(err.message);
        }
    }
}

export const updateUser = async (usuario) => {
    try {
        const result = await api.put("/consumidor/consumidores/novo-update", usuario);

        return result.data;
    } catch (err) {
        if (err.response) {
            throw new Error(err.response.data.userMessage);
        } else {
            throw new Error(err.message);
        }
    }
}

export const getUserInfo = async () => {
    try {
        const result = await api.get("/consumidor/consumidores/dados-cadastro");

        return result.data;
    } catch (err) {
        if (err.response) {
            throw new Error(err.response.data.userMessage);
        } else {
            throw new Error(err.message);
        }
    }
}

export const updateUserInfo = async (user) => {
    try {
        const result = await api.put("/consumidor/consumidores/editar-cadastro", user);

        return result.data;
    } catch (err) {
        if (err.response) {
            throw new Error(err.response.data.userMessage);
        } else {
            throw new Error(err.message);
        }
    }
}

export const listProducts = async () => {
    try {
        const result = await api.get("/service/produtos");

        return result.data;
    } catch (err) {
        if (err.response) {
            throw new Error(err.response.data.userMessage);
        } else {
            throw new Error(err.message);
        }
    }
}

export const zipConsult = async (cep: string) => {
    try {
        const result = await axios.get(`https://viacep.com.br/ws/${cep}/json`);

        return result.data;
    } catch (err) {
        throw Error(err);
    }
}

export const newAddress = async (address) => {
    try {
        const result = await api.post("/consumidor/enderecos", address);

        return result.data;
    } catch (err) {
        if (err.response) {
            throw new Error(err.response.data.userMessage);
        } else {
            throw new Error(err.message);
        }
    }
}

export const ListAddresses = async () => {
    try {
        const result = await api.get("/consumidor/enderecos");

        return result.data;
    } catch (err) {
        if (err.response) {
            throw new Error(err.response.data.userMessage);
        } else {
            throw new Error(err.message);
        }
    }
}

export const getAddress = async (addressId) => {
    try {
        const result = await api.get(`/consumidor/enderecos/${addressId}`);

        return result.data;
    } catch (err) {
        if (err.response) {
            throw new Error(err.response.data.userMessage);
        } else {
            throw new Error(err.message || "Ocorreu um erro inesperado. Tente novamente mais tarde.");
        }
    }
}

export const updateAddress = async (addressId, address) => {
    try {
        const result = await api.put(`/consumidor/enderecos/${addressId}`, address);

        return result.data;
    } catch (err) {
        if (err.response) {
            throw new Error(err.response.data.userMessage);
        } else {
            throw new Error(err.message || "Ocorreu um erro inesperado. Tente novamente mais tarde.");
        }
    }
}

export const removeAddress = async (addressId) => {
    try {
        const result = await api.delete(`/consumidor/enderecos/${addressId}`);

        return result.data;
    } catch (err) {
        if (err.response) {
            throw new Error(err.response.data.userMessage);
        } else {
            throw new Error(err.message || "Ocorreu um erro inesperado. Tente novamente mais tarde.");
        }
    }
}

export const uploadPhoto = async (file) => {
    try {
        const result = await api.post(`/service/imagens`, file, { headers: { "Content-Type": "multipart/form-data" } });

        return result.data;
    } catch (err) {
        if (err.response) {
            throw new Error(err.response.data.userMessage);
        } else {
            throw new Error(err.message || "Ocorreu um erro inesperado. Tente novamente mais tarde.");
        }
    }
}

export const sendOrder = async (order) => {
    try {
        const result = await api.post(`/service/pedidos`, order);

        return result.data;
    } catch (err) {
        if (err.response) {
            throw new Error(err.response.data.userMessage);
        } else {
            throw new Error(err.message || "Ocorreu um erro inesperado. Tente novamente mais tarde.");
        }
    }
}

export const listOrders = async () => {
    try {
        const result = await api.get(`/service/pedidos/meus-retornos`);

        return result.data;
    } catch (err) {
        if (err.response) {
            throw new Error(err.response.data.userMessage);
        } else {
            throw new Error(err.message || "Ocorreu um erro inesperado. Tente novamente mais tarde.");
        }
    }
}

export const listOrder = async (orderId) => {
    try {
        const result = await api.get(`/service/pedidos/detalhes/${orderId}`);
        return result.data;
    } catch (err) {
        if (err.response) {
            throw new Error(err.response.data.userMessage);
        } else {
            throw new Error(err.message || "Ocorreu um erro inesperado. Tente novamente mais tarde.");
        }
    }
}

export const updatePassword = async (payload) => {
    try {
        const result = await api.patch(`/authuser/auth`, payload);
        return result.data;
    } catch (err) {
        if (err.response) {
            throw new Error(err.response.data.userMessage);
        } else {
            throw new Error(err.message || "Ocorreu um erro inesperado. Tente novamente mais tarde.");
        }
    }
}
