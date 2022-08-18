import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Foto } from "./Foto"

@Entity()
export class Usuario {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @OneToMany(() => Foto, (photo) => photo.user)
    photos: Foto[]
}