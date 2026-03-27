import { Controller, Get, Post, Body, Patch, Param, Delete, Req } from '@nestjs/common';
import { ItensCompraService } from './itens-compra.service';
import { CreateItensCompraDto } from './dto/create-itens-compra.dto';
import { UpdateItensCompraDto } from './dto/update-itens-compra.dto';

@Controller('itens-compra')
export class ItensCompraController {
  constructor(private readonly itensCompraService: ItensCompraService) {}

  @Post()
  create(@Body() createItensCompraDto: CreateItensCompraDto, @Req() req: any) {
    const usuarioId = req.usuario.sub

    return this.itensCompraService.create(createItensCompraDto, usuarioId);
  }

  @Get()
  findAll() {
    return this.itensCompraService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.itensCompraService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateItensCompraDto: UpdateItensCompraDto) {
    return this.itensCompraService.update(+id, updateItensCompraDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.itensCompraService.remove(+id);
  }
}
