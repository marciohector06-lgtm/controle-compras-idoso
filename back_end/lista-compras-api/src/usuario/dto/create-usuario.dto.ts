import { IsNotEmpty, IsString, IsEmail } from "class-validator";


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

    @IsString()
    @IsNotEmpty()
    perfil: string;
}