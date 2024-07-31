import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { CreatePositionDto } from './dto/create-position.dto';
import { UpdatePositionDto } from './dto/update-position.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Position } from '../entities';
import { Repository } from 'typeorm';

@Injectable()
export class PositionsService {
  private readonly logger = new Logger('positionsService');

  constructor(
    @InjectRepository(Position)
    private readonly positionRepository: Repository<Position>,
  ) {}

  async create(createPositionDto: CreatePositionDto) {
    try {
      const position = this.positionRepository.create(createPositionDto);
      await this.positionRepository.save({
        ...position,
        createdAt: new Date(),
      });
      return position;
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  findAll() {
    return this.positionRepository.find({ order: { name: 'ASC' } });
  }

  async findOne(id: string) {
    const position = await this.positionRepository.findOne({
      where: { id },
    });

    if (!position) {
      throw new NotFoundException('Position not found');
    }

    return position;
  }

  async update(id: string, updatePositionDto: UpdatePositionDto) {
    try {
      const position = await this.positionRepository.preload({
        id: id,
        ...updatePositionDto,
      });

      if (!position) {
        throw new NotFoundException('Position not found');
      }

      await this.positionRepository.save(position);
      return position;
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  remove(id: string) {
    return this.positionRepository.delete(id);
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
