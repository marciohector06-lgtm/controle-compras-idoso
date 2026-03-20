import { Injectable } from "@nestjs/common";
import * as bcrypt from 'bcrypt';

@Injectable()
export class HashService{
    async gerarHash(senha: string): Promise<string>{
        const salt = await bcrypt.genSalt(10);
        return bcrypt.hash(senha, salt)
    }

    async comparar(senhaPura: string, senhaHash: string): Promise<boolean>{
        return bcrypt.compare(senhaPura, senhaHash)
    }
}