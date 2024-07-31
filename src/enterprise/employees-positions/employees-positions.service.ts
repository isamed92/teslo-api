import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { CreateEmployeesPositionDto } from './dto/create-employees-position.dto';
import { UpdateEmployeesPositionDto } from './dto/update-employees-position.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { EmployeePosition } from '../entities';
import { Repository } from 'typeorm';

@Injectable()
export class EmployeesPositionsService {
  private logger = new Logger('EmployeesPositionsService');

  constructor(
    @InjectRepository(EmployeePosition)
    private employeesPositionsRepository: Repository<EmployeePosition>,
  ) {}

  async create(createEmployeesPositionDto: CreateEmployeesPositionDto) {
    try {
      const employeesPosition = this.employeesPositionsRepository.create({
        ...createEmployeesPositionDto,
        createdAt: new Date(),
        updatedAt: new Date(),
        area: { id: createEmployeesPositionDto.areaId },
        department: { id: createEmployeesPositionDto.departmentId },
        section: { id: createEmployeesPositionDto.sectionId },
        position: { id: createEmployeesPositionDto.positionId },
        employee: { id: createEmployeesPositionDto.employeeId },
      });
      await this.employeesPositionsRepository.save(employeesPosition);
      return employeesPosition;
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  findAll() {
    return this.employeesPositionsRepository.find({
      order: { createdAt: 'DESC' },
      relations: ['employee', 'position', 'department', 'section', 'area'],
    });
  }

  async findOne(id: string) {
    const employeesPosition = await this.employeesPositionsRepository.findOne({
      where: { id },
      relations: ['employee', 'position', 'department', 'section', 'area'],
    });

    if (!employeesPosition) {
      throw new NotFoundException('Employee Position not found');
    }

    return employeesPosition;
  }

  async update(
    id: string,
    updateEmployeesPositionDto: UpdateEmployeesPositionDto,
  ) {
    try {
      const employeesPosition = await this.employeesPositionsRepository.findOne(
        { where: { id } },
      );

      if (!employeesPosition) {
        throw new NotFoundException('Employee Position not found');
      }

      this.employeesPositionsRepository.merge(
        employeesPosition,
        updateEmployeesPositionDto,
      );
      employeesPosition.updatedAt = new Date();
      await this.employeesPositionsRepository.save(employeesPosition);

      return employeesPosition;
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  remove(id: string) {
    return this.employeesPositionsRepository.delete({ id });
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
