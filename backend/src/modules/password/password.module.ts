import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PasswordService } from './password.service';
import { PasswordResolver } from './password.resolver';
import { User } from 'src/entities/user.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([User]), JwtModule.register({})],
  providers: [PasswordService, PasswordResolver],
})
export class PasswordModule {}
