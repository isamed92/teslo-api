import { Module } from '@nestjs/common';
import { PersonService } from './person.service';
import { PersonController } from './person.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Address, Email, Person, Phone } from '../entities';

@Module({
  controllers: [PersonController],
  providers: [PersonService],
  imports: [TypeOrmModule.forFeature([Person, Email, Phone, Address])],
})
export class PersonModule {}
