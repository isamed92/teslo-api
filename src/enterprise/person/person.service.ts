import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Address, Email, Person, Phone } from '../entities';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class PersonService {
  private readonly logger = new Logger('PersonService');

  constructor(
    @InjectRepository(Person)
    private readonly personRepository: Repository<Person>,
    @InjectRepository(Email)
    private readonly emailRepository: Repository<Email>,
    @InjectRepository(Phone)
    private readonly phoneRepository: Repository<Phone>,
    @InjectRepository(Address)
    private readonly addressRepository: Repository<Address>,
    private readonly datasource: DataSource,
  ) {}

  async create(createPersonDto: CreatePersonDto) {
    // TODO: Implement this method with multiple phone, email, and addresses per person (array of objects)
    const queryRunner = this.datasource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const email = this.emailRepository.create({
        address: createPersonDto.email,
      });

      await queryRunner.manager.save(email);

      const phone = this.phoneRepository.create({
        areaCode: createPersonDto.areaCode,
        number: createPersonDto.phone,
      });

      await queryRunner.manager.save(phone);

      const address = this.addressRepository.create({
        street: createPersonDto.address,
      });

      await queryRunner.manager.save(address);

      const person = this.personRepository.create({
        ...createPersonDto,
        email: [email],
        phone: [phone],
        address: [address],
      });

      await queryRunner.manager.save(person);

      await queryRunner.commitTransaction();

      return person;
    } catch (error) {
      await queryRunner.rollbackTransaction();

      this.handleDBExceptions(error);
    }
  }

  findAll() {
    return this.personRepository.find({
      relations: ['email', 'phone', 'address'],
    });
  }

  async findOne(id: string) {
    const person = await this.personRepository.findOne({
      where: { id },
      relations: ['email', 'phone', 'address'],
    });

    if (!person) {
      throw new NotFoundException('Person not found');
    }

    return person;
  }

  async update(id: string, updatePersonDto: UpdatePersonDto) {
    const { email, phone, address, areaCode, ...rest } = updatePersonDto;

    const queryRunner = this.datasource.createQueryRunner();

    await queryRunner.connect();

    await queryRunner.startTransaction();

    try {
      const person = await this.personRepository.preload({
        id: id,
        ...rest,
      });

      if (!person) {
        throw new NotFoundException('Person not found');
      }

      if (email) {
        const emailEntity = await this.emailRepository.findOne({
          where: { person: { id } },
        });

        if (!emailEntity) {
          throw new NotFoundException('Email not found');
        }

        emailEntity.address = email;

        await queryRunner.manager.save(emailEntity);
      }

      if (phone) {
        const phoneEntity = await this.phoneRepository.findOne({
          where: { person: { id } },
        });

        if (!phoneEntity) {
          throw new NotFoundException('Phone not found');
        }

        phoneEntity.areaCode = areaCode;
        phoneEntity.number = phone;

        await queryRunner.manager.save(phoneEntity);
      }

      if (address) {
        const addressEntity = await this.addressRepository.findOne({
          where: { person: { id } },
        });

        if (!addressEntity) {
          throw new NotFoundException('Address not found');
        }

        addressEntity.street = address;

        await queryRunner.manager.save(addressEntity);
      }

      await queryRunner.manager.save(person);

      await queryRunner.commitTransaction();

      return person;
    } catch (error) {
      await queryRunner.rollbackTransaction();

      this.handleDBExceptions(error);
    }
  }

  remove(id: string) {
    return this.personRepository.delete({ id });
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
