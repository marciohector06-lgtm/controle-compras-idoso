import { IsNotEmpty, IsString } from "class-validator";

export class CreateCategoriaDto {
    @IsNotEmpty({message : "É necessário informar o nome da categoria"})
    @IsString()
    nome: string;
}
