import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type AddressType = {
    cep: string;
    logradouro: string;
    numero: string;
    bairro: string;
    municipio: string;
    uf: string;
    complemento: string;
}

export interface SignUpResponse {
    nomeRazaoSocial: string | null;
    nomeFantasia: string | null;
    cpfCnpj: string | null;
    inscricaoEstadual: string | null;
    inscricaoMunicipal: string | null;
    email: string | null;
    site: string | null;
    telefone: string | null;
    celular: string | null;
    contato: string | null;
    telefoneContato: string | null;
    endereco: AddressType | null;
    uuid: string;
    /* enderecoEntrega: AddressType | null; */
}

interface NewClientState {
    companyData: SignUpResponse | null;
}

const initialState: NewClientState = {
    companyData: null
}

export const newClientSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        setInfo: (state, action: PayloadAction<SignUpResponse>) => {
            state.companyData = action.payload
        },
    },
})

export const { setInfo } = newClientSlice.actions

export default newClientSlice.reducer