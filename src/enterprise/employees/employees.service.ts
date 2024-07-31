import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee, EmployeePosition, Position } from '../entities';
import { Repository, DataSource } from 'typeorm';

@Injectable()
export class EmployeesService {
  private readonly logger = new Logger('employeesService');

  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
    @InjectRepository(Position)
    private readonly positionRepository: Repository<Position>,
    @InjectRepository(EmployeePosition)
    private readonly employeePositionRepository: Repository<EmployeePosition>,
    private readonly datasource: DataSource,
  ) {}

  async create(createEmployeeDto: CreateEmployeeDto) {
    try {
      const employee = this.employeeRepository.create(createEmployeeDto);

      await this.employeeRepository.save({
        ...employee,
        createdAt: new Date(),
        person: { id: createEmployeeDto.personId },
        user: { id: createEmployeeDto.userId },
      });

      return { ...employee };
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  findAll() {
    return this.employeeRepository.find({ order: { employeeIdNumber: 'ASC' } });
  }

  async findOne(id: string) {
    const employee = await this.employeeRepository.findOne({
      where: { id },
      relations: ['person', 'user', 'employeePositions'],
    });

    if (!employee) {
      throw new NotFoundException('Employee not found');
    }

    return employee;
  }

  async update(id: string, updateEmployeeDto: UpdateEmployeeDto) {
    const { personId, userId, ...rest } = updateEmployeeDto;

    try {
      const employee = await this.employeeRepository.preload({
        id: id,
        ...rest,
      });

      if (!employee) {
        throw new NotFoundException('Employee not found');
      }

      await this.employeeRepository.save({
        ...employee,
        person: { id: personId },
        user: { id: userId },
      });

      return { ...employee };
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  remove(id: string) {
    return this.employeeRepository.delete({ id });
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
