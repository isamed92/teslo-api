import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { CreateAreaDto } from './dto/create-area.dto';
import { UpdateAreaDto } from './dto/update-area.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Area } from '../entities';
import { Repository } from 'typeorm';

@Injectable()
export class AreaService {
  private readonly logger = new Logger('areaService');

  constructor(
    @InjectRepository(Area)
    private readonly areaRepository: Repository<Area>,
  ) {}

  async create(createAreaDto: CreateAreaDto) {
    try {
      const area = this.areaRepository.create(createAreaDto);

      await this.areaRepository.save({
        ...area,
        createdAt: new Date(),
        level: { id: createAreaDto.levelId },
      });
      return { ...area };
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  findAll() {
    return this.areaRepository.find({ order: { name: 'ASC' } });
  }

  async findOne(id: string) {
    const area = await this.areaRepository.findOne({
      where: { id },
      relations: ['level'],
    });

    if (!area) {
      throw new BadRequestException('Area not found');
    }

    return area;
  }

  async update(id: string, updateAreaDto: UpdateAreaDto) {
    try {
      const area = await this.findOne(id);
      if (updateAreaDto.levelId && area.level.id !== updateAreaDto.levelId) {
        await this.areaRepository.update(id, {
          ...area,
          ...updateAreaDto,
          level: { id: updateAreaDto.levelId },
        });
      } else {
        await this.areaRepository.update(id, {
          ...updateAreaDto,
          level: {
            id: area.level.id,
          },
        });
      }
      return { id, ...updateAreaDto };
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async remove(id: string) {
    const area = await this.findOne(id);
    return await this.areaRepository.delete(area);
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
