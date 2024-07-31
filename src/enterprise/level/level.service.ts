import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { CreateLevelDto } from './dto/create-level.dto';
import { UpdateLevelDto } from './dto/update-level.dto';
import { Repository } from 'typeorm';
import { Level } from '../entities';
import { InjectRepository } from '@nestjs/typeorm';
import { isUUID } from 'class-validator';

@Injectable()
export class LevelService {
  private readonly logger = new Logger('levelService');

  constructor(
    @InjectRepository(Level)
    private readonly levelRepository: Repository<Level>, // private readonly datasource: DataSource,
  ) {}

  async create(createLevelDto: CreateLevelDto) {
    try {
      const level = this.levelRepository.create(createLevelDto);

      await this.levelRepository.save(level);
      return { ...level };
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  findAll() {
    return this.levelRepository.find({ order: { id: 'ASC' } });
  }

  async findOne(id: string) {
    const level = await this.levelRepository.findOne({
      where: { id },
      relations: ['departments', 'sections', 'areas'],
    });

    if (!level) {
      throw new NotFoundException('Level not found');
    }

    return level;
  }

  async update(id: string, updateLevelDto: UpdateLevelDto) {
    if (!isUUID(id)) return new NotFoundException('Invalid ID');

    try {
      await this.levelRepository.update(id, updateLevelDto);
      return { id, ...updateLevelDto };
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async remove(id: string) {
    const level = await this.findOne(id);
    return await this.levelRepository.remove(level);
  }

  private handleDBExceptions(error: any) {
    if (error.code === '23505') {
      throw new BadRequestException(error.detail);
    }

    this.logger.error(error);
    throw new InternalServerErrorException(
      'Unexpected error - Check server logs',
    );
  }
}
