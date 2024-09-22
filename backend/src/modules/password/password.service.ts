import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from 'src/entities/user.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class PasswordService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async resetPassword(email: string, newPassword: string): Promise<string> {
    const user = await this.usersRepository.findOne({ where: { email } });
    if (!user) {
      throw new Error('User not found');
    }

    const newPasswordHash = await bcrypt.hash(newPassword, 10);
    user.passwordHash = newPasswordHash;
    await this.usersRepository.save(user);

    // Генерируем новый токен
    const newToken = this.jwtService.sign({ id: user.id, email: user.email });

    return newToken;
  }
}
