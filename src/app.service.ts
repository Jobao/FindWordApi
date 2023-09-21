import { Injectable } from '@nestjs/common';
import { WordEntity_ES } from './word_es.entity';
import { InjectRepository } from '@nestjs/typeorm';
import {
  Like,
  Repository,
} from 'typeorm';
import { WordEntity_EN } from './word_en.entity';
import { WordEntity_FR } from './word_fr.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(WordEntity_ES)
    private wordRepository_ES: Repository<WordEntity_ES>,
    @InjectRepository(WordEntity_EN)
    private wordRepository_EN: Repository<WordEntity_EN>,
    @InjectRepository(WordEntity_FR)
    private wordRepository_FR: Repository<WordEntity_FR>,
  ) {}

  async findWord(word: string, lang: string) {
    let comodinConsonante: string = '*';
    let query: string = '';
    word = word.toLowerCase();
    let arr: WordEntity_ES[] = [];
    if (word.length > 0) {
      for (let index = 0; index < word.length; index++) {
        const element = word[index];
        if (element === comodinConsonante) {
          query = query.concat('_');
        } else {
          query = query.concat(element);
        }
      }
      if(lang){
        if (lang === 'es') {
          await this.wordRepository_ES
            .find({ where: { word: Like(query) } })
            .then((t) => (arr = t));
        } else {
          if (lang === 'en') {
            await this.wordRepository_EN
              .find({ where: { word: Like(query) } })
              .then((t) => (arr = t));
          } else {
            if (lang === 'fr') {
              await this.wordRepository_FR
                .find({ where: { word: Like(query) } })
                .then((t) => (arr = t));
            }
          }
        }
      }
      else{
        await this.wordRepository_ES
            .find({ where: { word: Like(query) } })
            .then((t) => (arr = t));
      }
      
      return arr;
    } else {
      return 'La busqueda debe tener mas de un caracter';
    }
  }
}
