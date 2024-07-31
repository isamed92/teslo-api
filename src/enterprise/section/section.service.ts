import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Section } from '../entities';
import { Repository } from 'typeorm';
import { CreateSectionDto } from './dto/create-section.dto';
import { UpdateSectionDto } from './dto/update-section.dto';

@Injectable()
export class SectionService {
  private readonly logger = new Logger('sectionService');

  constructor(
    @InjectRepository(Section)
    private readonly sectionRepository: Repository<Section>,
  ) {}

  async create(createSectionDto: CreateSectionDto) {
    try {
      const section = this.sectionRepository.create(createSectionDto);

      await this.sectionRepository.save({
        ...section,
        createdAt: new Date(),
        level: { id: createSectionDto.levelId },
      });
      return { ...section };
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  findAll() {
    return this.sectionRepository.find({ order: { name: 'ASC' } });
  }

  async findOne(id: string) {
    const section = await this.sectionRepository.findOne({
      where: { id },
      relations: ['level'],
    });

    if (!section) {
      throw new BadRequestException('section not found');
    }

    return section;
  }

  async update(id: string, updateSectionDto: UpdateSectionDto) {
    const { levelId, ...rest } = updateSectionDto;

    try {
      const section = await this.sectionRepository.preload({
        id: id,
        ...rest,
      });

      if (!section) {
        throw new BadRequestException('section not found');
      }

      if (levelId) {
        section.level = { id: levelId, ...section.level };
      }

      return await this.sectionRepository.save(section);
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async remove(id: string) {
    const section = await this.findOne(id);
    return await this.sectionRepository.delete(section);
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
