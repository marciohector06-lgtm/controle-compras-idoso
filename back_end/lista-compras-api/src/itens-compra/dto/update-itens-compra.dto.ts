import { PartialType } from '@nestjs/mapped-types';
import { CreateItensCompraDto } from './create-itens-compra.dto';

export class UpdateItensCompraDto extends PartialType(CreateItensCompraDto) {}
