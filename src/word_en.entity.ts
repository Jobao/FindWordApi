import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity('en')
export class WordEntity_EN{

    @PrimaryColumn('text')
    word: string;

}