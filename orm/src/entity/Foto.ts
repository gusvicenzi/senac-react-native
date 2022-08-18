import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm"
import { Usuario } from "./Usuario"

@Entity()
export class Foto {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    url: string

    @ManyToOne(() => Usuario, (user) => user.photos) 
    @JoinColumn({name: 'usuario_id'})
    user: Usuario
}