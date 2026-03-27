import { Usuario } from '@prisma/client'
import { PerfilUsuario } from '../enums/role.enums';

export class UsuarioEntity implements Usuario{
    id: number;
    nome: string;
    email: string;
    senha: string;
    perfil: PerfilUsuario;
}
