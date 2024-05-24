import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async createUser(name: string, password: string): Promise<User> {
    const user = this.usersRepository.create({ name, password });
    return this.usersRepository.save(user);
  }

  async findUser(name: string, password: string): Promise<User> {
    return this.usersRepository.findOne({ where: { name, password } });
  }

  async findUserById(id: number): Promise<User> {
    return this.usersRepository.findOne({ where: { id } });
  }
}
