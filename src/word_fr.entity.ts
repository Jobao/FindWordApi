
import { Entity, PrimaryColumn } from 'typeorm'

@Entity('fr')
export class WordEntity_FR{

    @PrimaryColumn('text')
    word: string;

}