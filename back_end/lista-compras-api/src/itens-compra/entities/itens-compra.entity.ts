import { Item } from "@prisma/client";

export class ItensCompraEntity implements Item {
    id: number;
    nome: string;
    quantidade: number;
    observacao: string;
    comprado: boolean;
    categoriaId: number;
    criadoPorId: number;
    atualizadoPorId: number;
    compradoPorId: number;
    criadoEm: Date;
    atualizadoEm: Date;
    compradoEm: Date;
}
