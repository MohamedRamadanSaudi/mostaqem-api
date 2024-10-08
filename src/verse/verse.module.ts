import { Module } from '@nestjs/common';
import { VerseService } from './verse.service';
import { VerseController } from './verse.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Verse } from './entities/verse.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Verse])],
  controllers: [VerseController],
  providers: [VerseService],
  exports: [VerseService],
})
export class VerseModule {
  constructor(private readonly verseService: VerseService) {
    this.verseService.initialVerses();
  }
}
