import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity("tb_product")
export class Product {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    item: string
    
    @Column()
    marca: string

    @Column()
    categoria: string
    
    @Column()
    preco: number
}