import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToMany,
    JoinTable,
} from "typeorm"
import { Categoria } from "./Categoria"
// import { Category } from "./Category"

@Entity()
export class Questao {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    text: string

    @ManyToMany(() => Categoria)
    @JoinTable({
        name: 'categoria_questao',
        joinColumn: {
            name: 'questao_id',
            referencedColumnName: 'id'
        },
        inverseJoinColumn: {
            name: 'categoria_id',
            referencedColumnName: 'id'
        }
    })
    categories: Categoria[]
}