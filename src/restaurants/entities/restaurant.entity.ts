import { Reviews } from "src/reviews/entities/review.entity";
import { Column, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Restaurant {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    address: string;

    @Column()
    picture: string;

    @Column({ nullable: true })
    website: string;

    @Column()
    category: string;

    @Column({ type: 'float', nullable: true })
    latitude: number;

    @Column({ type: 'float', nullable: true })
    longitude: number;

    @OneToMany(() => Reviews, review => review.restaurant)
    reviews: Reviews[];

    @DeleteDateColumn({ type: 'timestamp', nullable: true })
    delete_at: Date;
}