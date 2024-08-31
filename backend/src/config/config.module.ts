import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env', // Указывает путь к файлу .env
    }),
  ],
  exports: [ConfigModule],
})
export class ConfigSetupModule {}
