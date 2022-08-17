import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm"

import { Categoria } from "./Categoria"

@Entity("tb_produto")
export class Produto {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    descricao: string

    @Column()
    preco: number

    @Column()
    estoque: number

    @OneToOne(() => Categoria)
    @JoinColumn({name: 'id_categoria'})
    categoria: Categoria
}