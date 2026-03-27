import { IsNotEmpty, IsString, IsEmail, IsOptional, IsEnum } from "class-validator";
import { PerfilUsuario } from "../enums/role.enums";


export class CreateUsuarioDto {
    @IsString()
    @IsNotEmpty()
    nome: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    senha: string;

    @IsOptional()
    @IsEnum(PerfilUsuario)
    perfil?: PerfilUsuario;
}