import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WordEntity_ES } from './word_es.entity';
import { WordEntity_EN } from './word_en.entity';
import { WordEntity_FR } from './word_fr.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'words.db',
    entities: [WordEntity_ES, WordEntity_EN, WordEntity_FR],
    synchronize: true,
    autoLoadEntities: true,
  }),TypeOrmModule.forFeature([WordEntity_ES, WordEntity_EN, WordEntity_FR])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
