import { Restaurant } from "src/restaurants/entities/restaurant.entity";
import { User } from "src/users/entities/user.entity";
import { Column, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"


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
    dishCategory:string

    @ManyToOne(() => Restaurant, restaurant => restaurant.reviews)
    restaurant: Restaurant;

    @ManyToOne(() => User, user => user.reviews)
    user: User;

    @DeleteDateColumn({ type: 'timestamp', nullable: true })
    delete_at: Date;

}
