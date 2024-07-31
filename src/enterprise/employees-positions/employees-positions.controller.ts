import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
} from '@nestjs/common';
import { EmployeesPositionsService } from './employees-positions.service';
import { CreateEmployeesPositionDto } from './dto/create-employees-position.dto';
import { UpdateEmployeesPositionDto } from './dto/update-employees-position.dto';

@Controller('employees-positions')
export class EmployeesPositionsController {
  constructor(
    private readonly employeesPositionsService: EmployeesPositionsService,
  ) {}

  @Post()
  create(@Body() createEmployeesPositionDto: CreateEmployeesPositionDto) {
    return this.employeesPositionsService.create(createEmployeesPositionDto);
  }

  @Get()
  findAll() {
    return this.employeesPositionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.employeesPositionsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateEmployeesPositionDto: UpdateEmployeesPositionDto,
  ) {
    return this.employeesPositionsService.update(
      id,
      updateEmployeesPositionDto,
    );
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.employeesPositionsService.remove(id);
  }
}
