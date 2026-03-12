import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateItensCompraDto {

    @IsString()
    @IsNotEmpty({message : "É necessário informar o nome do item"})
    nome: string;

    @IsNotEmpty({message : "É necessário informar a quantidade do item"})
    quantidade: number;

    @IsString()
    observacao: string; 

    @IsNotEmpty({message : "É necessário informar a categoria do item"})
    @IsNumber()
    categoriaId: number;
}
