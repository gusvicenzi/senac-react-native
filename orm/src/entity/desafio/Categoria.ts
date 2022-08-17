import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity("tb_categoria")
export class Categoria {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string
}