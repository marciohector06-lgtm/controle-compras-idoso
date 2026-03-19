import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { PerfilUsuario } from 'src/usuario/enums/role.enums';
import { ROLES_KEY } from '../decorators/roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector){}

  canActivate(context: ExecutionContext,): boolean {
    const requiredRole = this.reflector.getAllAndOverride<PerfilUsuario[]>(ROLES_KEY,[
      context.getHandler(),
      context.getClass()
    ]);

    if(!requiredRole){
      return true;
    }

    const { usuario } = context.switchToHttp().getRequest();

    return requiredRole.some((role) => usuario.perfil?.includes(role));
  }
}
