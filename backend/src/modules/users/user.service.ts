import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from 'src/entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async createUser(
    username: string,
    email: string,
    password: string,
  ): Promise<User> {
    const passwordHash = await bcrypt.hash(password, 10);
    const newUser = this.usersRepository.create({
      username,
      email,
      passwordHash,
    });
    return this.usersRepository.save(newUser);
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return this.usersRepository.findOne({ where: { email } });
  }
}
