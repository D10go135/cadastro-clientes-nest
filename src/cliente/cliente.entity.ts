import { Column,Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('clientes')
export class Cliente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column({unique: true})
  email: string;

  @Column({length: 11})
  telefone: string;

  @Column({length: 11, unique: true})
  cpf: string;

}