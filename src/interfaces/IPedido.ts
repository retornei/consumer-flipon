export interface IEndereco {
    cep?: string;
    logradouro?: string;
    numero?: string;
    bairro?: string;
    municipio?: string;
    uf?: string;
    complemento?: string;
}

export interface IConsumidor {
    uuid?: string;
    nomeRazaoSocial?: string;
    nomeFantasia?: string;
    cpfCnpj?: string;
    inscricaoEstadual?: string;
    inscricaoMunicipal?: string;
    email?: string;
    site?: string;
    telefone?: string;
    celular?: string;
    contato?: string;
    telefoneContato?: string;
    active?: string;
}

export interface IItem {
    uuidItem: string;
    imagemOriginal?: string;
    imagemConsumidor?: string;
    descricao?: string;
    valor?: number;
    quantidade?: string;
    comentario?: string;
    acao?: string;
    motivo?: string;
}


export interface IPedido {
    uuidPedido?: string;
    mensagemCliente?: string;
    mensagemConsumidor?: string;
    data?: string;
    aprovado?: string;
    codigoCorreios?: string;
    dataRejeicao?: number[];
    dataAprovado?: number[];
    dataConcluido?: number[];
    status?: string;
}
