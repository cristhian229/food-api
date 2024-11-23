
import { Role } from "src/auth/guard/enum/rol.enum"
import { Reviews } from "src/reviews/entities/review.entity"
import { Column, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"


@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ unique: true })
    email:string

    @Column()
    name:string
    
    @Column()
    lastName:string

    @Column()
    password:string

    @Column( {type:'enum', enum:Role, default:Role.USER})
    role: Role;

    @OneToMany(() => Reviews, review => review.user)
    reviews: Reviews[];

    @DeleteDateColumn({ type: 'timestamp', nullable: true })
    delete_at: Date;

}

