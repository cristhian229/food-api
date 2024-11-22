
import { Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm"


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


    @DeleteDateColumn({ type: 'timestamp', nullable: true })
    delete_at: Date;

}

