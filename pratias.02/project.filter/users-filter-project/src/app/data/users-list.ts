import { IUser } from "../interfaces/user/user.interface";

export const UsersList: IUser[] = [
    {
    nome: "João Marcos",
    email: "joaomarcos@exaple.com",
    senha: "senha-segura-123",
    idade: 28,
    endereco: {
        rua: "Via Veneza",
        numero: 8,
        cidade: "Nova Veneza",
        estado: "GO",
        pais: "Brasil"
    },
    telefone: 62998028545,
    ativo: true,
    funcao: "Desenvolvedor",
    dataCadastro: "2024-08-01T09:00:00.0002Z",
    status: {
        online: true,
        verificado: true,
        assinaturaAtiva: true,
        ultimoAcesso: "2024-08-01T09:00:00.0002Z",
    }
},
]