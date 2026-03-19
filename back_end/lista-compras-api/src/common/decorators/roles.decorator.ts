import { SetMetadata } from '@nestjs/common';
import { PerfilUsuario } from 'src/usuario/enums/role.enums';

export const ROLES_KEY = "roles"
export const Roles = (...roles: PerfilUsuario[]) => SetMetadata(ROLES_KEY, roles);
