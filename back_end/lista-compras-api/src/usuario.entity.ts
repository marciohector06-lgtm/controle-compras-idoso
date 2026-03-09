import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Usuarios') // Tem de ser o nome exato da tabela no SQLite
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  cpf: string;

  @Column()
  senha: string;

  @Column()
  perfil_admin: number; // Lembra-te: 0 para Idoso, 1 para Admin

  @Column({ type: 'real', nullable: true })
  limite_gastos: number;

  @Column({ type: 'real', nullable: true })
  saldo_disponivel: number;

  @Column({ nullable: true })
  restricao_medica: string;
}