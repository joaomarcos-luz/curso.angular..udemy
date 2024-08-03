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
    {
        nome: "Ana Paula",
        email: "anapaula@exemplo.com",
        senha: "outra-senha-456",
        idade: 32,
        endereco: {
            rua: "Rua das Flores",
            numero: 20,
            cidade: "São Paulo",
            estado: "SP",
            pais: "Brasil"
        },
        telefone: 11987654321,
        ativo: true,
        funcao: "Gerente de Projetos",
        dataCadastro: "2024-07-15T10:30:00.0002Z",
        status: {
            online: false,
            verificado: true,
            assinaturaAtiva: false,
            ultimoAcesso: "2024-07-30T15:45:00.0002Z",
        }
    },
    {
        nome: "Carlos Eduardo",
        email: "carloseduardo@exemplo.com",
        senha: "senha-super-segura-789",
        idade: 40,
        endereco: {
            rua: "Avenida Central",
            numero: 100,
            cidade: "Rio de Janeiro",
            estado: "RJ",
            pais: "Brasil"
        },
        telefone: 21987654321,
        ativo: false,
        funcao: "Analista de Sistemas",
        dataCadastro: "2024-06-01T08:00:00.0002Z",
        status: {
            online: false,
            verificado: false,
            assinaturaAtiva: false,
            ultimoAcesso: "2024-06-15T11:00:00.0002Z",
        }
    },
    {
        nome: "Beatriz Souza",
        email: "beatrizsouza@exemplo.com",
        senha: "senha-inovadora-321",
        idade: 26,
        endereco: {
            rua: "Rua das Palmeiras",
            numero: 5,
            cidade: "Belo Horizonte",
            estado: "MG",
            pais: "Brasil"
        },
        telefone: 31987654321,
        ativo: true,
        funcao: "Designer",
        dataCadastro: "2024-07-25T12:00:00.0002Z",
        status: {
            online: true,
            verificado: true,
            assinaturaAtiva: true,
            ultimoAcesso: "2024-08-01T08:00:00.0002Z",
        }
    },
    {
        nome: "Fernando Lima",
        email: "fernandolima@exemplo.com",
        senha: "senha-forte-654",
        idade: 35,
        endereco: {
            rua: "Avenida Paulista",
            numero: 150,
            cidade: "São Paulo",
            estado: "SP",
            pais: "Brasil"
        },
        telefone: 11991234567,
        ativo: true,
        funcao: "Product Owner",
        dataCadastro: "2024-05-20T09:30:00.0002Z",
        status: {
            online: false,
            verificado: true,
            assinaturaAtiva: true,
            ultimoAcesso: "2024-07-31T17:00:00.0002Z",
        }
    }
];