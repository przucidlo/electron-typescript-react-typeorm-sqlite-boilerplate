import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Patient')
export default class Patient {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    name: string;

    @Column()
    surname: string;
}
