import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Department } from '../entities';
import { Repository } from 'typeorm';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';

@Injectable()
export class DepartmentService {
  private readonly logger = new Logger('departmentService');

  constructor(
    @InjectRepository(Department)
    private readonly departmentRepository: Repository<Department>,
  ) {}

  async create(createDepartmentDto: CreateDepartmentDto) {
    try {
      const department = this.departmentRepository.create(createDepartmentDto);

      await this.departmentRepository.save({
        ...department,
        createdAt: new Date(),
        level: { id: createDepartmentDto.levelId },
      });
      return { ...department };
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  findAll() {
    return this.departmentRepository.find({ order: { name: 'ASC' } });
  }

  async findOne(id: string) {
    const department = await this.departmentRepository.findOne({
      where: { id },
      relations: ['level'],
    });

    if (!department) {
      throw new BadRequestException('department not found');
    }

    return department;
  }

  async update(id: string, updateDepartmentDto: UpdateDepartmentDto) {
    const { levelId, ...rest } = updateDepartmentDto;

    try {
      const department = await this.departmentRepository.preload({
        id: id,
        ...rest,
      });

      if (!department) {
        throw new BadRequestException('department not found');
      }

      if (levelId) {
        department.level = { id: levelId, ...department.level };
      }

      return await this.departmentRepository.save(department);
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async remove(id: string) {
    const area = await this.findOne(id);
    return await this.departmentRepository.delete(area);
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
