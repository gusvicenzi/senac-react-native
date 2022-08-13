import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity("tb_user")
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @Column()
    email: string
    
    @Column()
    idade: number
}