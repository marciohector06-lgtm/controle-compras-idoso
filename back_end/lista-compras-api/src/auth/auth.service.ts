import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsuarioService } from '../usuario/usuario.service';
import { JwtService } from "@nestjs/jwt"

@Injectable()
export class AuthService {
    constructor(
        private usuarioService: UsuarioService,
        private jwtService: JwtService 
    ){}

    async signIn(emailUsuario: string, senhaUsuario: string): Promise<{acess_token: string}>{
        const usuario = await this.usuarioService.findByEmail(emailUsuario);
        if(usuario?.senha != senhaUsuario){
            throw new UnauthorizedException();
        }

        const payload = { sub:  usuario.id, email: usuario.email, perfil: usuario.perfil};

        return { acess_token: await this.jwtService.signAsync(payload) };
    }
}
