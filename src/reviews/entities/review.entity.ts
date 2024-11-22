import { Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm"


@Entity()
export class Reviews {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    plate:string

    @Column()
    picture:string
    
    @Column({type:'float'})
    rating: number;

    @Column()
    comments:string

    @Column()
    category:string


    @DeleteDateColumn({ type: 'timestamp', nullable: true })
    delete_at: Date;

}
