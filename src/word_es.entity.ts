
import { Entity, PrimaryColumn } from 'typeorm'

@Entity('es')
export class WordEntity_ES{

    @PrimaryColumn('text')
    word: string;

}