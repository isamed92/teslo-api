import { Module } from '@nestjs/common';
import { LevelService } from './level.service';
import { LevelController } from './level.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Level } from '../entities';

@Module({
  controllers: [LevelController],
  providers: [LevelService],
  imports: [TypeOrmModule.forFeature([Level])],
})
export class LevelModule {}
